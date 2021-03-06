import { useContext, useEffect, useState } from 'react';
import './Transportation.scss';
import 'Components/MainWindow/MainWindow.scss';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { getTransportations, deleteTransportation } from 'API/transportation';
import { createPDF, getTransportationListPdfText } from 'Utils/pdfFunctions.js';
import Button from 'Components/Form/Button/Button.jsx';
import FloatingButton from 'Components/MainWindow/FloatingButton/FloatingButton.jsx';
import ControlPanel from 'Components/MainWindow/ControlPanel/ControlPanel.jsx';
import usePagination from 'Utils/hooks/usePagination/usePagination.js';
import { formatDateString } from 'Utils/functions.jsx';
import useSort from 'Utils/hooks/useSort/useSort.js';
import { sortByField } from 'Utils/sorting/sorting.js';
import Table from 'Components/Table/Table.jsx';
import UserContext from 'Components/../App';

const Transportation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [transportation, setTransportation] = useState([]);
  const userContext = useContext(UserContext);
  const [workshops, setWorkshops] = useState([
    {
      name: 'ЦехЛЭМЗ',
      visibility: ['ROLE_ADMIN', 'ROLE_LEMZ'],
      senderActive: true,
      recipientActive: true,
    },
    {
      name: 'ЦехЛепсари',
      visibility: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
      senderActive: true,
      recipientActive: true,
    },
    {
      name: 'ЦехЛиговский',
      visibility: [
        'ROLE_ADMIN',
        'ROLE_LIGOVSKIY',
        'ROLE_DISPATCHER',
        'ROLE_MANAGER',
      ],
      senderActive: true,
      recipientActive: true,
    },
    {
      name: 'Офис',
      visibility: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_MANAGER'],
      senderActive: true,
      recipientActive: true,
    },
  ]);
  const { sortPanel, sortedData, sortOrder } = useSort(transportation, {}, [
    transportation,
    workshops,
  ]);

  const filterSearchQuery = (data) => {
    const query = searchQuery.toLowerCase();
    return data.filter(
      (item) =>
        item.cargo.toLowerCase().includes(query) ||
        formatDateString(item.date).includes(query) ||
        item.sender.toLowerCase().includes(query) ||
        item.recipient.toLowerCase().includes(query) ||
        item.driver.toLowerCase().includes(query) ||
        item.id.toString().includes(query),
    );
  };

  const handleFilterData = (data) => {
    return filterTransportation(filterSearchQuery(data));
  };

  const filterTransportation = (data) => {
    return data.filter((item) => {
      let senderCheck = false;
      let recipientCheck = false;
      workshops.map((workshop) => {
        if (workshop.senderActive && workshop.name === item.sender)
          senderCheck = true;
        if (workshop.recipientActive && workshop.name === item.recipient)
          recipientCheck = true;
      });
      return recipientCheck && senderCheck;
    });
  };

  const { pagination, data } = usePagination(
    () => handleFilterData(sortedData),
    [searchQuery, sortOrder, sortedData],
    'static',
  );
  const [isLoading, setIsLoading] = useState(true);

  const printTransportationList = () => {
    let dd = getTransportationListPdfText(
      sortByField(filterTransportation(transportation), {
        fieldName: 'date',
        direction: 'desc',
      }),
    );
    createPDF(dd);
  };

  useEffect(() => {
    document.title = 'Реестр транспортировок';
    let abortController = new AbortController();
    loadTransportation(abortController.signal);
    return function cancel() {
      abortController.abort();
    };
  }, []);

  const loadTransportation = (signal) => {
    getTransportations(signal)
      .then((res) => res.json())
      .then((res) => {
        setTransportation(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const deleteItem = (id) => {
    deleteTransportation(id).then(() => loadTransportation());
  };

  const columns = [
    {
      text: 'Дата',
      value: 'date',
      formatFn: ({ date }) => formatDateString(date),
    },
    { text: 'Товар', value: 'cargo' },
    { text: 'Кол-во', value: 'quantity' },
    { text: 'Откуда', value: 'sender' },
    { text: 'Куда', value: 'recipient' },
    { text: 'Водитель', value: 'driver' },
  ];

  const actions = (item) => [
    {
      elementType: 'edit',
      title: 'Редактировать запись',
      link: `/dispatcher/transportation/edit/${item.id}`,
    },
    {
      elementType: 'delete',
      title: 'Удаление задачи',
      onClick: () => deleteItem(item.id),
      isRendered: userContext.userHasAccess(['ROLE_ADMIN']),
    },
  ];

  return (
    <div className="transportation">
      <div className="main-window">
        <FloatingButton
          linkTo="/dispatcher/transportation/new"
          visibility={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
        />
        <div className="main-window__header main-window__header--full">
          <div className="main-window__title">Реестр транспортировок</div>
        </div>
        <SearchBar
          fullSize
          placeholder="Введите название товара для поиска..."
          setSearchQuery={setSearchQuery}
        />
        <ControlPanel
          buttons={
            <Button
              text="Печать списка"
              inverted
              isLoading={isLoading}
              className="main-window__button main-window__button--inverted"
              onClick={printTransportationList}
            />
          }
          sorting={sortPanel}
          itemsCount={`Всего: ${transportation.length} записей`}
          content={
            <div className="main-window__info-panel">
              <div className="transportation__container">
                <span>Фильтр по подразделениям</span>
                <div className="main-window__filter-pick">
                  <span className="transportation__text">Откуда: </span>
                  {workshops.map((item, index) => {
                    if (userContext.userHasAccess(item.visibility)) {
                      return (
                        <div
                          className={
                            item.senderActive
                              ? 'main-window__button'
                              : 'main-window__button main-window__button--inverted'
                          }
                          onClick={() => {
                            let temp = workshops;
                            temp.splice(index, 1, {
                              ...temp[index],
                              name: item.name,
                              senderActive: !item.senderActive,
                            });
                            setWorkshops([...temp]);
                          }}
                        >
                          {item.name}
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="main-window__filter-pick">
                  <span className="transportation__text">Куда: </span>
                  {workshops.map((item, index) => {
                    if (userContext.userHasAccess(item.visibility)) {
                      return (
                        <div
                          className={
                            item.recipientActive
                              ? 'main-window__button'
                              : 'main-window__button main-window__button--inverted'
                          }
                          onClick={() => {
                            let temp = workshops;
                            temp.splice(index, 1, {
                              ...temp[index],
                              name: item.name,
                              recipientActive: !item.recipientActive,
                            });
                            setWorkshops([...temp]);
                          }}
                        >
                          {item.name}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Table
          columns={columns}
          data={data}
          loading={{ isLoading }}
          actions={actions}
        />
        {pagination}
      </div>
    </div>
  );
};

export default Transportation;

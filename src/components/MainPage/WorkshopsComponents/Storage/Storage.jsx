import { useState, useEffect, useContext } from 'react';
import './Storage.scss';
import 'Components/MainWindow/MainWindow.scss';
import TableView from './TableView.jsx';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import { deleteStorage, getStorage } from 'API/Workshop/storage.js';
import FloatingButton from 'Components/MainWindow/FloatingButton/FloatingButton.jsx';
import ControlPanel from 'Components/MainWindow/ControlPanel/ControlPanel.jsx';
import UserContext from '../../../../App.js';
import { workshops } from '../workshopVariables.js';
import { sortByField } from 'Utils/sorting/sorting.js';

const Storage = (props) => {
  const userContext = useContext(UserContext);
  const [storage, setStorage] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Склад';
    loadStorage();
  }, []);

  const loadStorage = () => {
    setIsLoading(true);
    getStorage(props.type)
      .then(({ data }) => {
        setStorage(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const deleteItem = (id) => {
    deleteStorage(props.type, id).then(() => loadStorage());
  };

  const filterData = (data) => {
    const query = searchQuery.toLowerCase();
    return data.filter(
      (item) =>
        item.id.toString().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.quantity.toLowerCase().includes(query) ||
        item.comment.toLowerCase().includes(query) ||
        item.number.toString().toLowerCase().includes(query),
    );
  };

  const sortParts = (data) => {
    return sortByField(filterData(data), {
      fieldName: 'id',
      direction: 'desc',
    });
  };

  return (
    <div className="storage">
      <div className="main-window">
        <FloatingButton
          linkTo={`${workshops[props.type].storageRedirectURL}/new`}
          visibility={['ROLE_ADMIN', 'ROLE_WORKSHOP']}
        />
        <SearchBar
          fullSize
          placeholder="Введите артикул детали для поиска..."
          setSearchQuery={setSearchQuery}
        />
        <ControlPanel itemsCount={`Всего: ${storage.length} записей`} />
        <TableView
          data={sortParts(storage)}
          userHasAccess={userContext.userHasAccess}
          deleteItem={deleteItem}
          isLoading={isLoading}
          link={workshops[props.type].storageRedirectURL}
        />
      </div>
    </div>
  );
};

export default Storage;

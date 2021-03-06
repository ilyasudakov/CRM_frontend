import { useEffect, useState } from 'react';
import './Work.scss';
import SearchBar from '../SearchBar/SearchBar.jsx';
import TableView from './TableView.jsx';
import { deleteWork, getWork } from 'API/WorkManaging/work_list';
import FloatingButton from 'Components/MainWindow/FloatingButton/FloatingButton.jsx';
import ControlPanel from 'Components/MainWindow/ControlPanel/ControlPanel.jsx';

const Work = (props) => {
  const [work, setWork] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Работы';
    let abortController = new AbortController();
    loadWork(abortController.signal);
    return function cancel() {
      abortController.abort();
    };
  }, []);

  const deleteItem = (id) => deleteWork(id).then(() => loadWork());

  const loadWork = (signal) => {
    getWork(signal)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setWork(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="work">
      <div className="main-window">
        <FloatingButton linkTo="/work-list/new" visibility={['ROLE_ADMIN']} />
        <div className="main-window__header main-window__header--full">
          <div className="main-window__title">Работы</div>
        </div>
        <SearchBar
          fullSize
          placeholder="Введите название работы для поиска..."
          setSearchQuery={setSearchQuery}
        />
        <ControlPanel itemsCount={`Всего: ${work.length} записей`} />
        <TableView
          data={work}
          searchQuery={searchQuery}
          userHasAccess={props.userHasAccess}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};

export default Work;

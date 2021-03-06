import { useEffect } from 'react';
import { MainPageWorkspace } from '../lazyImports';
import './GeneralPage.scss';
import 'Components/MainWindow/MainWindow.scss';

const GeneralPage = (props) => {
  useEffect(() => {
    document.title = 'Главная страница';
  }, []);

  return (
    <div className="general-page">
      <div className="main-window">
        <div className="main-window__content">
          <MainPageWorkspace userHasAccess={props.userHasAccess} />
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;

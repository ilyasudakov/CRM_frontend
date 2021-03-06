import { useContext, useEffect, useState } from 'react';
import FormWindow from 'Components/Form/FormWindow/FormWindow.jsx';
import SelectFromButton from 'Components/Form/SelectFromButton/SelectFromButton.jsx';
import Button from 'Components/Form/Button/Button.jsx';
import ControlPanel from 'Components/MainWindow/ControlPanel/ControlPanel.jsx';
import TableView from '../TableView/TableView.jsx';
import UserContext from '../../../../../App.js';
import './SelectPricelistFile.scss';
import { getPriceLists } from 'API/Clients/price_list.js';
import { Link, useHistory } from 'react-router-dom';

const SelectPricelistFile = ({ data, onChange, defaultValue }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [ltdData, setLtdData] = useState([]);
  const [showWindow, setShowWindow] = useState(false);
  const userContext = useContext(UserContext);
  const history = useHistory();

  const loadLtd = () => {
    getPriceLists()
      .then(({ data }) => {
        setLtdData([...data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(defaultValue);
    if (defaultValue) setSelectedItem(defaultValue);
    if (data) return setLtdData(data);
    if (ltdData.length > 0) return;
    loadLtd();
  }, [defaultValue]);

  return (
    <div className="select-pricefile">
      <div className="main-form__item">
        <div className="main-form__input_name main-form__input_name--header">
          Прайс-лист
          <SelectFromButton
            text="Выберите файл"
            onClick={() => setShowWindow(!showWindow)}
          />
        </div>
        <div className="main-form__input_field">
          <FormWindow
            title="Выбор файла прайс-листа"
            content={
              <>
                <ControlPanel
                  buttons={
                    <Button
                      text="Добавить прайс-лист файл"
                      onClick={() => history.push('/price-list/prices/upload')}
                      className="main-window__button main-window__button--inverted"
                      inverted
                    />
                  }
                />
                <TableView
                  data={ltdData}
                  userHasAccess={userContext.userHasAccess}
                  onSelect={(item) => {
                    setSelectedItem(item);
                    onChange(item);
                    setShowWindow(false);
                  }}
                  selectedItem={selectedItem}
                  isLoading={isLoading}
                  showWindow={showWindow}
                  setShowWindow={setShowWindow}
                />
              </>
            }
            showWindow={showWindow}
            setShowWindow={setShowWindow}
          />
          {selectedItem ? (
            <p>
              <div>{`${selectedItem.uri.split('downloadFile/')[1]}`}</div>
              <Link
                to={`/price-list?filename=${
                  selectedItem.uri.split('downloadFile/')[1]
                }&open=true`}
                className="main-window__link"
                target="_blank"
              >
                Просмотреть прайс
              </Link>
              <span
                onClick={() => {
                  setSelectedItem(null);
                  onChange(null);
                  setShowWindow(false);
                }}
              >
                Удалить
              </span>
            </p>
          ) : (
            <span>Вы можете закрепить .xlsx прайс-лист к данному клиенту</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectPricelistFile;

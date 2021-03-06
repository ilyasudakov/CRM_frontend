import { useEffect, useState } from 'react';
import './SelectPackaging.scss';
import FormWindow from 'Components/Form/FormWindow/FormWindow.jsx';
import { getPackaging } from 'API/Products/packaging.js';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import 'Components/MainWindow/MainWindow.scss';
import deleteSVG from 'Assets/tableview/delete.svg';
import SelectFromButton from 'Components/Form/SelectFromButton/SelectFromButton.jsx';
import TableView from '../TableView.jsx';

const SelectPackaging = (props) => {
  const [selected, setSelected] = useState([]);
  const [packages, setPackages] = useState([]);
  const [showWindow, setShowWindow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadData = (signal) => {
    setIsLoading(true);
    return getPackaging(signal)
      .then((res) => res.json())
      .then((res) => {
        setPackages(res);
        return setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    packages.length === 0 && loadData(abortController.signal);
    if (props.defaultValue) {
      setSelected(props.defaultValue);
    }
  }, [selected, props.defaultValue]);

  return (
    <div className="select-packaging">
      <FormWindow
        title="Выбор упаковки"
        content={
          <>
            <SearchBar
              fullSize
              setSearchQuery={setSearchQuery}
              placeholder="Введите название упаковки для поиска..."
            />
            <TableView
              data={packages}
              searchQuery={searchQuery}
              isLoading={isLoading}
              onSelect={(item) => {
                let temp = selected;
                temp.push(item);
                setSelected([...temp]);
                props.onChange([...temp]);
                setShowWindow(!showWindow);
              }}
            />
          </>
        }
        showWindow={showWindow}
        setShowWindow={setShowWindow}
      />
      <div className="select-packaging__input">
        <div className="select-packaging__input_name main-form__input_name--header">
          {'Упаковка' + (props.required ? '*' : '')}
          {!props.readOnly && (
            <SelectFromButton
              text="Выбрать упаковку"
              onClick={() => setShowWindow(!showWindow)}
            />
          )}
        </div>
        {!props.readOnly && (
          <div className="select-packaging__input-field">
            {props.error === true && (
              <div
                className="select-packaging__error"
                onClick={
                  props.setErrorsArr
                    ? () =>
                        props.setErrorsArr({
                          ...props.errorsArr,
                          [props.errorName]: false,
                        })
                    : null
                }
              >
                Поле не заполнено!
              </div>
            )}
          </div>
        )}
      </div>
      {selected.length > 0 && (
        <div className="main-window">
          <div className="main-window__list">
            <div className="main-window__list-item main-window__list-item--header">
              <span>Название</span>
              <span>Количество</span>
              <span>Размер</span>
              {!props.readOnly && (
                <div className="main-window__actions">Действие</div>
              )}
            </div>
            {selected.map((item, index) => {
              return (
                <div className="main-window__list-item" key={item.id}>
                  <span>
                    <div className="main-window__mobile-text">Название:</div>
                    {item.name}
                  </span>
                  <span>
                    <div className="main-window__mobile-text">Количество:</div>
                    {item.quantity}
                  </span>
                  <span>
                    <div className="main-window__mobile-text">Размер:</div>
                    {item.size}
                  </span>
                  {!props.readOnly && (
                    <div className="main-window__actions">
                      <div
                        className="main-window__action"
                        title="Удалить из списка"
                        onClick={(event) => {
                          event.preventDefault();
                          let temp = selected;
                          temp.splice(index, 1);
                          setSelected([...temp]);
                          props.onChange([...temp]);
                        }}
                      >
                        {/* Удалить */}
                        <img className="main-window__img" src={deleteSVG} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectPackaging;

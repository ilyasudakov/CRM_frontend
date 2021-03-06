import { useState, useEffect } from 'react';
import AddToButton from 'Components/Form/AddToButton/AddToButton.jsx';
import NestedFormItem from 'Components/Form/NestedForm/NestedFormItem/NestedFormItem.jsx';
import FormErrorMessage from 'Components/Form/FormErrorMessage/FormErrorMessage.jsx';
import './SelectContacts.scss';

const SelectContacts = (props) => {
  const [selected, setSelected] = useState([
    {
      name: '',
      lastName: '',
      email: '',
      position: '',
      phoneNumber: '',
      isMinimized: false,
    },
  ]);
  const [defaultValueLoaded, setDefaultValueLoaded] = useState(false);

  useEffect(() => {
    if (
      props.defaultValue !== undefined &&
      props.defaultValue.length !== 0 &&
      !defaultValueLoaded
    ) {
      setDefaultValueLoaded(true);
      setSelected([...props.defaultValue]);
    }
  }, [props.defaultValue, selected]);

  const handleNewContact = () => {
    //Открыть по дефолту форму
    setSelected([
      ...selected,
      {
        name: '',
        lastName: '',
        email: '',
        position: '',
        phoneNumber: '',
        isMinimized: true,
      },
    ]);
    props.handleContactsChange([
      ...selected,
      {
        name: '',
        lastName: '',
        email: '',
        position: '',
        phoneNumber: '',
      },
    ]);
  };

  const deleteContact = (index) => {
    let temp = selected;
    temp.splice(index, 1);
    setSelected([...temp]);
    props.handleContactsChange([...temp]);
  };

  const handleInputChange = (event) => {
    const id = event.target.getAttribute('index');
    const name = event.target.getAttribute('name');
    let value = event.target.value;
    let temp = selected;
    let originalItem = selected[id];
    temp.splice(id, 1, {
      ...originalItem,
      [name]: value,
    });
    setSelected([...temp]);
    props.handleContactsChange([...temp]);
  };

  return (
    <div className="select-contacts">
      <div className="main-form__item">
        <div className="main-form__input_name main-form__input_name--header">
          Контактное лицо*
          {!props.readOnly && (
            <AddToButton
              text="Добавить контактное лицо"
              onClick={handleNewContact}
            />
          )}
        </div>
        <div className="main-form__input_field">
          <div className="select-contacts__selected">
            {selected.map((item, index) => (
              <NestedFormItem
                item={item}
                index={index}
                key={index}
                readOnly={props.readOnly}
                itemsLength={selected.length}
                handleDeleteItem={deleteContact}
                isMinimizedDefault={props.isMinimizedDefault}
                headerItems={[
                  {
                    text: 'ФИО',
                    value:
                      item.lastName === '' && item.name === ''
                        ? ''
                        : `${item.lastName} ${item.name}`,
                    placeholder: 'Введите ФИО...',
                  },
                  {
                    text: 'E-mail',
                    value: item.email,
                    placeholder: 'Введите email...',
                  },
                  {
                    text: 'Телефон',
                    value: item.phoneNumber,
                    placeholder: 'Введите телефон...',
                  },
                ]}
                formInputs={[
                  {
                    name: 'Имя',
                    element: (
                      <input
                        type="text"
                        name="name"
                        index={index}
                        autoComplete="off"
                        onChange={handleInputChange}
                        defaultValue={item.name}
                        readOnly={props.readOnly}
                      />
                    ),
                  },
                  {
                    name: 'Фамилия',
                    element: (
                      <input
                        type="text"
                        name="lastName"
                        index={index}
                        autoComplete="off"
                        onChange={handleInputChange}
                        defaultValue={item.lastName}
                        readOnly={props.readOnly}
                      />
                    ),
                  },
                  {
                    name: 'Должность',
                    element: (
                      <input
                        type="text"
                        name="position"
                        index={index}
                        autoComplete="off"
                        onChange={handleInputChange}
                        defaultValue={item.position}
                        readOnly={props.readOnly}
                      />
                    ),
                  },
                  {
                    name: 'E-mail',
                    element: (
                      <input
                        type="text"
                        name="email"
                        index={index}
                        autoComplete="off"
                        onChange={handleInputChange}
                        defaultValue={item.email}
                        readOnly={props.readOnly}
                      />
                    ),
                  },
                  {
                    name: 'Номер телефона',
                    element: (
                      <input
                        type="text"
                        name="phoneNumber"
                        index={index}
                        autoComplete="off"
                        onChange={handleInputChange}
                        defaultValue={item.phoneNumber}
                        readOnly={props.readOnly}
                      />
                    ),
                  },
                ]}
              />
            ))}
          </div>
        </div>
        <FormErrorMessage error={props.error} hideError={props.hideError} />
      </div>
    </div>
  );
};

export default SelectContacts;

import React, { useState, useEffect } from 'react';
import './NewWorkshopOrder.scss';
import '../../../../../utils/Form/Form.scss';
import ErrorMessage from '../../../../../utils/Form/ErrorMessage/ErrorMessage.jsx';
import InputText from '../../../../../utils/Form/InputText/InputText.jsx';
import ImgLoader from '../../../../../utils/TableView/ImgLoader/ImgLoader.jsx';
import InputDate from '../../../../../utils/Form/InputDate/InputDate.jsx';
import InputProducts from '../../../../../utils/Form/InputProducts/InputProducts.jsx';

const NewWorkshopOrder = (props) => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        status: 'ordered',
        products: [],
        assembly: '',
        date: new Date(),
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        // products: false,
        date: false,
    });
    const [validInputs, setValidInputs] = useState({
        name: false,
        // products: false,
        date: true,
    });

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'date':
                setValidInputs({
                    ...validInputs,
                    date: (value !== null)
                });
                break;
            default:
                if (validInputs[fieldName] !== undefined) {
                    setValidInputs({
                        ...validInputs,
                        [fieldName]: (value !== "")
                    })
                }
                break;
        }
    }

    const formIsValid = () => {
        let check = true;
        let newErrors = Object.assign({
            name: false,
            // products: false,
            date: false,
        });
        for (let item in validInputs) {
            if (validInputs[item] === false) {
                check = false;
                newErrors = Object.assign({
                    ...newErrors,
                    [item]: true
                })
            }
        }
        setFormErrors(newErrors);
        if (check === true) {
            return true;
        }
        else {
            // alert("Форма не заполнена");
            setIsLoading(false);
            setShowError(true);
            return false;
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log(formInputs);
        formIsValid();
        setIsLoading(false);
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        validateField(name, value);
        setFormInputs({
            ...formInputs,
            [name]: value
        })
        setFormErrors({
            ...formErrors,
            [name]: false
        })
    }

    useEffect(() => {
        document.title = "Создание заказа ЛЭМЗF"
    }, [])

    const [showError, setShowError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="new-workshop-order">
            <div className="main-form">
                <div className="main-form__title">Создание заказа</div>
                <div className="main-form__form">
                    <ErrorMessage
                        message="Не заполнены все обязательные поля!"
                        showError={showError}
                        setShowError={setShowError}
                    />
                    <InputDate
                        inputName="Дата"
                        required
                        error={formErrors.date}
                        name="date"
                        selected={Date.parse(formInputs.date)}
                        handleDateChange={(date) => {
                            validateField("date", date);
                            setFormInputs({
                                ...formInputs,
                                date: date
                            })
                            setFormErrors({
                                ...formErrors,
                                date: false
                            })
                        }}
                        errorsArr={formErrors}
                        setErrorsArr={setFormErrors}
                    />
                    <InputText
                        inputName="Наименование"
                        required
                        error={formErrors.name}
                        name="name"
                        handleInputChange={handleInputChange}
                        errorsArr={formErrors}
                        setErrorsArr={setFormErrors}
                    />
                    <InputText
                        inputName="Комплектация"
                        name="assembly"
                        handleInputChange={handleInputChange}
                    />
                    <InputProducts
                        inputName="Продукция"
                        userHasAccess={props.userHasAccess}
                        defaultValue={formInputs.products}
                        required
                        options
                        noPackaging
                        onChange={(value) => {
                            validateField("products", value);
                            setFormInputs({
                                ...formInputs,
                                products: value
                            })
                            setFormErrors({
                                ...formErrors,
                                products: value
                            })
                        }}
                        searchPlaceholder="Введите название продукта для поиска..."
                        error={formErrors.products}
                        errorsArr={formErrors}
                        setErrorsArr={setFormErrors}
                    />
                    <div className="main-form__item">
                        <div className="main-form__input_name">Статус</div>
                        <div className="main-form__input_field">
                            <select
                                name="status"
                                onChange={handleInputChange}
                                value={formInputs.status}
                            >
                                <option value="ordered">Заказано</option>
                                <option value="sent">Отправлено</option>
                                <option value="completed">Завершено</option>
                            </select>
                        </div>
                    </div>
                    <div className="main-form__input_hint">* - поля, обязательные для заполнения</div>
                    <div className="main-form__buttons">
                        <input className="main-form__submit main-form__submit--inverted" type="submit" onClick={() => props.history.push('/lemz/workshop-orders')} value="Вернуться назад" />
                        <input className="main-form__submit" type="submit" onClick={handleSubmit} value="Добавить заказ" />
                        {isLoading && <ImgLoader />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewWorkshopOrder;
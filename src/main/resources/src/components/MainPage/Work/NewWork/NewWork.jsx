import React, { useEffect, useState } from 'react';
import './NewWork.scss';
import '../../../../utils/Form/Form.scss';
import InputText from '../../../../utils/Form/InputText/InputText.jsx';
import ErrorMessage from '../../../../utils/Form/ErrorMessage/ErrorMessage.jsx';
import { addWork } from '../../../../utils/RequestsAPI/WorkManaging/WorkList.jsx';
import ImgLoader from '../../../../utils/TableView/ImgLoader/ImgLoader.jsx';

const NewWork = (props) => {
    const [workInputs, setWorkInputs] = useState({
        work: "",
        typeOfWork: "Продукция"
    })
    const [workErrors, setWorkErrors] = useState({
        work: false
    })
    const [validInputs, setValidInputs] = useState({
        work: false
    })
    const [showError, setShowError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateField = (fieldName, value) => {
        switch (fieldName) {
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
            work: false
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
        setWorkErrors(newErrors);
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
        console.log(workInputs);
        formIsValid() && addWork(workInputs)
            .then(() => props.history.push("/work-list"))
            .catch(error => {
                setIsLoading(false);
                alert('Ошибка при добавлении записи');
                console.log(error);
            })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
        setWorkInputs({
            ...workInputs,
            [name]: value
        })
        setWorkErrors({
            ...workErrors,
            [name]: false
        })
    }

    useEffect(() => {
        document.title = "Создание работы";
    }, [])

    return (
        <div className="main-form">
            <div className="main-form__title">Создание работы</div>
            <form className="main-form__form">
                <ErrorMessage
                    message="Не заполнены все обязательные поля!"
                    showError={showError}
                    setShowError={setShowError}
                />
                <InputText
                    inputName="Название работы"
                    required
                    error={workErrors.work}
                    name="work"
                    handleInputChange={handleInputChange}
                    errorsArr={workErrors}
                    setErrorsArr={setWorkErrors}
                />
                <div className="main-form__item">
                    <div className="main-form__input_name">Тип работы</div>
                    <div className="main-form__input_field">
                        <select
                            name="typeOfWork"
                            onChange={handleInputChange}
                        >
                            <option>Продукция</option>
                            <option>Чертеж</option>
                        </select>
                    </div>
                </div>
                <div className="main-form__input_hint">* - поля, обязательные для заполнения</div>
                <div className="main-form__buttons">
                    <input className="main-form__submit main-form__submit--inverted" type="submit" onClick={() => props.history.push('/work-list')} value="Вернуться назад" />
                    <input className="main-form__submit" type="submit" onClick={handleSubmit} value="Добавить работу" />
                    {isLoading && <ImgLoader />}
                </div>
            </form>
        </div>
    );
};

export default NewWork;
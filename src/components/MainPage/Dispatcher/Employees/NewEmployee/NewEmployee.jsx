import React, { useEffect, useState } from "react";
import "./NewEmployee.scss";
import "../../../../../utils/Form/Form.scss";
import { addEmployee } from "../../../../../utils/RequestsAPI/Employees.jsx";
import InputText from "../../../../../utils/Form/InputText/InputText.jsx";
import InputDate from "../../../../../utils/Form/InputDate/InputDate.jsx";
import ErrorMessage from "../../../../../utils/Form/ErrorMessage/ErrorMessage.jsx";
import FileUploader from "../../../../../utils/Form/FileUploader/FileUploader.jsx";
import Button from "../../../../../utils/Form/Button/Button.jsx";

const NewEmployee = (props) => {
  const [employeeInputs, setEmployeeInputs] = useState({
    name: "",
    lastName: "",
    middleName: "",
    dateOfBirth: new Date(),
    patentExpirationDate: null,
    registrationExpirationDate: null,
    citizenship: "",
    position: "",
    workshop: "ЦехЛЭМЗ",
    passportScan1: "",
    comment: "",
    relevance: "Работает",
  });
  const [employeeErrors, setEmployeeErrors] = useState({
    name: false,
    lastName: false,
    middleName: false,
    dateOfBirth: false,
    citizenship: false,
    position: false,
    workshop: false,
    // passportScan1: false,
    relevance: false,
  });
  const [validInputs, setValidInputs] = useState({
    name: false,
    lastName: false,
    middleName: false,
    dateOfBirth: true,
    citizenship: false,
    position: false,
    workshop: true,
    // passportScan1: false,
    relevance: true,
  });
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "dateOfBirth":
        setValidInputs({
          ...validInputs,
          dateOfBirth: value !== null,
        });
        break;
      default:
        if (validInputs[fieldName] !== undefined) {
          setValidInputs({
            ...validInputs,
            [fieldName]: value !== "",
          });
        }
        break;
    }
  };

  const formIsValid = () => {
    let check = true;
    let newErrors = Object.assign({
      name: false,
      lastName: false,
      middleName: false,
      dateOfBirth: false,
      citizenship: false,
      position: false,
      workshop: false,
      // passportScan1: false,
      relevance: false,
    });
    for (let item in validInputs) {
      // console.log(item, validInputs[item]);
      if (validInputs[item] === false) {
        check = false;
        newErrors = Object.assign({
          ...newErrors,
          [item]: true,
        });
      }
    }
    setEmployeeErrors(newErrors);
    if (check === true) {
      return true;
    } else {
      // alert("Форма не заполнена");
      setIsLoading(false);
      setShowError(true);
      return false;
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    //form data test
    // let formData = new FormData()
    // Object.entries(employeeInputs).map((formItem) => {
    //   formData.append(formItem[0], formItem[1])
    // })

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ' - ' + pair[1])
    // }

    formIsValid() &&
      addEmployee({
        ...employeeInputs,
        dateOfBirth: Number.parseInt(
          employeeInputs.dateOfBirth.getTime() / 1000
        ),
        patentExpirationDate:
          employeeInputs.patentExpirationDate === null
            ? null
            : Number.parseInt(
                employeeInputs.patentExpirationDate.getTime() / 1000
              ),
        registrationExpirationDate:
          employeeInputs.registrationExpirationDate === null
            ? null
            : Number.parseInt(
                employeeInputs.registrationExpirationDate.getTime() / 1000
              ),
      })
        .then(() => props.history.push("/dispatcher/employees"))
        .catch((error) => {
          setIsLoading(false);
          alert("Ошибка при добавлении записи");
          console.log(error);
        });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setEmployeeInputs({
      ...employeeInputs,
      [name]: value,
    });
    setEmployeeErrors({
      ...employeeErrors,
      [name]: false,
    });
  };

  const handleDateChange = (date) => {
    const regex = "(0[1-9]|[12]d|3[01]).(0[1-9]|1[0-2]).[12]d{3})";
    validateField("dateOfBirth", date);
    setEmployeeInputs({
      ...employeeInputs,
      dateOfBirth: date,
    });
    setEmployeeErrors({
      ...employeeErrors,
      dateOfBirth: false,
    });
  };

  useEffect(() => {
    document.title = "Добавление сотрудника";
  }, []);

  return (
    <div className="main-form">
      <form className="main-form__form">
        <div className="main-form__header main-form__header--full">
          <div className="main-form__title">Новый сотрудник</div>
        </div>
        <ErrorMessage
          message="Не заполнены все обязательные поля!"
          showError={showError}
          setShowError={setShowError}
        />
        <div className="main-form__fieldset">
          <div className="main-form__group-name">Имя сотрудника</div>
          <div className="main-form__row">
            <InputText
              inputName="Имя"
              required
              name="name"
              handleInputChange={handleInputChange}
              error={employeeErrors.name}
              errorsArr={employeeErrors}
              setErrorsArr={setEmployeeErrors}
            />
            <InputText
              inputName="Фамилия"
              required
              error={employeeErrors.lastName}
              name="lastName"
              handleInputChange={handleInputChange}
              errorsArr={employeeErrors}
              setErrorsArr={setEmployeeErrors}
            />
          </div>
          <InputText
            inputName="Отчество"
            required
            error={employeeErrors.middleName}
            name="middleName"
            handleInputChange={handleInputChange}
            errorsArr={employeeErrors}
            setErrorsArr={setEmployeeErrors}
          />
        </div>
        <div className="main-form__row">
          <InputDate
            inputName="Дата рождения"
            required
            error={employeeErrors.dateOfBirth}
            name="dateOfBirth"
            selected={employeeInputs.dateOfBirth}
            handleDateChange={handleDateChange}
            errorsArr={employeeErrors}
            setErrorsArr={setEmployeeErrors}
          />
          <InputText
            inputName="Гражданство"
            required
            error={employeeErrors.citizenship}
            name="citizenship"
            handleInputChange={handleInputChange}
            errorsArr={employeeErrors}
            setErrorsArr={setEmployeeErrors}
          />
        </div>
        <div className="main-form__fieldset">
          <div className="main-form__group-name">Подразделение</div>
          <div className="main-form__row">
            <div className="main-form__item">
              <div className="main-form__input_name">Цех*</div>
              <div className="main-form__input_field">
                <select
                  name="workshop"
                  onChange={handleInputChange}
                  defaultValue={employeeInputs.workshop}
                >
                  <option value="ЦехЛЭМЗ">ЦехЛЭМЗ</option>
                  <option value="ЦехЛепсари">ЦехЛепсари</option>
                  <option value="ЦехЛиговский">ЦехЛиговский</option>
                  <option value="Офис">Офис</option>
                </select>
              </div>
            </div>
            <InputText
              inputName="Должность"
              required
              error={employeeErrors.position}
              name="position"
              handleInputChange={handleInputChange}
              errorsArr={employeeErrors}
              setErrorsArr={setEmployeeErrors}
            />
          </div>
        </div>
        <div className="main-form__item">
          <div className="main-form__input_name">Паспорт</div>
          <FileUploader
            // error={employeeErrors.passportScan1}
            onChange={(result) => {
              // validateField("passportScan1", result);
              setEmployeeInputs({
                ...employeeInputs,
                passportScan1: result,
              });
            }}
            previewImage={employeeInputs.passportScan1}
            // hideError={() =>
            //   setEmployeeErrors({
            //     ...employeeErrors,
            //     passportScan1: false,
            //   })
            // }
          />
        </div>
        <InputText
          inputName="Комментарий"
          name="comment"
          handleInputChange={handleInputChange}
          errorsArr={employeeErrors}
          setErrorsArr={setEmployeeErrors}
        />
        <InputDate
          inputName="Срок патента (при необходимости)"
          name="patentExpirationDate"
          selected={employeeInputs.patentExpirationDate}
          handleDateChange={(date) =>
            setEmployeeInputs({
              ...employeeInputs,
              patentExpirationDate: date,
            })
          }
        />
        <InputDate
          inputName="Срок регистрации (при наличии)"
          name="registrationExpirationDate"
          selected={employeeInputs.registrationExpirationDate}
          handleDateChange={(date) =>
            setEmployeeInputs({
              ...employeeInputs,
              registrationExpirationDate: date,
            })
          }
        />
        <div className="main-form__item">
          <div className="main-form__input_name">Актуальность*</div>
          <div className="main-form__input_field">
            <select
              name="relevance"
              onChange={handleInputChange}
              defaultValue={employeeInputs.relevance}
            >
              <option value="Работает">Работает</option>
              <option value="Уволен">Уволен</option>
            </select>
          </div>
        </div>
        <div className="main-form__input_hint">
          * - поля, обязательные для заполнения
        </div>
        <div className="main-form__buttons main-form__buttons--full">
          <input
            className="main-form__submit main-form__submit--inverted"
            type="submit"
            onClick={() => props.history.push("/dispatcher/employees")}
            value="Вернуться назад"
          />
          <Button
            text="Добавить сотрудника"
            isLoading={isLoading}
            className="main-form__submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default NewEmployee;
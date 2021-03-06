import { useEffect, useState } from 'react';
import './EditEmployee.scss';
import 'Components/Form/Form.scss';
import { getEmployeeById, editEmployee, deleteEmployee } from 'API/employees';
import InputText from 'Components/Form/InputText/InputText.jsx';
import InputDate from 'Components/Form/InputDate/InputDate.jsx';
import FileUploader from 'Components/Form/FileUploader/FileUploader.jsx';
import Button from 'Components/Form/Button/Button.jsx';
import { useForm } from 'Utils/hooks';
import { employeesDefaultInputs } from '../objects';
import { createFormDataFromObject } from 'Utils/functions.jsx';
import { format } from 'date-fns';
import axios from 'axios';

const EditEmployee = (props) => {
  const {
    handleInputChange,
    formInputs,
    formErrors,
    updateFormInputs,
    setFormErrors,
    formIsValid,
    errorWindow,
  } = useForm(employeesDefaultInputs);
  const [employeeId, setEmployeeId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const formatDateObjects = (date) => {
    return date === null || date === undefined
      ? undefined
      : format(new Date(date), 'yyyy-MM-dd');
  };

  const handleSubmit = () => {
    if (!formIsValid()) return;
    if (
      (formInputs.patentExpirationDate === null &&
        formInputs.registrationExpirationDate !== null) ||
      (formInputs.registrationExpirationDate === null &&
        formInputs.patentExpirationDate !== null)
    ) {
      return alert(
        'Необходимо заполнить оба поля сроков патента и регистрации, либо оставить их пустыми!',
      );
    }
    setIsLoading(true);
    const employeeData = {
      ...formInputs,
      files: Array.from(formInputs.employeePhotos),
      employeePhotos: undefined,
      dateOfBirth: formatDateObjects(formInputs.dateOfBirth),
      patentExpirationDate: formatDateObjects(formInputs.patentExpirationDate),
      registrationExpirationDate: formatDateObjects(
        formInputs.registrationExpirationDate,
      ),
    };
    console.log(employeeData);
    const formData = createFormDataFromObject(employeeData);
    return editEmployee(formData, employeeId)
      .then(() => props.history.push('/dispatcher/employees'))
      .catch((error) => {
        setIsLoading(false);
        alert('Ошибка при добавлении записи');
        console.log(error);
      });
  };

  const handleDeleteItem = () => {
    deleteEmployee(employeeId)
      .then(() => props.history.push('/dispatcher/employees'))
      .catch((error) => {
        setIsLoading(false);
        alert('Ошибка при добавлении записи');
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = 'Редактирование сотрудника';
    const id = props.history.location.pathname.split(
      '/dispatcher/employees/edit/',
    )[1];
    if (isNaN(Number.parseInt(id))) {
      alert('Неправильный индекс сотрудника!');
      props.history.push('/dispatcher/employees');
    } else {
      setEmployeeId(id);
      getEmployeeById(id)
        .then((res) => res.json())
        .then(async (data) => {
          let fileList = [];
          await Promise.all(
            data.employeePhotos.map((item) =>
              axios
                .get(item.url, {
                  responseType: 'blob',
                })
                .then(({ data }) =>
                  fileList.push(
                    new File([data], item.url.split('downloadFile/')[1], {
                      type: data.type,
                    }),
                  ),
                )
                .catch((error) => console.log(error)),
            ),
          );
          console.log(fileList);
          updateFormInputs({
            ...data,
            dateOfBirth: data.dateOfBirth ?? new Date(),
            employeePhotos: fileList,
          });
        })
        .catch((error) => {
          console.log(error);
          alert('Неправильный индекс сотрудника!');
          props.history.push('/dispatcher/employees');
        });
    }
  }, []);

  return (
    <div className="main-form">
      <form className="main-form__form">
        <div className="main-form__header main-form__header--full">
          <div className="main-form__title">Редактирование сотрудника</div>
        </div>
        {errorWindow}
        <div className="main-form__fieldset">
          <div className="main-form__group-name">Имя сотрудника</div>
          <div className="main-form__row">
            <InputText
              inputName="Имя"
              required
              error={formErrors.name}
              defaultValue={formInputs.name}
              name="name"
              errorsArr={formErrors}
              setErrorsArr={setFormErrors}
              handleInputChange={({ target }) =>
                handleInputChange('name', target.value)
              }
            />
            <InputText
              inputName="Фамилия"
              required
              error={formErrors.lastName}
              defaultValue={formInputs.lastName}
              errorsArr={formErrors}
              setErrorsArr={setFormErrors}
              name="lastName"
              handleInputChange={({ target }) =>
                handleInputChange('lastName', target.value)
              }
            />
          </div>
          <InputText
            inputName="Отчество"
            required
            error={formErrors.middleName}
            name="middleName"
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
            defaultValue={formInputs.middleName}
            handleInputChange={({ target }) =>
              handleInputChange('middleName', target.value)
            }
          />
        </div>
        <div className="main-form__row">
          <InputDate
            inputName="Дата рождения"
            required
            error={formErrors.dateOfBirth}
            name="dateOfBirth"
            selected={Date.parse(formInputs.dateOfBirth)}
            handleDateChange={(date) => handleInputChange('dateOfBirth', date)}
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
          />
          <InputText
            inputName="Гражданство"
            required
            error={formErrors.citizenship}
            name="citizenship"
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
            defaultValue={formInputs.citizenship}
            handleInputChange={({ target }) =>
              handleInputChange('citizenship', target.value)
            }
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
                  onChange={({ target }) =>
                    handleInputChange('workshop', target.value)
                  }
                  value={formInputs.workshop}
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
              error={formErrors.position}
              name="position"
              defaultValue={formInputs.position}
              errorsArr={formErrors}
              setErrorsArr={setFormErrors}
              handleInputChange={({ target }) =>
                handleInputChange('position', target.value)
              }
            />
          </div>
        </div>
        <div className="main-form__item">
          <div className="main-form__input_name">Документы</div>
          <FileUploader
            onChange={(files) => handleInputChange('employeePhotos', files)}
            multipleFiles
            defaultValue={formInputs.employeePhotos}
          />
        </div>
        <InputText
          inputName="Комментарий"
          name="comment"
          defaultValue={formInputs.comment}
          handleInputChange={({ target }) =>
            handleInputChange('comment', target.value)
          }
          errorsArr={formErrors}
          setErrorsArr={setFormErrors}
        />
        <InputDate
          inputName="Срок патента (при наличии)"
          name="patentExpirationDate"
          selected={Date.parse(formInputs.patentExpirationDate)}
          handleDateChange={(date) =>
            handleInputChange('patentExpirationDate', date)
          }
        />
        <InputDate
          inputName="Срок регистрации (при наличии)"
          name="registrationExpirationDate"
          selected={Date.parse(formInputs.registrationExpirationDate)}
          handleDateChange={(date) =>
            handleInputChange('registrationExpirationDate', date)
          }
        />
        <div className="main-form__item">
          <div className="main-form__input_name">Актуальность*</div>
          <div className="main-form__input_field">
            <select
              name="relevance"
              onChange={({ target }) =>
                handleInputChange('relevance', target.value)
              }
              value={formInputs.relevance}
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
          <Button
            className="main-form__submit main-form__submit--inverted"
            inverted
            onClick={() => props.history.push('/dispatcher/employees')}
            text="Вернуться назад"
          />
          <Button
            text="Удалить запись"
            isLoading={isLoading}
            className="main-form__submit"
            onClick={handleDeleteItem}
          />
          <Button
            text="Редактировать запись"
            isLoading={isLoading}
            className="main-form__submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;

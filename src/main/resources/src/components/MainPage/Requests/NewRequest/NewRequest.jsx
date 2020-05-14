import React, { useState, useEffect } from 'react'
import {
  addRequest,
  addProductsToRequest,
} from '../../../../utils/RequestsAPI/Requests.jsx'
import './NewRequest.scss'
import '../../../../utils/Form/Form.scss'
import { getUsers } from '../../../../utils/RequestsAPI/Users.jsx'
import InputText from '../../../../utils/Form/InputText/InputText.jsx'
import InputDate from '../../../../utils/Form/InputDate/InputDate.jsx'
import InputUser from '../../../../utils/Form/InputUser/InputUser.jsx'
import InputProducts from '../../../../utils/Form/InputProducts/InputProducts.jsx'
import ErrorMessage from '../../../../utils/Form/ErrorMessage/ErrorMessage.jsx'
import ImgLoader from '../../../../utils/TableView/ImgLoader/ImgLoader.jsx'
import Button from '../../../../utils/Form/Button/Button.jsx'

const NewRequest = (props) => {
  const [requestInputs, setRequestInputs] = useState({
    date: new Date(),
    codeWord: '',
    responsible: props.userData.username,
    status: 'Ожидание',
  })
  const [requestErrors, setRequestErrors] = useState({
    date: false,
    requestProducts: false,
    codeWord: false,
    responsible: false,
  })
  const [validInputs, setValidInputs] = useState({
    date: true,
    requestProducts: false,
    codeWord: false,
    // responsible: (props.userHasAccess(['ROLE_ADMIN']) ? false : true),
    responsible: true,
  })
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'date':
        setValidInputs({
          ...validInputs,
          date: value !== null,
        })
        break
      case 'requestProducts':
        setValidInputs({
          ...validInputs,
          requestProducts: value !== [],
        })
        break
      default:
        if (validInputs[fieldName] !== undefined) {
          setValidInputs({
            ...validInputs,
            [fieldName]: value !== '',
          })
        }
        break
    }
  }

  const formIsValid = () => {
    let check = true
    let newErrors = Object.assign({
      date: false,
      products: false,
      codeWord: false,
      responsible: false,
    })
    for (let item in validInputs) {
      if (validInputs[item] === false) {
        check = false
        newErrors = Object.assign({
          ...newErrors,
          [item]: true,
        })
      }
    }
    setRequestErrors(newErrors)
    if (check === true) {
      return true
    } else {
      setShowError(true)
      setIsLoading(false)
      return false
    }
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    setIsLoading(true)
    let id = 0
    console.log(requestInputs)
    formIsValid() &&
      addRequest(requestInputs)
        .then((res) => res.json())
        .then((res) => {
          id = res.id
        })
        .then(() => {
          const productsArr = requestInputs.requestProducts.map((item) => {
            return addProductsToRequest({
              requestId: id,
              quantity: item.quantity,
              packaging: item.packaging,
              name: item.name,
            })
          })
          Promise.all(productsArr).then(() => props.history.push('/requests'))
        })
        .catch((error) => {
          alert('Ошибка при добавлении записи')
          setIsLoading(false)
          // setShowError(true);
          console.log(error)
        })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    validateField(name, value)
    setRequestInputs({
      ...requestInputs,
      [name]: value,
    })
    setRequestErrors({
      ...requestErrors,
      [name]: false,
    })
  }

  useEffect(() => {
    document.title = 'Создание заявки'
    if (props.transferState === true && props.transferData !== null) {
      props.setTransferState(false)
      setRequestInputs({
        date: props.transferData.date,
        requestProducts: props.transferData.requestProducts,
        quantity: props.transferData.quantity,
        codeWord: props.transferData.codeWord,
        responsible: props.transferData.responsible,
        status: props.transferData.status,
      })
      setValidInputs({
        date: true,
        requestProducts: true,
        codeWord: true,
        responsible: true,
      })
    }
  }, [])

  const handleDateChange = (date) => {
    const regex = '(0[1-9]|[12]d|3[01]).(0[1-9]|1[0-2]).[12]d{3})'
    validateField('date', date)
    setRequestInputs({
      ...requestInputs,
      date: date,
    })
    setRequestErrors({
      ...requestErrors,
      date: false,
    })
  }

  const handleProductsChange = (newProducts) => {
    validateField('requestProducts', newProducts)
    setRequestInputs({
      ...requestInputs,
      requestProducts: newProducts,
    })
    setRequestErrors({
      ...requestErrors,
      requestProducts: false,
    })
  }

  const handleResponsibleChange = (newResponsible) => {
    validateField('responsible', newResponsible)
    setRequestInputs({
      ...requestInputs,
      responsible: newResponsible,
    })
    setRequestErrors({
      ...requestErrors,
      responsible: false,
    })
  }

  return (
    <div className="main-form">
      <div className="main-form__title">Новая заявка</div>
      <form className="main-form__form">
        <ErrorMessage
          message="Не заполнены все обязательные поля!"
          showError={showError}
          setShowError={setShowError}
        />
        <InputDate
          inputName="Дата"
          required
          error={requestErrors.date}
          name="date"
          selected={Date.parse(requestInputs.date)}
          handleDateChange={handleDateChange}
          errorsArr={requestErrors}
          setErrorsArr={setRequestErrors}
        />
        <div className="main-form__fieldset">
          <div className="main-form__group-name">Данные заказа</div>
          <InputProducts
            inputName="Продукция"
            userHasAccess={props.userHasAccess}
            defaultValue={requestInputs.requestProducts}
            required
            options
            onChange={handleProductsChange}
            searchPlaceholder="Введите название продукта для поиска..."
            error={requestErrors.requestProducts}
            errorsArr={requestErrors}
            setErrorsArr={setRequestErrors}
          />
          <InputText
            inputName="Кодовое слово"
            required
            error={requestErrors.codeWord}
            defaultValue={requestInputs.codeWord}
            name="codeWord"
            handleInputChange={handleInputChange}
            errorsArr={requestErrors}
            setErrorsArr={setRequestErrors}
          />
        </div>
        <InputUser
          inputName="Ответственный"
          userData={props.userData}
          required
          error={requestErrors.responsible}
          name="responsible"
          handleUserChange={handleResponsibleChange}
          defaultValue={requestInputs.responsible}
          searchPlaceholder="Введите имя пользователя для поиска..."
          errorsArr={requestErrors}
          setErrorsArr={setRequestErrors}
        />
        <div className="main-form__input_hint">
          * - поля, обязательные для заполнения
        </div>
        <div className="main-form__buttons">
          <div
            className="main-form__submit main-form__submit--inverted"
            onClick={() => props.history.push('/requests')}
          >
            Вернуться назад
          </div>
          {/* <input className="main-form__submit" type="submit" onClick={handleSubmit} value="Оформить заявку" />
                    {isLoading && <ImgLoader />} */}
          <Button
            text="Оформить заявку"
            isLoading={isLoading}
            className="main-form__submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  )
}

export default NewRequest

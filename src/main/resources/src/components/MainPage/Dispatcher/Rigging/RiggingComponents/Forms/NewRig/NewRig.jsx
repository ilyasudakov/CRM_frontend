import React, { useState, useEffect } from 'react'
import './NewRig.scss'
import '../../../../../../../utils/Form/Form.scss'
import SelectParts from '../../../SelectParts/SelectParts.jsx'

import InputText from '../../../../../../../utils/Form/InputText/InputText.jsx'
import ErrorMessage from '../../../../../../../utils/Form/ErrorMessage/ErrorMessage.jsx'
import Button from '../../../../../../../utils/Form/Button/Button.jsx'
import {
  addStamp,
  addPartsToStamp,
} from '../../../../../../../utils/RequestsAPI/Rigging/Stamp.jsx'
import { rigTypes } from '../../rigsVariables.js'

const NewRig = (props) => {
  const [rigInputs, setRigInputs] = useState({
    name: '',
    number: '',
    comment: '',
    parts: [],
    lastEdited: new Date(),
    color: 'production',
  })
  const [riggingErrors, setRiggingErrors] = useState({
    name: false,
    number: false,
    parts: false,
  })
  const [validInputs, setValidInputs] = useState({
    name: false,
    number: false,
    parts: false,
  })
  const [showError, setShowError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'parts':
        setValidInputs({
          ...validInputs,
          parts: value.length > 0,
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
      name: false,
      number: false,
      parts: false,
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
    setRiggingErrors(newErrors)
    if (check === true) {
      return true
    } else {
      setIsLoading(false)
      setShowError(true)
      return false
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)
    let itemId = 1
    formIsValid() &&
      addStamp(rigInputs)
        .then((res) => res.json())
        .then((res) => (itemId = res.id))
        .then(() => {
          const parts = rigInputs.parts.map((item) => {
            let newPart = Object.assign({
              ...item,
              riggingId: itemId,
            })
            return addPartsToStamp(newPart)
          })
          Promise.all(parts).then(() =>
            props.history.push(rigTypes[props.type].redirectURL),
          )
        })
        .catch((error) => {
          setIsLoading(false)
          alert('Ошибка при добавлении записи')
          console.log(error)
        })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    validateField(name, value)
    setRigInputs({
      ...rigInputs,
      [name]: value,
    })
    setRiggingErrors({
      ...riggingErrors,
      [name]: false,
    })
  }

  const handlePartsChange = (newParts) => {
    validateField('parts', newParts)
    setRigInputs({
      ...rigInputs,
      parts: newParts,
    })
    setRiggingErrors({
      ...riggingErrors,
      parts: false,
    })
  }

  useEffect(() => {
    document.title = `Создание ${rigTypes[props.type].name}`
  }, [props.type])

  return (
    <div className="new-rig">
      <div className="main-form">
        <div className="main-form__title">{`Новый ${
          rigTypes[props.type].name
        }`}</div>
        <form className="main-form__form">
          <ErrorMessage
            message="Не заполнены все обязательные поля!"
            showError={showError}
            setShowError={setShowError}
          />
          <InputText
            inputName="Название"
            required
            error={riggingErrors.name}
            name="name"
            handleInputChange={handleInputChange}
            errorsArr={riggingErrors}
            setErrorsArr={setRiggingErrors}
          />
          <InputText
            inputName="Артикул"
            required
            error={riggingErrors.number}
            name="number"
            handleInputChange={handleInputChange}
            errorsArr={riggingErrors}
            setErrorsArr={setRiggingErrors}
          />
          <InputText
            inputName="Комментарий"
            name="comment"
            handleInputChange={handleInputChange}
          />
          <div className="main-form__item">
            <div className="main-form__input_name">Детали*</div>
            <div className="main-form__input_field">
              <SelectParts handlePartsChange={handlePartsChange} />
            </div>
          </div>
          <div className="main-form__input_hint">
            * - поля, обязательные для заполнения
          </div>
          <div className="main-form__buttons">
            <input
              className="main-form__submit main-form__submit--inverted"
              type="submit"
              onClick={() =>
                props.history.push(rigTypes[props.type].redirectURL)
              }
              value="Вернуться назад"
            />
            <Button
              text="Добавить запись"
              isLoading={isLoading}
              className="main-form__submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewRig

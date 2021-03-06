import { useEffect, useState } from 'react';
import './NewProduct.scss';
import 'Components/Form/Form.scss';
import { addProduct } from 'API/Products/products';
import InputText from 'Components/Form/InputText/InputText.jsx';
import SelectCategory from '../SelectCategory/SelectCategory.jsx';
import FileUploader from 'Components/Form/FileUploader/FileUploader.jsx';
import { getDataUri } from 'Utils/functions.jsx';
import Button from 'Components/Form/Button/Button.jsx';
import SelectPackaging from '../../PackagingPage/SelectPackaging/SelectPackaging.jsx';
import { addPackagingToProduct } from 'API/Products/packaging.js';
import { useForm } from 'Utils/hooks';
import { productsDefaultInputs } from '../objects.js';

const NewProduct = (props) => {
  const {
    handleInputChange,
    formInputs,
    formErrors,
    setFormErrors,
    formIsValid,
    errorWindow,
  } = useForm(productsDefaultInputs);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    console.log(formInputs);
    if (!formIsValid()) return;
    setIsLoading(true);
    addProduct(formInputs)
      .then((res) => res.json())
      .then((res) =>
        addPackagingToProduct(
          {
            packings: [
              ...formInputs.packages.map((item) => {
                return item.id;
              }),
            ],
          },
          res.id,
        ),
      )
      .then(() => props.history.push('/products'))
      .catch(() => {
        setIsLoading(false);
        alert('Ошибка при добавлении записи');
      });
  };

  useEffect(() => {
    document.title = 'Создание продукции';
  }, []);

  return (
    <div className="main-form">
      <form className="main-form__form">
        <div className="main-form__header main-form__header--full">
          <div className="main-form__title">Новая продукция</div>
        </div>
        {errorWindow}
        <InputText
          inputName="Наименование"
          required
          error={formErrors.name}
          name="name"
          handleInputChange={({ target }) =>
            handleInputChange('name', target.value)
          }
          errorsArr={formErrors}
          setErrorsArr={setFormErrors}
        />
        <SelectCategory
          inputName="Категория"
          required
          error={formErrors.category}
          name="category"
          handleCategoryChange={(category) =>
            handleInputChange('category', category)
          }
          errorsArr={formErrors}
          setErrorsArr={setFormErrors}
        />
        <div className="main-form__fieldset">
          <div className="main-form__group-name">Характеристика продукции</div>
          <InputText
            inputName="Артикул"
            defaultValue={formInputs.vendor}
            type="text"
            name="vendor"
            handleInputChange={({ target }) =>
              handleInputChange('vendor', target.value)
            }
          />
          <InputText
            inputName="Вес изделия"
            required
            error={formErrors.weight}
            type="number"
            name="weight"
            handleInputChange={({ target }) =>
              handleInputChange('weight', target.value)
            }
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
          />

          <InputText
            inputName="Описание"
            type="text"
            name="description"
            handleInputChange={({ target }) =>
              handleInputChange('description', target.value)
            }
          />
          <InputText
            inputName="Штрихкод"
            type="text"
            name="barcode"
            handleInputChange={({ target }) =>
              handleInputChange('barcode', target.value)
            }
          />
          <SelectPackaging
            required
            onChange={(packages) => handleInputChange('packages', packages)}
            errorName="packages"
            errorsArr={formErrors}
            setErrorsArr={setFormErrors}
            error={formErrors.packages}
          />
        </div>
        <InputText
          inputName="Комментарий"
          name="comment"
          handleInputChange={({ target }) =>
            handleInputChange('comment', target.value)
          }
        />
        <div className="main-form__item">
          <div className="main-form__input_name">Место производства*</div>
          <div className="main-form__input_field">
            <select
              name="productionLocation"
              onChange={({ target }) =>
                handleInputChange('productionLocation', target.value)
              }
            >
              <option>ЦехЛЭМЗ</option>
              <option>ЦехЛиговский</option>
              <option>ЦехЛепсари</option>
            </select>
          </div>
        </div>
        <div className="main-form__item">
          <div className="main-form__input_name">Фотография</div>
          <FileUploader
            onChange={async (result) => {
              const downgraded =
                result[0] !== '' && result[0]
                  ? await getDataUri(result[0], 'jpeg', 0.3)
                  : '';
              handleInputChange('photo', downgraded);
            }}
            type="readAsDataURL"
            defaultValue={formInputs.photo !== '' ? [formInputs.photo] : []}
            error={formErrors.photo}
            hideError={() => setFormErrors({ ...formErrors, photo: false })}
          />
        </div>
        <div className="main-form__input_hint">
          * - поля, обязательные для заполнения
        </div>
        <div className="main-form__buttons main-form__buttons--full">
          <Button
            className="main-form__submit main-form__submit--inverted"
            inverted
            onClick={() => props.history.push('/products')}
            text="Вернуться назад"
          />
          <Button
            text="Добавить продукцию"
            isLoading={isLoading}
            className="main-form__submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default NewProduct;

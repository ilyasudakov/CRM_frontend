import { addSpaceDelimiter } from 'Utils/functions.jsx';
import { sortByField } from 'Utils/sorting/sorting.js';

const ProductsStatisticsList = ({ isHidden, data }) => {
  return (
    <div
      className={
        isHidden
          ? 'main-window__list main-window__list--hidden'
          : 'main-window__list'
      }
    >
      <div className="main-window__list-item main-window__list-item--header">
        <span>Название</span>
        <span>Количество</span>
      </div>
      {sortByField(data, {
        fieldName: 'quantity',
        direction: 'desc',
      }).map((part) => {
        return (
          <div className="main-window__list-item" key={part.id}>
            <span>
              <div className="main-window__mobile-text">Название:</div>
              {part.name}
            </span>
            <span>
              <div className="main-window__mobile-text">Количество:</div>
              {addSpaceDelimiter(part.quantity)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsStatisticsList;

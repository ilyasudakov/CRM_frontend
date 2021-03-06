import { useEffect } from 'react';
import {
  numberToString,
  addSpaceDelimiter,
  formatDateStringNoYear,
  roundUpWorkHours,
} from 'Utils/functions.jsx';
import editIcon from 'Assets/tableview/edit.svg';
import { Link } from 'react-router-dom';
import { days } from 'Utils/dataObjects.js';
import './EmployeeInfo.scss';

const filterWorksByDate = (item, date) => {
  if (item.length > 0) {
    return (
      item[0].day === date.getDate() &&
      item[0].month === date.getMonth() + 1 &&
      item[0].year === date.getFullYear()
    );
  }
  return (
    item.day === date.getDate() &&
    item.month === date.getMonth() + 1 &&
    item.year === date.getFullYear()
  );
};

//Окно для вывода информации о сотруднике и его работе за неделю
const EmployeeInfoPanel = ({ selectedInfo, dates = [], header }) => {
  useEffect(() => {
    console.log(selectedInfo);
  }, [selectedInfo]);

  return (
    <div className="employee-info">
      <div className="employee-info__employee-wrapper">
        <div className="employee-info__employee-title">
          {header ??
            `Данные сотрудника (${formatDateStringNoYear(
              dates[0],
            )} - ${formatDateStringNoYear(dates[dates.length - 1])})`}
        </div>
        <div className="employee-info__employee-general">
          <div className="employee-info__full-name">
            {selectedInfo?.employeeName ??
              `${selectedInfo.employee?.lastName} ${selectedInfo.employee?.name} ${selectedInfo.employee?.middleName}`}
          </div>
          <div className="employee-info__workshop">
            {selectedInfo?.employee?.workshop}
          </div>
          <div className="employee-info__position">
            {selectedInfo?.employee?.position}
          </div>
        </div>
        {/* //Вывод работ сотрудника */}
        <div className="employee-info__employee-title">Список работ</div>
        <div className="employee-info__employee-works-wrapper">
          {selectedInfo?.works?.length === undefined ? (
            <div>Нет учтенной работы</div>
          ) : (
            dates.map((date) => {
              const filteredData = selectedInfo?.works?.filter((item) =>
                filterWorksByDate(item, date),
              );
              return filteredData.length > 0 ? (
                <div className="employee-info__wrapper">
                  <div className="employee-info__employee-title employee-info__employee-title--date">
                    <Link
                      to={`/work-management/record-time?employee=${
                        selectedInfo?.employee?.id
                      }&date=${date.getFullYear()},${
                        date.getMonth() + 1
                      },${date.getDate()}`}
                    >
                      {`${formatDateStringNoYear(date)} - ${
                        days[date.getDay()]
                      }`}
                      <img
                        className="employee-info__img"
                        src={editIcon}
                        alt=""
                      />
                    </Link>
                  </div>
                  {filteredData?.map((item) =>
                    item.length > 0 ? (
                      item.map((workItem, index) => (
                        <WorksItem item={workItem} key={index} />
                      ))
                    ) : (
                      <WorksItem item={item} />
                    ),
                  )}
                </div>
              ) : null;
            })
          )}
        </div>
        <WeekSummary selectedInfo={selectedInfo} dates={dates} />
      </div>
    </div>
  );
};

export default EmployeeInfoPanel;

const WorksItem = ({ item }) => {
  return (
    <div
      className="employee-info__employee-works-item"
      style={{
        marginBottom: '15px',
        marginTop: '5px',
        marginLeft: '15px',
      }}
    >
      <span>{item.workList.work}</span>
      <span className="employee-info__employee-hours">{`${item.hours} ч`}</span>
      {(item.workControlProduct.length > 0 || item?.partsWorks.length > 0) && (
        <div className="employee-info__list">
          {item.workControlProduct.map((product) => (
            <ProductItem item={product} key={product.id} />
          ))}
          {item.partsWorks.map((draft) => (
            <ProductItem item={draft} key={draft.id} />
          ))}
        </div>
      )}
      {item.comment ? (
        <div className="employee-info__comment">
          Комментарий:
          <span>{item.comment}</span>
        </div>
      ) : null}
    </div>
  );
};

const ProductItem = ({ item }) => {
  return (
    <div className="employee-info__list-item">
      <span>
        <div className="main-window__mobile-text">Название:</div>
        {item.name ?? item.product.name}
      </span>
      <span>
        <div className="main-window__mobile-text">Кол-во:</div>
        {`${addSpaceDelimiter(item.quantity)} шт`}
      </span>
    </div>
  );
};

const WeekSummary = ({ selectedInfo, dates }) => {
  console.log(selectedInfo?.works);
  const hours =
    selectedInfo?.works && Array.isArray(selectedInfo?.works)
      ? selectedInfo.works.reduce(
          (sum, cur) =>
            dates.find((date) => filterWorksByDate(cur, date)) !== undefined
              ? sum +
                (cur.length > 0
                  ? cur.reduce(
                      (sumInner, curInner) => sumInner + curInner.hours,
                      0,
                    )
                  : cur.hours)
              : sum,
          0,
        )
      : new Array();
  return (
    <div className="employee-info__employee-title">
      Всего:
      {selectedInfo?.works?.length > 0
        ? `${roundUpWorkHours(hours)} ${numberToString(
            Number.parseInt(roundUpWorkHours(hours)),
            ['час', 'часа', 'часов'],
          )}`
        : 0}
    </div>
  );
};

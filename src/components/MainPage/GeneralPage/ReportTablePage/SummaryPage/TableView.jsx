//Таблица с табелем
import { useEffect } from 'react';
import { months } from 'Utils/dataObjects.js'; //Список месяцев
import PlaceholderLoading from 'Components/TableView/PlaceholderLoading/PlaceholderLoading.jsx';
import {
  formatDateStringNoYear,
  getEmployeeNameText,
} from 'Utils/functions.jsx';
import { workshops } from '../objects.js';
import { sortEmployees } from '../functions.js';
import ChevronSVG from 'Assets/tableview/chevron-down.svg';

const TableView = (props) => {
  useEffect(() => {}, [props.date]);

  return (
    <div className="report-table-page__tableview">
      <HalfOfTheMonthList
        title={() => (
          <div className="main-window__title">
            <img
              className="main-window__img"
              style={{ transform: 'rotate(90deg)' }}
              onClick={() => {
                const newDate = new Date(
                  new Date(props.date).setMonth(props.date.getMonth() - 1),
                );
                props.setDate(newDate);
              }}
              title="Пред. месяц"
              src={ChevronSVG}
            />
            <div>{`1/2 ${
              months[props.date.getMonth()]
            } ${props.date.getFullYear()}`}</div>
            <img
              className="main-window__img"
              style={{ transform: 'rotate(-90deg)' }}
              onClick={() => {
                const newDate = new Date(
                  new Date(props.date).setMonth(props.date.getMonth() + 1),
                );
                props.setDate(newDate);
              }}
              title="След. месяц"
              src={ChevronSVG}
            />
          </div>
        )}
        dates={props.dates.filter((date) => date < 16)}
        userContext={props.userContext}
        isLoading={props.isLoading}
        setSelectedInfo={props.setSelectedInfo}
        date={props.date}
        workData={props.workData}
        searchQuery={props.searchQuery}
        setShowWindow={props.setShowWindow}
        datesComparison={(index) => index < 15}
      />

      <HalfOfTheMonthList
        title={() => (
          <div className="main-window__title">
            <img
              className="main-window__img"
              style={{ transform: 'rotate(90deg)' }}
              onClick={() => {
                const newDate = new Date(
                  new Date(props.date).setMonth(props.date.getMonth() - 1),
                );
                props.setDate(newDate);
              }}
              title="Пред. месяц"
              src={ChevronSVG}
            />
            <div>{`2/2 ${
              months[props.date.getMonth()]
            } ${props.date.getFullYear()}`}</div>
            <img
              className="main-window__img"
              style={{ transform: 'rotate(-90deg)' }}
              onClick={() => {
                const newDate = new Date(
                  new Date(props.date).setMonth(props.date.getMonth() + 1),
                );
                props.setDate(newDate);
              }}
              title="След. месяц"
              src={ChevronSVG}
            />
          </div>
        )}
        dates={props.dates.filter((date) => date > 15)}
        userContext={props.userContext}
        isLoading={props.isLoading}
        setSelectedInfo={props.setSelectedInfo}
        date={props.date}
        workData={props.workData}
        searchQuery={props.searchQuery}
        setShowWindow={props.setShowWindow}
        datesComparison={(index) => index > 14}
      />
    </div>
  );
};

export default TableView;

const HalfOfTheMonthList = ({
  title,
  dates,
  userContext,
  isLoading,
  workData,
  setSelectedInfo,
  date,
  searchQuery,
  setShowWindow,
  datesComparison,
}) => {
  const filterEmployeesData = (data, workshop) => {
    return data.filter((item) => {
      return (
        (item.employee.lastName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          item.employee.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          item.employee.middleName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        item.employee.workshop === workshop.name
      );
    });
  };
  return (
    <>
      {title()}
      <div className="main-window__list">
        <div className="main-window__list-item main-window__list-item--header">
          <span>ФИО сотрудника</span>
          {dates.map((dateItem, index) => {
            const weekday = new Date(new Date(date).setDate(dateItem)).getDay();
            return (
              <span
                key={index}
                className={
                  weekday === 6 || weekday === 0
                    ? 'report-table-page__day--weekend'
                    : ''
                }
              >
                {dateItem}
              </span>
            );
          })}
          <span>Сумма</span>
        </div>
        {workshops
          .filter((workshop) =>
            userContext.userHasAccess(workshop.allowedRoles),
          )
          .map((workshop) => {
            const filteredEmployees = sortEmployees(
              filterEmployeesData(Object.values(workData), workshop),
            );
            if (filteredEmployees.length === 0 && !isLoading) return;
            return (
              <>
                <div className="main-window__list-item report-table-page__workshop-name">
                  <span>{workshop.name}</span>
                </div>
                {isLoading ? (
                  <PlaceholderLoading
                    itemClassName="main-window__list-item"
                    minHeight="45px"
                    items={3}
                  />
                ) : (
                  sortEmployees(
                    filterEmployeesData(Object.values(workData), workshop),
                  ).map((work) => {
                    const fullEmployeeName = getEmployeeNameText(work.employee);
                    return (
                      <div className="main-window__list-item" key={work.id}>
                        <span>{fullEmployeeName}</span>
                        {Object.values(work.works).map(
                          (workItem, workItemIndex) => {
                            if (datesComparison(workItemIndex)) {
                              const weekday = new Date(
                                new Date(date).setDate(
                                  workItem.length > 0
                                    ? workItem[0].day
                                    : workItem.day,
                                ),
                              ).getDay();
                              const startDate = new Date(
                                date.getFullYear(),
                                date.getMonth(),
                                workItem.length > 0
                                  ? workItem[0].day
                                  : workItem.day,
                              );
                              return (
                                <span
                                  onClick={() => {
                                    setSelectedInfo({
                                      employeeId: work.employee.id,
                                      employee: work.employee,
                                      day:
                                        workItem.length > 0
                                          ? workItem[0].day
                                          : workItem.day,
                                      month: date.getMonth() + 1,
                                      year: date.getFullYear(),
                                      selectedDay: {
                                        startDate: startDate,
                                      },
                                      works: workItem,
                                    });
                                    setShowWindow(true);
                                  }}
                                  className={
                                    weekday === 6 || weekday === 0
                                      ? 'report-table-page__day--weekend'
                                      : ''
                                  }
                                >
                                  <div className="report-table-report__date-hint">
                                    {formatDateStringNoYear(
                                      new Date(startDate),
                                    )}
                                  </div>
                                  {workItem.hours === 0
                                    ? ' '
                                    : workItem.reduce(
                                        (sum, cur) => sum + cur.hours,
                                        0,
                                      )}
                                </span>
                              );
                            }
                          },
                        )}
                        <span
                          onClick={() => {
                            const filteredData = Object.values(
                              work.works,
                            ).filter((item, workItemIndex) =>
                              datesComparison(workItemIndex),
                            );

                            setSelectedInfo({
                              employeeId: work.employee.id,
                              employee: work.employee,
                              works:
                                work.workArray.length > 0 ? filteredData : [],
                              selectedDay: {
                                startDate: new Date(
                                  date.getFullYear(),
                                  date.getMonth(),
                                  dates[0],
                                ),
                                endDate: new Date(
                                  date.getFullYear(),
                                  date.getMonth(),
                                  dates[dates.length - 1],
                                ),
                              },
                            });

                            setShowWindow(true);
                          }}
                        >
                          <div className="report-table-report__date-hint">
                            Итог
                          </div>
                          {Object.values(work.works).reduce(
                            (sum, item, index) => {
                              if (item.length > 0 && datesComparison(index)) {
                                return (
                                  sum +
                                  item.reduce((sum, cur) => {
                                    return sum + cur.hours;
                                  }, 0)
                                );
                              } else return sum;
                            },
                            0,
                          )}
                        </span>
                      </div>
                    );
                  })
                )}
              </>
            );
          })}
      </div>
    </>
  );
};

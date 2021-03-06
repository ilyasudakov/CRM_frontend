import TimeIcon from 'Assets/etc/time.inline.svg';
import { dateDiffInDays } from 'Utils/functions.jsx';
import { checkIfDateIsInRange } from '../functions.js';
import RequestsList from '../Lists/RequestsList/RequestsList.jsx';
import useSmallStatPanel from 'Utils/hooks/statistics/useSmallStatPanel.js';

const RequestsAverageTimeCompletionPanel = ({
  requests,
  currDate,
  timeText,
  getPrevData,
}) => {
  const { smallPanel, setStats } = useSmallStatPanel(
    {
      category: 'Средняя прод. выполнения заказа',
      linkTo: '/requests',
      timePeriod: timeText,
      renderIcon: <TimeIcon className="panel__img panel__img--time" />,
      invertedStats: true,
    },
    requests,
    (requests) => getStats(requests),
    timeText,
    [currDate],
  );

  const getStats = (requests) => {
    setStats((stats) => ({
      ...stats,
      isLoading: true,
      isLoaded: false,
    }));

    let curMonthQuantity = 0;
    let prevMonthQuantity = 0;
    let curMonthAverage = 0;
    let prevMonthAverage = 0;

    //check prev month
    let temp = requests.filter((request) => {
      const date = new Date(request.date);
      const prevMonth = getPrevData(currDate.startDate);
      if (
        checkIfDateIsInRange(date, prevMonth.startDate, prevMonth.endDate) &&
        request.status === 'Завершено'
      ) {
        prevMonthAverage += dateDiffInDays(
          new Date(request.date),
          new Date(request.shippingDate || new Date()),
        );
        prevMonthQuantity++;
        return false;
      }
      return true;
    });
    const filteredRequests = temp.filter((request) => {
      const date = new Date(request.date);
      if (
        checkIfDateIsInRange(date, currDate.startDate, currDate.endDate) &&
        request.status === 'Завершено'
      ) {
        curMonthAverage += dateDiffInDays(
          new Date(request.date),
          new Date(request.shippingDate || new Date()),
        );
        curMonthQuantity++;
        return true;
      }
      return false;
    });

    curMonthAverage =
      curMonthAverage / (curMonthQuantity !== 0 ? curMonthQuantity : 1);
    prevMonthAverage =
      prevMonthAverage / (prevMonthQuantity !== 0 ? prevMonthQuantity : 1);

    setStats((stats) => ({
      ...stats,
      windowContent: (
        <RequestsList
          title="Заявки за выбранный период"
          data={filteredRequests}
          sortBy={{ curSort: 'sum', sum: 'desc' }}
        />
      ),
      isLoaded: true,
      isLoading: false,
      value:
        Math.floor(curMonthAverage * 100) / 100 === 0
          ? 'Нет данных'
          : `${Math.floor(curMonthAverage * 100) / 100} дн.`,
      difference:
        Math.floor(curMonthAverage * 100) / 100 === 0
          ? 0
          : curMonthAverage - prevMonthAverage,
      percentage:
        Math.floor(curMonthAverage * 100) / 100 === 0
          ? 0
          : Math.floor(
              ((curMonthAverage - prevMonthAverage) /
                (prevMonthAverage !== 0 ? prevMonthAverage : 1)) *
                100 *
                100,
            ) / 100,
    }));
  };

  return smallPanel;
};

export default RequestsAverageTimeCompletionPanel;

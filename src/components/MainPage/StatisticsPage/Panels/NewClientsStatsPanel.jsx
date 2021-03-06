import ClientsIcon from 'Assets/sidemenu/client.inline.svg';
import { checkIfDateIsInRange } from '../functions.js';
import RequestsList from '../Lists/RequestsList/RequestsList.jsx';
import useSmallStatPanel from 'Utils/hooks/statistics/useSmallStatPanel.js';
import { statisticsFindNewClients } from './functions.js';

const NewClientsStatsPanel = ({
  requests,
  currDate,
  timeText,
  getPrevData,
}) => {
  const { smallPanel, setStats, updateStats } = useSmallStatPanel(
    {
      category: 'Новые клиенты',
      linkTo: '/clients/categories',
      timePeriod: timeText,
      renderIcon: <ClientsIcon className="panel__img panel__img--money" />,
    },
    requests,
    (data) => getStats(data),
    timeText,
    [currDate],
  );

  const getStats = (requests) => {
    setStats((stats) => ({
      ...stats,
      isLoading: true,
      isLoaded: false,
    }));

    let clients = {};

    //filter all clients except once from cur and prev month
    const prevMonth = getPrevData(currDate.startDate);

    const filteredRequests = requests.filter((request) => {
      if (
        request.client !== null &&
        !checkIfDateIsInRange(
          request.date,
          prevMonth.startDate,
          prevMonth.endDate,
        ) &&
        !checkIfDateIsInRange(
          request.date,
          currDate.startDate,
          currDate.endDate,
        ) &&
        clients[request.client.id] === undefined
      ) {
        clients = {
          ...clients,
          [request.client.id]: '',
        };
        return false;
      }
      return true;
    });

    const [, prevMonthNewClients] = statisticsFindNewClients(
      filteredRequests,
      clients,
      prevMonth,
    );

    const [filteredRequestsNew, curMonthNewClients] = statisticsFindNewClients(
      requests,
      clients,
      currDate,
      false,
    );

    setStats((stats) => ({
      ...stats,
      windowContent: (
        <RequestsList
          title="Заявки за выбранный период"
          data={filteredRequestsNew}
          sortBy={{ curSort: 'sum', sum: 'desc' }}
        />
      ),
    }));
    updateStats(prevMonthNewClients, curMonthNewClients);
  };

  return smallPanel;
};

export default NewClientsStatsPanel;

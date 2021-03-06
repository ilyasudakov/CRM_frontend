import { useEffect } from 'react';
import useDraftsList from 'Utils/hooks/useDraftsList';
import { getRecordedWorkByDateRange } from 'API/WorkManaging/work_control';
import RiggingItemsQuantityForType from '../Graphs/RiggingItemsQuantityForType.jsx';

const ProductionPage = ({ curDate }) => {
  const { drafts } = useDraftsList();

  // const [workData, setWorkData] = useState([]);

  const getDataForTwoWeeks = (signal) => {
    let curMonday = curDate;
    let prevMonday = curDate;

    prevMonday = new Date(
      prevMonday.setDate(
        prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7) - 7,
      ),
    );
    getRecordedWorkByDateRange(
      prevMonday.getDate(),
      prevMonday.getMonth() + 1,
      prevMonday.getFullYear(),
      curMonday.getDate(),
      curMonday.getMonth() + 1,
      curMonday.getFullYear(),
      signal,
    ).then((res) => res.json());
    // .then((res) => setWorkData([...res]));
  };

  useEffect(() => {
    const abortController = new AbortController();
    getDataForTwoWeeks(abortController.signal);
    return function cancel() {
      abortController.abort();
    };
  }, [curDate]);

  return (
    <div className="statistics__page-wrapper">
      <div className="statistics__row">
        {/* <ProductQuantityProduced data={workData} curDate={curDate} /> */}
        {/* <AverageProductQuantityProduced data={workData} curDate={curDate} /> */}
      </div>
      <div className="statistics__row">
        <RiggingItemsQuantityForType data={drafts} />
      </div>
    </div>
  );
};

export default ProductionPage;

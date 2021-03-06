import './UpdateLogWidget.scss';
import Widget from '../Widget/Widget.jsx';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { sortByField } from 'Utils/sorting/sorting.js';
import { formatDateString, dateDiffInDays } from 'Utils/functions.jsx';
import PlaceholderLoading from 'Components/TableView/PlaceholderLoading/PlaceholderLoading.jsx';
import UserContext from '../../../../App.js';

const UpdateLogWidget = () => {
  const [updatesList, setUpdatesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userHasAccess } = useContext(UserContext);

  const visibilityItems = {
    all: [
      'ROLE_ADMIN',
      'ROLE_WORKSHOP',
      'ROLE_DISPATCHER',
      'ROLE_MANAGER',
      'ROLE_ENGINEER',
    ],
    hidden: [],
    admin: ['ROLE_ADMIN'],
    manager: ['ROLE_ADMIN', 'ROLE_MANAGER'],
    workshop: ['ROLE_ADMIN', 'ROLE_WORKSHOP'],
    dispatcher: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
    engineer: ['ROLE_ADMIN', 'ROLE_ENGINEER'],
  };

  const getUpdateLogList = () => {
    return axios
      .get(
        `https://firestore.googleapis.com/v1/projects/osfixupdatelog/databases/(default)/documents/updates/`,
      )
      .then(({ data }) => {
        const { documents } = data;
        const sortedByDate = sortByField(
          documents.filter(
            (document) =>
              userHasAccess(
                visibilityItems[document?.fields?.visibility?.stringValue],
              ) &&
              dateDiffInDays(new Date(document?.createTime), new Date()) <= 5,
          ),
          {
            fieldName: 'createTime',
            direction: 'desc',
          },
        );
        if (sortedByDate.length < 4) {
          setUpdatesList([...sortedByDate]);
          return setIsLoading(false);
        }
        const lastFourUpdates = sortedByDate.splice(0, 3);
        setUpdatesList([...lastFourUpdates]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => getUpdateLogList(), []);

  return (
    <Widget
      className="update-log-widget"
      title="Обновления"
      miniWidget
      content={<UpdateList updates={updatesList} isLoading={isLoading} />}
    />
  );
};

export default UpdateLogWidget;

const UpdateList = ({ updates, isLoading = false }) => {
  return (
    <div className="update-log-widget__list">
      {!isLoading && updates.length === 0 && (
        <div className="update-log-widget__title">
          <span>Нет последних обновлений</span>
        </div>
      )}
      {isLoading ? (
        <PlaceholderLoading />
      ) : (
        <>
          {updates.map((update) => (
            <UpdateItem key={update.createTime} update={update} />
          ))}
        </>
      )}
    </div>
  );
};

const UpdateItem = ({ update }) => {
  const description = update?.fields?.description?.stringValue;
  const list = update?.fields?.list?.arrayValue?.values;
  const name = update?.fields?.name?.stringValue;

  return (
    <>
      <div className="update-log-widget__title">
        <span>{name}</span>
        <span>{`Обновление от ${formatDateString(update?.createTime)}`}</span>
      </div>
      <div className="update-log-widget__group">
        {list?.map((update) => (
          <div key={update?.stringValue}>{update?.stringValue}</div>
        ))}
      </div>
      {description ? (
        <div className="update-log-widget__description">{description}</div>
      ) : null}
    </>
  );
};

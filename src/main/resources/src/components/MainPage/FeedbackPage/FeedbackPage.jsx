import React, { useState, useEffect } from 'react';
import './FeedbackPage.scss';
import '../../../utils/MainWindow/MainWindow.scss';
import SearchBar from '../SearchBar/SearchBar.jsx';
import viewSVG from '../../../../../../../assets/tableview/view.svg';
import editSVG from '../../../../../../../assets/tableview/edit.svg';
import deleteSVG from '../../../../../../../assets/tableview/delete.svg';
import TableDataLoading from '../../../utils/TableView/TableDataLoading/TableDataLoading.jsx';
import { Link } from 'react-router-dom';
import { formatDateString, formatDateStringWithTime } from '../../../utils/functions.jsx';
import { getFeedback, deleteFeedbackById } from '../../../utils/RequestsAPI/Feedback/feedback.js';
import { getMessagesByDiscussionId, deleteMessage } from '../../../utils/RequestsAPI/Feedback/messages.js';

const FeedbackPage = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [statuses, setStatuses] = useState([
        {
            className: 'in-progress',
            name: 'В процессе',
            visible: true,
        },
        {
            className: 'completed',
            name: 'Завершенные',
            visible: false,
        },
        {
            className: 'urgent',
            name: 'Срочно',
            visible: true,
        },
        {
            className: 'testing',
            name: 'Тестирование',
            visible: true,
        }
    ])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        getFeedback()
            .then(res => res.json())
            .then(res => {
                setMessages(res);
                setIsLoading(false);
            })
    }

    return (
        <div className="feedback-page">
            <div className="main-window">
                <div className="main-window__title">Обратная связь</div>
                <SearchBar
                    title="Поиск по обсуждениям"
                    placeholder="Введите запрос для поиска..."
                    setSearchQuery={setSearchQuery}
                />
                <div className="main-window__info-panel">
                    <div className="feedback-page__status-wrapper">
                        <div>Фильтр по статусам: </div>
                        {statuses.map((status, index) => {
                            return <div
                                className={(status.visible ? "main-window__button" : "main-window__button main-window__button--inverted") + " main-window__list-item--" + status.className}
                                onClick={() => {
                                    let temp = statuses;
                                    temp.splice(index, 1, {
                                        ...status,
                                        visible: !status.visible
                                    });
                                    setStatuses([...temp]);
                                }}
                            >{status.name}</div>
                        })}
                    </div>
                    <div className="main-window__amount_table">Всего: {messages.length} записей</div>
                </div>
                <div className="main-window__list">
                    <div className="main-window__list-item main-window__list-item--header">
                        <span>Обсуждения</span>
                        <div className="main-window__actions">Действие</div>
                    </div>
                    {isLoading && <TableDataLoading
                        className="main-window__list-item"
                        minHeight="50px"
                    />}
                    {messages
                        .filter(item => {
                            if (
                                item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                formatDateString(item.date).toLowerCase().includes(searchQuery.toLowerCase()) ||
                                item.subject.toLowerCase().includes(searchQuery.toLowerCase())
                            ) {
                                let check = false;
                                statuses.map(status => {
                                    if (
                                        status.visible && (status.className === item.status)
                                    ) {
                                        check = true;
                                        return;
                                    }
                                })
                                return check;
                            }
                        })
                        .sort((a, b) => {
                            if (a.date < b.date) {
                                return -1;
                            }
                            if (a.date > b.date) {
                                return 1;
                            }
                            return 0;
                        })
                        .map((item, index) => {
                            return <Link className={"main-window__list-item" + " main-window__list-item--" + item.status} to={'/feedback/view/' + item.id}>
                                <div className="main-window__list-col">
                                    <span><div className="main-window__mobile-text">Тема: </div>{item.subject}</span>
                                    <span><div className="main-window__mobile-text">Дата: </div>{formatDateStringWithTime(item.date)}</span>
                                    <span><div className="main-window__mobile-text">Пользователь: </div>{item.author}</span>
                                    {/* <div className="feedback-page__info-message"><div className="main-window__mobile-text">Новые сообщения: </div>{2}</div> */}
                                </div>
                                <div className="main-window__actions">
                                    <div className="main-window__action" title="Просмотр чата">
                                        <img className="main-window__img" src={viewSVG} />
                                    </div>
                                    {props.userHasAccess(['ROLE_ADMIN']) && <div className="main-window__action" title="Удаление чата" onClick={(event) => {
                                        event.preventDefault();
                                        let temp = [];
                                        getMessagesByDiscussionId(item.id)
                                            .then(res => res.json())
                                            .then(res => {
                                                Promise.all(res.map(message => {
                                                    return deleteMessage(message.id)
                                                }))
                                                    .then(() => {
                                                        deleteFeedbackById(item.id)
                                                            .then(() => {
                                                                return loadData();
                                                            })
                                                    })
                                            })
                                    }}>
                                        <img className="main-window__img" src={deleteSVG} />
                                    </div>}
                                </div>
                            </Link>
                        })}
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
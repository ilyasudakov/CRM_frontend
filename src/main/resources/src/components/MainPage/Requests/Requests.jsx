import React, { useState, useEffect } from 'react'
import '../../../utils/MainWindow/MainWindow.scss'
import './Requests.scss'
import '../../../utils/Form/Form.scss'
import '../../../utils/MainWindow/MainWindow.scss'
import {
  getRequests,
  deleteRequest,
  deleteProductsToRequest,
  getRequestById,
} from '../../../utils/RequestsAPI/Requests.jsx'
import TableView from './TableView/TableView.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import FormWindow from '../../../utils/Form/FormWindow/FormWindow.jsx'

const Requests = (props) => {
  const [requests, setRequests] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showWindow, setShowWindow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [toWorkshop, setToWorkshop] = useState('lemz')
  const [requestId, setRequestId] = useState(0)
  const [clients, setClients] = useState([])
  const [curPage, setCurPage] = useState('Открытые')
  const [requestStatuses, setRequestStatutes] = useState([
    {
      name: 'Проблема-материалы',
      className: 'materials',
      access: ['ROLE_ADMIN', 'ROLE_WORKSHOP'],
      visible: false,
    },
    // {
    //   name: 'Завершено',
    //   className: 'completed',
    //   access: ['ROLE_ADMIN'],
    //   visible: false,
    // },
    {
      name: 'Отгружено',
      className: 'shipped',
      access: ['ROLE_ADMIN', 'ROLE_WORKSHOP'],
      visible: false,
    },
    {
      name: 'Готово к отгрузке',
      className: 'ready',
      access: ['ROLE_ADMIN', 'ROLE_MANAGER'],
      visible: false,
    },
    {
      name: 'В производстве',
      className: 'in-production',
      access: ['ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_MANAGER'],
      visible: false,
    },
    {
      name: 'Ожидание',
      className: 'waiting',
      access: ['ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_MANAGER'],
      visible: false,
    },
  ])

  const deleteItem = (event) => {
    const id = event.target.dataset.id
    getRequestById(id)
      .then((res) => res.json())
      .then((res) => {
        const productsArr = res.requestProducts.map((product) => {
          return deleteProductsToRequest(product.id)
        })
        Promise.all(productsArr).then(() => {
          deleteRequest(id).then(() => loadRequests())
        })
      })
  }

  useEffect(() => {
    document.title = 'Заявки'
    let abortController = new AbortController()
    loadRequests(abortController.signal)
    return function cancel() {
      abortController.abort()
    }
  }, [curPage])

  const getClientsFromRequests = (reqs) => {
    const temp = clients
    reqs.map((request) => {
      if (
        request.status !== 'Завершено' &&
        !temp.find((item) => request.codeWord === item.name)
      ) {
        temp.push({
          name: request.codeWord,
          active: false,
        })
      }
    })
    // console.log(temp);
    setClients([...temp])
  }

  const loadRequests = (signal) => {
    setIsLoading(true)
    getRequests(signal)
      .then((res) => res.json())
      .then((requests) => {
        let temp = requests.map((item) => {
          return {
            ...item,
            open: false,
          }
        })
        setIsLoading(false)
        console.log(temp)
        setRequests(temp)
        getClientsFromRequests(temp)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }

  const transferRequest = (id) => {
    setRequestId(id)
    setShowWindow(!showWindow)
  }

  const copyRequest = (id) => {
    props.setTransferState(true)
    props.setTransferData(
      requests.find((item) => {
        if (item.id === id) {
          return true
        }
      }),
    )
    props.history.push('/requests/new')
  }

  return (
    <div className="requests">
      <div className="main-window">
        <div className="main-window__header">
          <div className="main-window__title">Заявки</div>
          <SearchBar
            title="Поиск по заявкам"
            placeholder="Введите название продукции для поиска..."
            setSearchQuery={setSearchQuery}
          />
          <div className="main-window__menu">
            <div
              className={
                curPage === 'Открытые'
                  ? 'main-window__item--active main-window__item'
                  : 'main-window__item'
              }
              onClick={() => setCurPage('Открытые')}
            >
              Открытые
            </div>
            <div
              className={
                curPage === 'Завершено'
                  ? 'main-window__item--active main-window__item'
                  : 'main-window__item'
              }
              onClick={() => setCurPage('Завершено')}
            >
              Завершено
            </div>
          </div>
        </div>
        <FormWindow
          title="Перенос заявки в план производства"
          windowName="transfer-request"
          content={
            <React.Fragment>
              <div className="main-form">
                <div className="main-form__form">
                  <div className="main-form__item">
                    <div className="main-form__input_name">Подразделение</div>
                    <div className="main-form__input_field">
                      <select
                        name="workshop"
                        onChange={(event) => {
                          setToWorkshop(event.target.value)
                        }}
                      >
                        <option value="lemz">ЦехЛЭМЗ</option>
                        <option value="lepsari">ЦехЛепсари</option>
                      </select>
                    </div>
                  </div>
                  <div className="main-form__buttons">
                    <input
                      className="main-form__submit"
                      type="submit"
                      onClick={() => {
                        props.setTransferState(true)
                        props.setTransferData(
                          requests.find((item) => {
                            if (item.id === requestId) {
                              return true
                            }
                          }),
                        )
                        props.history.push(
                          toWorkshop + '/workshop-' + toWorkshop + '/new',
                        )
                      }}
                      value="Перенести в цех"
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
          showWindow={showWindow}
          setShowWindow={setShowWindow}
        />
        <div className="main-window__info-panel">
          <div className="requests__clients-sort">
            {clients
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1
                }
                if (a.name > b.name) {
                  return 1
                }
                return 0
              })
              .map((client, index) => {
                return (
                  <div
                    className={
                      (client.active
                        ? 'main-window__button'
                        : 'main-window__button main-window__button--inverted') +
                      ' main-window__list-item--' +
                      status.className
                    }
                    onClick={() => {
                      let temp = clients
                      temp = temp.map((item) => {
                        return {
                          ...item,
                          active: false,
                        }
                      })
                      temp.splice(index, 1, {
                        ...client,
                        active: !client.active,
                      })
                      setClients([...temp])
                    }}
                  >
                    {client.name}
                  </div>
                )
              })}
          </div>
          <div className="main-window__amount_table">
            Всего: {requests.length} записей
          </div>
        </div>
        <div className="main-window__status-panel">
          <div>Фильтр по статусам: </div>
          {requestStatuses.map((status, index) => {
            return (
              <div
                className={
                  (status.visible
                    ? 'main-window__button'
                    : 'main-window__button main-window__button--inverted') +
                  ' main-window__list-item--' +
                  status.className
                }
                onClick={() => {
                  let temp = requestStatuses.map((status) => {
                    return {
                      ...status,
                      visible: false,
                    }
                  })
                  temp.splice(index, 1, {
                    ...status,
                    visible: !status.visible,
                  })
                  setRequestStatutes([...temp])
                }}
              >
                {status.name}
              </div>
            )
          })}
        </div>
        <TableView
          data={requests
            .filter((item) => {
              if (curPage === 'Открытые') {
                if (item.status !== 'Завершено') return true
              } else {
                if (item.status === 'Завершено') return true
              }
            })
            .filter((item) => {
              let check = false
              let noActiveStatuses = true
              requestStatuses.map((status) => {
                requestStatuses.map((status) => {
                  if (status.visible) {
                    noActiveStatuses = false
                  }
                })
                if (
                  noActiveStatuses === true ||
                  (status.visible && status.name === item.status)
                ) {
                  check = true
                  return
                }
              })
              return check
            })
            .filter((item) => {
              let check = false
              let noActiveClients = true
              clients.map((client) => {
                if (client.active) {
                  noActiveClients = false
                }
              })
              clients.map((client) => {
                if (
                  noActiveClients ||
                  (client.active && client.name === item.codeWord) ||
                  item.status === 'Завершено'
                ) {
                  check = true
                  return
                }
              })
              return check
            })}
          isLoading={isLoading}
          loadData={loadRequests}
          deleteItem={deleteItem}
          transferRequest={transferRequest}
          copyRequest={copyRequest}
          searchQuery={searchQuery}
          userHasAccess={props.userHasAccess}
        />
      </div>
    </div>
  )
}

export default Requests

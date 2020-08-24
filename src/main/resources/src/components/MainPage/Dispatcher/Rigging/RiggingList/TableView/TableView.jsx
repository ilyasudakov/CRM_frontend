import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './TableView.scss'
import { UserContext } from '../../../../../../App.js'

import chevronDownSVG from '../../../../../../../../../../assets/tableview/chevron-down.svg'
import editIcon from '../../../../../../../../../../assets/tableview/edit.svg'
import { rigStatuses } from '../../RiggingComponents/rigsVariables.js'
import PlaceholderLoading from '../../../../../../utils/TableView/PlaceholderLoading/PlaceholderLoading.jsx'

const TableView = (props) => {
  const [workshops, setWorkshops] = useState([
    {
      name: 'ЦехЛЭМЗ',
      alternatives: ['ЛЭМЗ', 'lemz'],
      isMinimized: false,
      visibility: ['ROLE_ADMIN', 'ROLE_LEMZ'],
    },
    {
      name: 'ЦехЛиговский',
      alternatives: ['Лиговка', 'ligoskiy'],
      isMinimized: false,
      visibility: ['ROLE_ADMIN', 'ROLE_LIGOVSKIY'],
    },
    {
      name: 'ЦехЛепсари',
      alternatives: ['Лепсари', 'lepsari'],
      isMinimized: false,
      visibility: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
    },
  ])

  const riggingNames = {
    stamp: 'stamp',
    bench: 'machine',
    press: 'press-form',
    detail: 'parts',
  }

  const userContext = useContext(UserContext)

  return (
    <div className="rigging-list-tableview">
      <div className="main-window__list">
        {workshops
          /*.filter(
            (workshop) =>
              props.data.filter(
                (item) =>
                  item.location === workshop.name ||
                  item.location === workshop.alternative,
              ).length > 0,
          )*/
          .filter((workshop) => userContext.userHasAccess(workshop.visibility))
          .map((workshop, workshopIndex) => (
            <>
              <div
                className="main-window__list-item main-window__list-item--divider"
                onClick={() => {
                  let temp = workshops
                  temp[workshopIndex].isMinimized = !temp[workshopIndex]
                    .isMinimized
                  setWorkshops([...temp])
                }}
              >
                <span>
                  {workshop.name}
                  <img
                    className={
                      workshop.isMinimized
                        ? 'main-window__img'
                        : 'main-window__img main-window__img--rotated'
                    }
                    src={chevronDownSVG}
                  />
                </span>
              </div>
              <div className="main-window__list-item main-window__list-item--header">
                <span>Артикул</span>
                <span>Название</span>
                <span>Кол-во</span>
                <span>Комментарий</span>
                <span>Статус</span>
                <div className="main-window__actions">Действия</div>
              </div>
              {props.isLoading ? (
                <PlaceholderLoading
                  itemClassName="main-window__list-item"
                  minHeight="35px"
                  items={3}
                />
              ) : (
                props.data
                  .filter(
                    (item) =>
                      item.location === workshop.name ||
                      workshop.alternatives.find(
                        (oldName) => oldName === item.location,
                      ) !== undefined,
                  )
                  .map((item) => {
                    if (!workshop.isMinimized) {
                      return (
                        <div className="main-window__list-item">
                          <span>
                            <div className="main-window__mobile-text">
                              Артикул:
                            </div>
                            {item.number}
                          </span>
                          <span>
                            <div className="main-window__mobile-text">
                              Название:
                            </div>
                            {item.name}
                          </span>
                          <span>
                            <div className="main-window__mobile-text">
                              Кол-во:
                            </div>
                            {item.amount}
                          </span>
                          <span>
                            <div className="main-window__mobile-text">
                              Комментарий:
                            </div>
                            {item.comment}
                          </span>
                          <span
                            className={`main-window__list-item--${
                              rigStatuses[item.color || 'production']?.className
                            }`}
                          >
                            <div className="main-window__mobile-text">
                              Статус
                            </div>
                            {rigStatuses[item.color || 'production'].name}
                          </span>
                          <div className="main-window__actions">
                            <Link
                              className="main-window__action"
                              to={`/dispatcher/rigging/${
                                riggingNames[item.type.toLowerCase()]
                              }/edit-part/${item.id}/${item.id}`}
                              title="Редактирование"
                            >
                              <img
                                className="main-window__img"
                                src={editIcon}
                                alt=""
                              />
                              {/* Редактирование */}
                            </Link>
                          </div>
                        </div>
                      )
                    }
                  })
              )}
            </>
          ))}
      </div>
    </div>
  )
}

export default TableView

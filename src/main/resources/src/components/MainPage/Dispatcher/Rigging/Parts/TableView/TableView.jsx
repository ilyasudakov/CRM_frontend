import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sortIcon from '../../../../../../../../../../assets/tableview/sort_icon.png';
import './TableView.scss';
import TableDataLoading from '../../../../../../utils/TableView/TableDataLoading/TableDataLoading.jsx';

const TableView = (props) => {
    const [sortOrder, setSortOrder] = useState({
        curSort: 'id',
        date: 'desc'
    })
    const [isLoading, setIsLoading] = useState(true);

    const changeSortOrder = (event) => {
        const name = event.target.getAttribute("name");
        setSortOrder({
            curSort: name,
            [name]: (sortOrder[name] === "desc" ? "asc" : "desc")
        })
    }

    const searchQuery = (data) => {
        let re = /[.,\s]/gi;
        const query = props.searchQuery.toLowerCase();
        return data.filter(item => (
            item.id.toString().includes(query) ||
            item.name.toLowerCase().includes(query) ||
            item.dimensions.toLowerCase().includes(query) ||
            item.processing.toLowerCase().includes(query) ||
            item.number.toLowerCase().replace(re, '').includes(query.replace(re, ''))
        ))
    }

    const sortParts = (data) => {
        return searchQuery(data).sort((a, b) => {
            if (a[sortOrder.curSort] < b[sortOrder.curSort]) {
                return (sortOrder[sortOrder.curSort] === "desc" ? -1 : 1);
            }
            if (a[sortOrder.curSort] > b[sortOrder.curSort]) {
                return (sortOrder[sortOrder.curSort] === "desc" ? 1 : -1);
            }
            return 0;
        })
    }

    useEffect(() => {
        props.data.length > 0 && setIsLoading(false);
    }, [props.data])

    return (
        <div className="tableview_parts">
            <div className="tableview_parts__row tableview_parts__row--header">
                <div className="tableview_parts__col">
                    <span>ID</span>
                    <img name="id" className="tableview_parts__img" onClick={changeSortOrder} src={sortIcon} />
                </div>
                <div className="tableview_parts__col">Артикул</div>
                <div className="tableview_parts__col">Название</div>
                <div className="tableview_parts__col">Размеры</div>
                <div className="tableview_parts__col">Обработка</div>
                <div className="tableview_parts__col">Действия</div>
            </div>
            {isLoading && <TableDataLoading
                minHeight='50px'
                className="tableview_parts__row tableview_parts__row--even"
            />}
            {sortParts(props.data).map((part, part_id) => (
                <div key={part_id} className={"tableview_parts__row " + (part.id % 2 === 0 ? "tableview_parts__row--even" : "tableview_parts__row--odd")}>
                    <div className="tableview_parts__col">{part.id}</div>
                    <div className="tableview_parts__col">{part.number}</div>
                    <div className="tableview_parts__col">{part.name}</div>
                    <div className="tableview_parts__col">{part.dimensions}</div>
                    <div className="tableview_parts__col">{part.processing}</div>
                    <div className="tableview_parts__actions">
                        {/* <Link to={"/part/view/" + part.id} className="tableview_parts__action">Просмотр</Link> */}
                        <Link to={"/dispatcher/rigging/parts/edit/" + part.id} className="tableview_parts__action">Редактировать</Link>
                        {props.userHasAccess(['ROLE_ADMIN']) && <div data-id={part.id} className="tableview_parts__action" onClick={props.deleteItem}>Удалить</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableView;
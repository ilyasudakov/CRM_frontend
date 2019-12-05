import React, { useState, useEffect } from 'react';
import deleteSVG from '../../../../../../../assets/select/delete.svg';
import './Select.scss';

const Select = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);
    let myRef = React.createRef();

    const search = () => {
        return options.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const clickOnInput = (event) => {
        const options = document.getElementsByClassName("select__options")[0];
        if (options.classList.contains("select__options--hidden")) {
            options.classList.remove("select__options--hidden")
        }
        else {
            options.classList.add("select__options--hidden")
        }
    }
    
    const clickOnInputBlur = (event) => {
        console.log(event);
    }

    const clickOnOption = (event) => {
        const value = event.target.getAttribute("name");
        const id = event.target.getAttribute("id");
        // const optionId = event.target.getAttribute("optionId");
        // let newOptions = options;
        // newOptions.splice(optionId, 1);
        // setOptions([...newOptions]);
        setSelected([
            ...selected,
            {
                id: id,
                name: value,
                quantity: 0,
                packaging: ""
            }
        ])
        props.onChange([
            ...selected,
            {
                id: id,
                name: value,
                quantity: 0,
                packaging: ""
            }
        ]);
    }

    const clickOnSelected = (event) => {
        const id = event.target.getAttribute("id");
        let newSelected = selected;
        newSelected.splice(id, 1);
        setSelected([...newSelected]);
        props.onChange([...newSelected]);
    }

    const handleParamChange = (event) => {
        const value = event.target.value;
        const name = event.target.getAttribute("name");
        const id = event.target.getAttribute("id");
        let newSelected = selected;
        newSelected = newSelected.map((item, index) => {
            return ({
                ...item,
                [name]: index == id ? value : item[name]
            })
        })
        setSelected([...newSelected]);
        props.onChange([...newSelected]);
    }

    useEffect(() => {
        if (props.defaultValue !== undefined) {
            setSelected([...props.defaultValue])
        }
        if (props.options !== undefined) {
            setOptions([...props.options])
        }
    }, [props.defaultValue, props.options])

    return (
        <div className="select">
            {!props.readOnly && <input
                type="text"
                className="select__input"
                onChange={handleInputChange}
                onClick={!props.readOnly ? clickOnInput : null}
                // onBlur={!props.readOnly ? clickOnInputBlur : null}
                placeholder={props.searchPlaceholder}
                // onClick={props.readOnly !== undefined ? "true" : "false"}
                ref={myRef}
                readOnly={props.readOnly}
            />}
            {props.options && <div className="select__options select__options--hidden" 
                onBlur={!props.readOnly ? clickOnInputBlur : null}>
                {search().map((item, index) => (
                    console.log(item),
                    <div id={item.id} optionId={index} name={item.name} className="select__option_item" onClick={clickOnOption}>
                        {item.name}
                    </div>
                ))}
            </div>}
            {/* {console.log(selected)} */}
            <div className="select__selected">
                {selected.length !== 0 && <span className="select__selected_title">Выбранная продукция:</span>}
                {selected.map((item, index) => (
                    <div className="select__selected_row">
                        <div className="select__selected_item" >
                            {item.product ? item.product.name : item.name}
                            {!props.readOnly && <img id={index} className="select__img" src={deleteSVG} alt="" onClick={clickOnSelected} />}
                        </div>
                        <div className="select__selected_quantity">
                            Кол-во{!props.readOnly && "*"}
                            <input
                                id={index}
                                type="number"
                                name="quantity"
                                autoComplete="off"
                                defaultValue={item.quantity != 0 ? item.quantity : 0}
                                onChange={handleParamChange}
                                readOnly={props.readOnly}
                            />
                        </div>
                        <div className="select__selected_packaging">
                            Фасовка{!props.readOnly && "*"}
                            <textarea
                                id={index}
                                type="text"
                                name="packaging"
                                autoComplete="off"
                                defaultValue={item.packaging}
                                onChange={handleParamChange}
                                readOnly={props.readOnly}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Select;
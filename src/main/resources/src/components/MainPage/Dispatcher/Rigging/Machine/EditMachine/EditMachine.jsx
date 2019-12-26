import React, { useState, useEffect } from 'react';
import './EditMachine.scss';
import SelectParts from '../../SelectParts/SelectParts.jsx';
import { editMachine, editPartsOfMachine, addPartsToStamp, deletePartsFromMachine, getMachineById, addPartsToMachine } from '../../../../../../utils/utilsAPI.jsx';

const EditMachine = (props) => {
    const [machineInputs, setMachineInputs] = useState({
        name: '',
        number: '',
        comment: '',
        parts: []
    })

    const [machineId, setMachineId] = useState(0);
    const [nameValid, setNameValid] = useState(true);

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'name':
                setNameValid(value !== "");
                break;
        }
    }

    const formIsValid = () => {
        if (nameValid) {
            return true;
        }
        else {
            alert("Форма не заполнена");
            return false;
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(machineInputs);
        formIsValid() && editMachine(machineInputs, machineId)
            .then(() => {
                //PUT if edited, POST if part is new
                const partsArr = machineInputs.parts.map((selected) => {
                    let edited = false;
                    machineInputs.benchParts.map((item) => {
                        if (item.id === selected.id) {
                            edited = true;
                            return;
                        }
                    });
                    return (edited === true)
                        ? (
                            editPartsOfMachine({
                                ...selected,
                                riggingId: machineId
                            }, selected.id)
                        )
                        : (
                            addPartsToMachine({
                                ...selected,
                                riggingId: machineId
                            })
                        )
                })
                Promise.all(partsArr)
                    .then(() => {
                        //DELETE parts removed by user
                        const partsArr = machineInputs.benchParts.map((item) => {
                            let deleted = true;
                            machineInputs.parts.map((selected) => {
                                if (selected.id === item.id) {
                                    deleted = false;
                                    return;
                                }
                            })
                            return (deleted === true && deletePartsFromMachine(item.id))
                        })
                        Promise.all(partsArr)
                            .then(() => {
                                props.history.push("/dispatcher/rigging/machine");
                            })
                    })
            })
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        validateField(name, value);
        setMachineInputs({
            ...machineInputs,
            [name]: value
        })
    }

    const handlePartsChange = (newParts) => {
        validateField("parts", newParts);
        setMachineInputs({
            ...machineInputs,
            parts: newParts
        })
    }

    useEffect(() => {
        document.title = "Редактирование станка";
        const id = props.history.location.pathname.split("/dispatcher/rigging/machine/edit/")[1];
        setMachineId(id);
        if (isNaN(Number.parseInt(id))) {
            alert('Неправильный индекс станка!');
            props.history.push("/dispatcher/rigging/machine");
        } else {
            getMachineById(id)
                .then(res => res.json())
                .then(res => {
                    setMachineInputs({
                        ...res,
                        parts: res.benchParts
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [])

    return (
        <div className="edit_machine">
            <div className="edit_machine__title">Редактирование станка</div>
            <form className="edit_machine__form">
                <div className="edit_machine__item">
                    <div className="edit_machine__input_name">Название*</div>
                    <div className="edit_machine__input_field">
                        <input type="text"
                            name="name"
                            autoComplete="off"
                            onChange={handleInputChange}
                            defaultValue={machineInputs.name}
                        />
                    </div>
                </div>
                <div className="edit_machine__item">
                    <div className="edit_machine__input_name">Артикул*</div>
                    <div className="edit_machine__input_field">
                        <input type="text"
                            name="number"
                            autoComplete="off"
                            onChange={handleInputChange}
                            defaultValue={machineInputs.number}
                        />
                    </div>
                </div>
                <div className="edit_machine__item">
                    <div className="edit_machine__input_name">Комментарий</div>
                    <div className="edit_machine__input_field">
                        <input type="text"
                            name="comment"
                            autoComplete="off"
                            onChange={handleInputChange}
                            defaultValue={machineInputs.comment}
                        />
                    </div>
                </div>
                <div className="edit_machine__item">
                    <div className="edit_machine__input_name">Детали*</div>
                    <div className="edit_machine__input_field">
                        <SelectParts
                            handlePartsChange={handlePartsChange}
                            defaultValue={machineInputs.benchParts}
                        />
                    </div>
                </div>
                <div className="edit_machine__input_hint">* - поля, обязательные для заполнения</div>
                <input className="edit_machine__submit" type="submit" onClick={handleSubmit} value="Редактировать запись" />
            </form>
        </div>
    )
}

export default EditMachine;
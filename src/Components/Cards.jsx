import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Label, Input, ModalFooter, ModalBody, ModalHeader, Modal} from "reactstrap";

function Cards(props) {
    const toggle = () => setEditMode(!editMode)
    const [editMode, setEditMode] = useState(false)
    const [nameChange, setNameChange] = useState(props.card.name)
    const [statusChange, setStatusChange] = useState(props.card.status)
    const [priorityChange, setPriorityChange] = useState(props.card.priority)

    const editedCard = {
        id: Math.random(), name: nameChange,
        status: statusChange, priority: priorityChange
    }
    const editButtonHandler = () => {
        props.editCard(props.card.id, editedCard)
        toggle()
    }


    return (
        <div className='card text-white bg-warning mb-3 shadow-sm'>
            <div className='card-body'>
                <h6>{props.card.name}</h6>
                <h7>{props.card.priority}</h7>
                <div>
                    <Button>Left</Button>
                    <Button>Write</Button>
                </div>
                <div>
                    <Button disabled={props.card.priority === props.priority[props.priority.length - 1]}
                            onClick={() => props.priorityChangeUp(props.card.id, 1)}>P.UP</Button>
                    <Button disabled={props.card.priority === props.priority[0]}
                            onClick={() => props.priorityChangeDown(props.card.id, 1)}>P>DOWN</Button>
                </div>
                <div>
                    <Button onClick={toggle}>Edit</Button>

                    {editMode &&
                    <Modal isOpen={toggle}>
                        <ModalHeader>
                            <Label>Edit mode:</Label>
                        </ModalHeader>
                        <ModalBody>
                            <Label>Change name:</Label>
                            <Input type='text' value={nameChange}
                                   onChange={event => setNameChange(event.target.value)}/>
                            <Label>Change priority:</Label>
                            <Input type='select' value={priorityChange}
                                   onChange={event => setPriorityChange(event.target.value)}>
                                {props.priority.map(el => <option>{el}</option>)}
                            </Input>
                            <Label>Change status:</Label>
                            <Input type='select' value={statusChange}
                                   onChange={event => setStatusChange(event.target.value)}>
                                {props.columns.map(el => <option>{el.status}</option>)}
                            </Input>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={editButtonHandler}>OK</Button>
                            <Button onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.column,
    priority: state.priority
})

const mapDispatchToProps = (dispatch) => ({
    editCard: (id, editedCard) => dispatch({type: 'EDIT_CARD', payload: {id: id, editedCard: editedCard}}),
    priorityChangeUp: (id, value) => dispatch({type: 'PRIORITY_CHANGE', payload: {id: id, value: value}}),
    priorityChangeDown: (id, value) => dispatch({type: 'PRIORITY_DOWN', payload: {id: id, value: value}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

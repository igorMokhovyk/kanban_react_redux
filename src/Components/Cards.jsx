import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
    Button, CardBody, Card, Label, CardFooter, CardHeader,
    Input, ModalFooter, ModalBody, ModalHeader, Modal
} from "reactstrap";
import DeleteButton from "./DeleteButton";


function Cards(props) {
    const deleteToggle = () => setDeleteModalMode(!deleteModalMode)
    const toggle = () => setEditMode(!editMode)
    const [editMode, setEditMode] = useState(false)
    const [nameChange, setNameChange] = useState(props.card.name)
    const [statusChange, setStatusChange] = useState(props.card.status)
    const [priorityChange, setPriorityChange] = useState(props.card.priority)
    const [deleteModalMode, setDeleteModalMode] = useState(false)
    const editedCard = {
        id: Math.random(), name: nameChange,
        status: statusChange, priority: priorityChange
    }
    const editButtonHandler = () => {
        props.editCard(props.card.id, editedCard)
        toggle()
    }

    console.log(props.columns[props.columns.length - 1].status)

    return (
        <div className='card text-white bg-warning mb-3 shadow-sm'>
            <Card body inverse color="warning">
                <CardBody>
                    <h6 className='H'>{props.card.name}</h6>
                    <h7 className='H'>{props.card.priority}</h7>
                </CardBody>
                <CardFooter>
                    <Button disabled={props.card.status === 'todo'}
                            onClick={() => props.statusChange(props.card.id, "LEFT")}>Left</Button>
                    {'  '}
                    <Button disabled={props.card.status === props.columns[props.columns.length - 1].status}
                            onClick={() => props.statusChange(props.card.id, "RIGHT")}>Right</Button>
                </CardFooter>
                <div>
                    <Button disabled={props.card.priority === props.priority[props.priority.length - 1]}
                            onClick={() => props.priorityChange(props.card.id, 1, 'UP')}>P.UP</Button>
                    {'  '}
                    <Button disabled={props.card.priority === props.priority[0]}
                            onClick={() => props.priorityChange(props.card.id, 1, 'DOWN')}>P>DOWN</Button>
                </div>

                <div>
                    <CardHeader>
                        <Button onClick={toggle}>Edit</Button>
                        <Button onClick={deleteToggle}>Delete</Button>
                        {deleteModalMode &&
                        <Modal isOpen={deleteToggle}>
                            <ModalHeader>
                                <Label>Are you sure to Delete card?</Label>
                            </ModalHeader>
                            <ModalFooter>
                                <Button onClick={() => props.deleteCard(props.card.id)}>Confirm</Button>
                                <Button onClick={deleteToggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        }
                    </CardHeader>
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
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.column,
    priority: state.priority
})

const mapDispatchToProps = (dispatch) => ({
    editCard: (id, editedCard) => dispatch({type: 'EDIT_CARD', payload: {id, editedCard}}),
    priorityChange: (id, value, diraction) => dispatch({type: 'PRIORITY_CHANGE', payload: {id, value, diraction}}),
    statusChange: (id, diraction) => dispatch({type: 'STATUS_CHANGE', payload: {id, diraction}}),
    deleteCard: (id) => dispatch({type: 'DELETE_CARD', payload: id})

})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

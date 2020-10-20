import React, {useState} from 'react';

import {connect} from 'react-redux';
import {Button, Input, Label, ModalFooter, ModalBody, ModalHeader, Modal} from "reactstrap";


function AddNewCardButton(props) {
    const toggle = () => setToggleMode(!toggleMode);
    const [toggleMode, setToggleMode] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [priorityInput, setPriorityInput] = useState('')
    const [statusInput, setStatusInput] = useState('')


    const cardAdder = {id: Math.random(), name: nameInput, status: statusInput, priority: priorityInput}

    const cardAddHandler = () => {
        props.addCard(cardAdder);
        toggle()
    }


    return (
        <div>
            <Button onClick={toggle}>Add New Card</Button>
            {toggleMode &&
            <Modal isOpen={toggleMode}>
                <ModalHeader>
                    <Label>Create Card here:</Label>
                </ModalHeader>
                <ModalBody>
                    <Label>Write name:</Label>
                    <Input placeholder='Write here:'
                           onChange={event => setNameInput(event.target.value)}/>
                    <Label>Priority:</Label>
                    <Input type='number' placeholder='from 1 to 10'
                           onChange={event => setPriorityInput(event.target.value)}/>
                    <Label>Choose your status:</Label>
                    <Input type='select' placeholder='Status'
                           onChange={event => setStatusInput(event.target.value)}>
                        {props.columns.map(el => <option>{el.status}</option>)}
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={cardAddHandler}>Create</Button>
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.column
})

const mapDispatchToProps = (dispatch) => ({
    addCard: (cardAdder) => dispatch({type: 'ADD_CARD', payload: cardAdder}),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCardButton);

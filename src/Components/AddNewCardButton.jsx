import React, {useState} from 'react';

import {connect} from 'react-redux';
import {Button, Input, Label, ModalFooter, ModalBody, ModalHeader, Modal} from "reactstrap";
import {addCard} from "../redux/actions";


function AddNewCardButton(props) {


    const [nameInput, setNameInput] = useState('')
    const [priorityInput, setPriorityInput] = useState('')
    const [statusInput, setStatusInput] = useState('')


    // const cardAdder = {name: nameInput, status: statusInput, priority: priorityInput}

    // const cardAddHandler = () => {
    //     props.addCard(cardAdder);
    //     toggleNewCard()
    // }

    const addCardButton = () => {
        const newCard = {
            name: nameInput,
            status: statusInput,
            priority: priorityInput
        }
        props.addCard(newCard)
        props.toggleNewCard()
    }



    return (
        <div>
            {/*<Button onClick={toggleNewCard}>Add New Card</Button>*/}
            {props.toggleMode &&
            <Modal isOpen={props.toggleMode}>
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
                    <Button onClick={addCardButton}>Create</Button>
                    <Button onClick={props.toggleNewCard}>Cancel</Button>
                </ModalFooter>
            </Modal>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: (card) => dispatch(addCard(card)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCardButton);

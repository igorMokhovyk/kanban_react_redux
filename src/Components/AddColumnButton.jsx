import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Input, Label} from "reactstrap";


function AddColumnButton(props) {
    const toggle = () => setAddButtonToggleMode(!addButtonToggleMode)
    const [addButtonToggleMode, setAddButtonToggleMode] = useState(false);
    const [titleInput, setTitleInput] = useState('')
    const titleToLowerCase = titleInput.toLowerCase()
    const newTitle = {id: Math.random(), title: titleInput, status: titleToLowerCase}
    const addButtonHandler = () => {
        props.addColumn(newTitle);
        toggle();
    }


    return (
        <div>
            <Button onClick={toggle}>Add Column</Button>

            {addButtonToggleMode &&
            <Modal isOpen={toggle}>
                <ModalHeader>
                    <Label>Create new Column:</Label>
                </ModalHeader>
                <ModalBody>
                    <Input type='text' placeholder='Write title here:'
                           onChange={event => setTitleInput(event.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Create</Button>
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    columns: state.column
})

const mapDispatchToProps = (dispatch) => ({
    addColumn: (newTitle) => dispatch({type: 'ADD_COLUMN', payload: newTitle}),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddColumnButton);

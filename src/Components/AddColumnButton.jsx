import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Input, Label} from "reactstrap";
import {createColumn} from "../redux/actions";


function AddColumnButton(props) {

    const [titleInput, setTitleInput] = useState('')
    const newColumn = {title: titleInput, status: titleInput.toLowerCase()}
    const addButtonHandler = () => {
        props.createColumn(newColumn);
        props.toggleAddColumn();
    }
    return (

        <div>
            {/*<Button onClick={toggleAddColumn}>Add Column</Button>*/}
            {props.addButtonToggleMode &&
            <Modal isOpen={props.toggleAddColumn}>
                <ModalHeader>
                    <Label>Create new Column:</Label>
                </ModalHeader>
                <ModalBody>
                    <Input type='text' placeholder='Write title here:'
                           onChange={event => setTitleInput(event.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Create</Button>
                    <Button onClick={props.toggleAddColumn}>Cancel</Button>
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
    createColumn: (newColumn) => dispatch(createColumn(newColumn)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddColumnButton);

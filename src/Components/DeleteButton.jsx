import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Input, Label} from "reactstrap";


function DeleteButton(props) {
    const toggel = () => setDeleteModalMode(!deleteModalMode)
    const [deleteModalMode, setDeleteModalMode] = useState(false)


    return (
        <div>
            <Button onClick={toggel}>Delete</Button>
            {deleteModalMode &&
            <Modal isOpen={toggel}>
                <ModalHeader>
                    <Label>Are you sure to Delete card?</Label>
                </ModalHeader>
                <ModalFooter>
                    <Button onClick={() => props.deleteCard(props.cards.id)}>Confirm</Button>
                    <Button onClick={toggel}>Cancel</Button>
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
    deleteCard: (id) => dispatch({type: 'DELETE_CARD', payload: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);

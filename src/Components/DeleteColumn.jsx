import React, {useState} from "react";
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody, Input, Label} from "reactstrap";
import {deleteColumn} from "../redux/actions";


function DeleteColumn(props) {
    const toggle = () => setDeleteToggleMode(!deleteToggleMode);
    const [deleteToggleMode, setDeleteToggleMode] = useState(false);

    return (
        <div>
            <Button onClick={toggle}>Delete Column</Button>
            {deleteToggleMode &&
            <Modal isOpen={toggle}>
                <ModalHeader>
                    Delete Column
                </ModalHeader>
                <ModalFooter>
                    <Button onClick={() => props.deleteColumn(props.column.id)}>Confirm</Button>
                    <Button onClick={toggle}>Cancel</Button>
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
    deleteColumn: (id) => dispatch(deleteColumn(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteColumn);
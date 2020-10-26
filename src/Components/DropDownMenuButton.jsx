import React, {useState} from "react";
import {connect} from 'react-redux';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";





function DropDownMenuButton(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                MENU
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={props.toggleNewCard}>Add New Card</DropdownItem>
                <DropdownItem onClick={props.toggleAddColumn}>Add New Column</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>

        </Dropdown>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenuButton);
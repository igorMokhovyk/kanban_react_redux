import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Columns from "./Components/Columns";
import {connect} from "react-redux";
import AddColumnButton from "./Components/AddColumnButton";
import AddNewCardButton from "./Components/AddNewCardButton";
import {getCards, getColumns, getPriority} from "./redux/actions";
import DropDownMenuButton from "./Components/DropDownMenuButton";
import {Dropdown} from "reactstrap";


function App(props) {


    console.log(props.cards)

    useEffect(() => {
        props.getCards()
    }, [])

    useEffect(() => {
        props.getColumns()
    }, [])

    useEffect(() => {
        props.getPriority()
    }, [])

    const [toggleMode, setToggleMode] = useState(false)
    const toggleNewCard = () => setToggleMode(!toggleMode);

    const toggleAddColumn = () => setAddButtonToggleMode(!addButtonToggleMode)
    const [addButtonToggleMode, setAddButtonToggleMode] = useState(false);


    return (
        <div className="App">
            <div className="container">
                <DropDownMenuButton toggleMode={toggleMode}
                                    setToggleMode={setToggleMode}
                                    toggleNewCard={toggleNewCard}
                                    toggleAddColumn={toggleAddColumn}
                />
                <AddColumnButton toggleAddColumn={toggleAddColumn} addButtonToggleMode={addButtonToggleMode}/>
                <AddNewCardButton toggleMode={toggleMode} setToggleMode={setToggleMode} toggleNewCard={toggleNewCard}/>

                <div className='row'>
                    {props.columns.map(el => <Columns column={el}
                                                      key={el.id}

                    />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    getCards: () => dispatch(getCards()),
    getColumns: () => dispatch(getColumns()),
    getPriority: () => dispatch(getPriority())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

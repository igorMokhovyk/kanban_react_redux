import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Columns from "./Components/Columns";
import {connect} from "react-redux";
import AddColumnButton from "./Components/AddColumnButton";
import AddNewCardButton from "./Components/AddNewCardButton";


function App(props) {



    return (
        <div className="App">
            <div className="container">
                <AddColumnButton/>
                <AddNewCardButton/>
                <div className='row'>
                    {props.columns.map(el => <Columns column={el} key={el.id}/>)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.column
})



export default connect(mapStateToProps)(App);

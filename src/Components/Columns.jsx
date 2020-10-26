import React, {useState} from "react";
import {connect} from 'react-redux';
import Cards from "./Cards";
import {createColumn, deleteColumn} from "../redux/actions";
import DeleteColumn from "./DeleteColumn";


function Columns(props) {

    return (
        <div className='col-4 col-sm Column rounded-lg shadow-lg' style={{border: '1px solid'}}>
            <h3 className='Column-text'>
                {props.column.title}
                <DeleteColumn column={props.column}/>
            </h3>
            {props.cards.filter(el => el.status === props.column.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <Cards card={el} column={props.columns}
                />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    deleteColumn: (id) => dispatch(deleteColumn(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Columns);
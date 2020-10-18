import React from "react";
import {connect} from 'react-redux';
import Cards from "./Cards";

function Columns(props) {


    return (
        <div className='col-4 col-sm Column rounded-lg shadow-lg' style={{border: '1px solid'}}>
            <h3 className='Column-text'>
                {props.column.title}
            </h3>
            {props.cards.filter(el => el.status === props.column.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el => <Cards card={el}/>)}
        </div>
    )
}


const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.column
})


export default connect(mapStateToProps)(Columns);
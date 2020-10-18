import React from 'react';

import {connect} from 'react-redux';


function Cards(props) {

    console.log(props.cards)
    return (
        <div className='card text-white bg-warning mb-3 shadow-sm'>
            <div className='card-body'>
                <h6>{props.card.name}</h6>
                <h7>{props.card.priority}</h7>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.column
})

const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type: 'ADD_CARD'}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

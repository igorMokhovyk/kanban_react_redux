// import React from 'react';
//
// import {connect} from 'react-redux';
//
//
// function Card(props) {
// console.log(props)
//
//
//     return (
//         <div >
//
// <div className='card-body'>
//
//             {/*<button onClick={props.addCard}>Add card</button>*/}
//             {/*{props.cards.map(el => el.priority)}*/}
//
//             {/*    {props.cards.map(el => <div> {el.name}*/}
//             {/*    <button onClick={() => props.deleteCard(el.id)}>Delete</button>*/}
//             {/*</div>)}*/}
// </div>
//         </div>
//     );
// }
//
// const mapStateToProps = (state) => ({
//     cards: state.cards,
//     columns: state.column
// })
//
// const mapDispatchToProps = (dispatch) => ({
//     addCard: () => dispatch({type:'ADD_CARD'}),
//     deleteCard: (cardId) => dispatch({type:'DELETE_CARD', payload: cardId})
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Card);

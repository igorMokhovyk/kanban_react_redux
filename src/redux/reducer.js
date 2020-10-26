const initialState = {
    cards: [

    ],
    columns: [

    ],
    priority: []
};


const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDS' :
            return {
                ...state,
                cards: action.payload
            }

        case 'GET_COLUMNS' :
            return {
                ...state,
                columns: action.payload
            }

        case 'GET_PRIORITY' :
            return {
                ...state,
                priority: action.payload
            }

        case 'ADD_CARD' :
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }


        case 'DELETE_CARD' :
            const newList = state.cards.filter(el => el.id !== action.payload)
            return {
                ...state,
                cards: newList
            }


        case 'EDIT_CARD' :
            const cardEditing = state.cards.map(el => {
                if (el.id === action.payload.id) {
                    return {...state, ...action.payload.editedCard}
                } else {
                    return el;
                }
            })

            return {...state, cards: cardEditing}

        case 'PRIORITY_CHANGE' :
            const priorUpdate = state.cards.map(el => {
                if (action.payload.diraction === 'UP') {
                    if (el.id === action.payload.id) {
                        el.priority = state.priority[state.priority.indexOf(el.priority)
                        + action.payload.value];
                    }
                }
                if (action.payload.diraction === 'DOWN') {
                    if (el.id === action.payload.id) {
                        el.priority = state.priority[state.priority.indexOf(el.priority)
                        - action.payload.value];
                    }
                }
                return el;
            })
            return {...state, cards: priorUpdate}


        case 'STATUS_CHANGE' :
            const statusChange = state.cards.map(el => {
                if (action.payload.diraction === 'LEFT') {
                    if (el.id === action.payload.id) {
                        const colStatuses = state.columns.map(el => el.status);
                        return {...el, status: colStatuses[colStatuses.indexOf(el.status) - 1]}
                    }
                    return el
                }

                if (action.payload.diraction === 'RIGHT') {
                    if (el.id === action.payload.id) {
                        const colStatuses = state.columns.map(el => el.status);
                        return {...el, status: colStatuses[colStatuses.indexOf(el.status) + 1]}
                    }
                    return el
                }
            })
            return {
                ...state,
                cards: statusChange
            }

        default:
            return state
    }
}

export default kanban;
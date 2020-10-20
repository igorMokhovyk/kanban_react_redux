const initialState = {
    cards: [
        {
            id: Math.random(),
            name: 'First Task',
            status: 'todo',
            priority: 4
        },
        {
            id: Math.random(),
            name: 'Second Task',
            status: 'progress',
            priority: 6
        },
        {
            id: Math.random(),
            name: 'Third Task',
            status: 'review',
            priority: 5
        },
        {
            id: Math.random(),
            name: 'Fifth Task',
            status: 'review',
            priority: 8
        },
        {
            id: Math.random(),
            name: 'Six Task',
            status: 'done',
            priority: 10
        },
        {
            id: Math.random(),
            name: 'Forth Task',
            status: 'done',
            priority: 9
        }
    ],
    column: [
        {
            id: 1,
            title: 'To do',
            status: 'todo'
        },
        {
            id: 2,
            title: 'Progress',
            status: 'progress'
        },
        {
            id: 3,
            title: 'Review',
            status: 'review'
        },
        {
            id: 4,
            title: 'Done',
            status: 'done'
        }
    ],
    priority: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};


const kanban = (state = initialState, action) => {
    switch (action.type) {
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

        case 'ADD_COLUMN' :
            return {
                ...state,
                column: [...state.column, action.payload]
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
            const priorUpdateUp = state.cards.map(el => {
                if (el.id === action.payload.id) {
                    el.priority = state.priority[state.priority.indexOf(el.priority)
                    + action.payload.value];

                }
                return el;
            })
            return {...state, cards: priorUpdateUp}

        case 'PRIORITY_DOWN' :
            const priorUpdateDown = state.cards.map(el => {
                if (el.id === action.payload.id) {
                    el.priority = state.priority[state.priority.indexOf(el.priority)
                    - action.payload.value];
                }
                return el;
            })
            return {...state, cards: priorUpdateDown}

        default:
            return state
    }
}

export default kanban;
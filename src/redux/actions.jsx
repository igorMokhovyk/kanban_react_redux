import axios from 'axios'

export function cardDeleteById(id) {
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: `http://localhost:3000/todos/${id}`
        })
            .then(res => {
                dispatch(getCards())
            })
            .catch(err => console.log(err))
    }

}


export const getColumns = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/columns/')
            .then(res => {
                dispatch({
                    type: 'GET_COLUMNS',
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
    }
}

export const getPriority = () => {
    return (dispatch) => {
        axios.get(' http://localhost:3000/priority/')
            .then(res => {
                dispatch({
                    type: 'GET_PRIORITY',
                    payload: res.data
                })
            })
            .catch()
    }
}


export const getCards = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/todos/`)
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: res.data
                })
            })
            .catch(err => console.log(err, "Error"))
    }
}

export const addCard = (card) => {
    return (dispatch) => {
        axios.post(`http://localhost:3000/todos`, card)
            .then(res => {
                dispatch(getCards())
            })
            .catch(err => console.log(err))
    }
}


export const createColumn = (newColumn) => {
    return (dispatch) => {
    axios.post('http://localhost:3000/columns/', newColumn)
        .then(res => {
            dispatch (
                getColumns()
            )
        })
        .catch(err => console.log(err))
    }
}


export const deleteColumn = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/columns/${id}`)
            .then(res => {
                dispatch (
                    getColumns()
                )
            })
            .catch(err => console.log(err))
    }
}


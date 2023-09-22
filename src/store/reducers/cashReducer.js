const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

const initialState = {
    cash: 0
  }
  
export const cashReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case ADD_CASH:
        return {...state, cash: state.cash + 1}
      
      case GET_CASH: 
        return {...state, cash: state.cash - 1}
  
      default: 
        return state
    }
}

export const addCashAction = () => {
    return {
        type: ADD_CASH,
    }
}

export const getCashAction = () => {
    return {
        type: GET_CASH,
    }
}
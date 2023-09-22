export const ADD_USERS = 'ADD_USERS';
export const FETCH_USERS = 'FETCH_USERS';

export const REMOVE_USER = 'REMOVE_USER';

const initialState = {
    users: []
}
  
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case ADD_USERS:
        return {...state, users: action.payload};
      
      case REMOVE_USER: 
        return {...state, users: state.users.filter((it) => it.id !== action.payload)}
  
      default: 
        return state
    }
}

export const addUserAction = (payload) => {
    return {
        type: ADD_USERS,
        payload
    }
}

export const removeUserAction = (payload) => {
    return {
        type: REMOVE_USER,
        payload
    }
}

export const fetchUsersAction = () => {
    return {
        type: FETCH_USERS
    }
}
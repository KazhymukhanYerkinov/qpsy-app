const SET_USERS_LIST = 'SET_USERS_LIST';



let initialState = {
    users: [ {id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},{id: 14}]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return {
                ...state,
                users:  state.users.concat(action.users)
            }

        default:
            return state;
    }
}

export const setUsersList = (users) => ({ type: SET_USERS_LIST, users });

export default usersReducer;
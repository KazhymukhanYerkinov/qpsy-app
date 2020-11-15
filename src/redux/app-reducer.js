import { checkAuthThunk, loadUserThunk } from "./auth-reducer";

const SET_TOGGLE_SIDEBAR = 'SET_TOGGLE_SIDEBAR';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCESS';

let initialState = {
    openSidebar: false,
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOGGLE_SIDEBAR:
            return {
                ...state,
                openSidebar: !state.openSidebar
            }
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const setToggleSidebar = () => ({ type: SET_TOGGLE_SIDEBAR });

export const initSuccessThunk = () => (dispatch) => {

    let promise1 = dispatch(checkAuthThunk());
    let promise2 = dispatch(loadUserThunk());

    Promise.all([promise1, promise2]).then(() => {
        dispatch(initSuccess())

    })
}

export default appReducer;



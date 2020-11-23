import { tapeAPI } from "../api/api";

const SET_TAPES = 'SET_TAPES';
const SET_TAPES_FETCH = 'SET_TAPES_FETCH';


let initialState = {
    tapes: [],
    fetchTapes: false,
}

const tapeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAPES:
            return {
                ...state,
                tapes: action.tapes
            }
        case SET_TAPES_FETCH:
            return {
                ...state,
                fetchTapes: action.fetchTapes
            }

        default:
            return state;
    }
}

const setTapes = (tapes) => ({ type: SET_TAPES, tapes });
const setTapesFetch = (fetchTapes) => ({ type: SET_TAPES_FETCH, fetchTapes });

export const getTapesThunk = () => async (dispatch) => {
    dispatch(setTapesFetch(true));
    let data = await tapeAPI.getTapes();
    console.log(data);
    dispatch(setTapesFetch(false));
}

export default tapeReducer;
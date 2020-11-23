import { reset } from "redux-form";
import { chatAPI } from "../api/api";

const SET_USERS_LIST = 'SET_USERS_LIST';
const SET_USERS_MESSAGES = 'SET_USERS_MESSAGES';
const SET_CLIENT_NAME = 'SET_CLIENT_NAME';


let initialState = {
    users: [],
    messages: [],
    clientName: "",
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return {
                ...state,
                users:  action.users
            }
        case SET_USERS_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case SET_CLIENT_NAME:
            return {
                ...state,
                clientName: action.clientName
            }
        default:
            return state;
    }
}

const setUsersList = (users) => ({ type: SET_USERS_LIST, users });
const setUserMessages = (messages) => ({ type: SET_USERS_MESSAGES, messages });
const setClientName = (clientName) => ({ type: SET_CLIENT_NAME, clientName });



export const getChatsThunk = () => async (dispatch) => {

    try {
        let data = await chatAPI.getChats();
        dispatch(setUsersList(data.chats));
    } catch(err) {
        console.log(err)
    }
}

export const getUserMessagesThunk = (chatID) => async (dispatch) => {
    try {
        let data = await chatAPI.getUserMessages(chatID);
        dispatch(setClientName(data.client.name))
        dispatch(setUserMessages(data.messages))
    } catch(err) {
        console.log(err);
    }
}
export const sendMessageThunk = (clientID, text) => async (dispatch) => {
    try {
        await chatAPI.sendMessage(clientID, text);
        dispatch(getUserMessagesThunk(clientID))
        

    } catch (err) {

    }
}



export default usersReducer;
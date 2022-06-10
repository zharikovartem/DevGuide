import { Dispatch } from 'redux'
import { redmineAPI } from '../api/redmineApi'
// import { authAPI } from '../Api/authAPI'
import { BaseThunkType, InferActionsTypes } from './store'

export type CredentialsType = {
    login: string | null
    password: string | null
}

export type InitialStateType ={
    userLogin: string | null
    userPassword: string | null
}

let initialState:InitialStateType = {
    userLogin: null,
    userPassword: null,
}

type ActionsType = InferActionsTypes<typeof actions>

const redmineReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        
        case 'REDMINE/SET_CREDENIALS':
            console.log(action.credentials)
            return {
                    ...state,
                    userLogin: action.credentials.login,
                    userPassword: action.credentials.password,
            }

        default:
            return state;
    }
}

export const actions = {
    setCredentials: (credentials: CredentialsType) => ({type: 'REDMINE/SET_CREDENIALS', credentials} as const),
}

export const setCredentials = (credentials: CredentialsType): ThunkType => {
    return async (dispatch, getState) => {
        dispatch( actions.setCredentials(credentials) )
    }
}

export const checkCreds = (credentials: CredentialsType): ThunkType => {
    return async (dispatch) => {
        const response = await redmineAPI.Login();
    }
}

export default redmineReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
export type DispatchType = Dispatch<ActionsTypes>
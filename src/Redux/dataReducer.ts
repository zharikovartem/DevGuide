import { Dispatch } from 'redux'
// import { authAPI } from '../Api/authAPI'
import { BaseThunkType, InferActionsTypes } from './store'

export type InitialStateType ={
    data: any[]
}

let initialState:InitialStateType = {
    data: []
}

type ActionsType = InferActionsTypes<typeof actions>

const dataReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DATA/TEST':
            return {
                    ...state,
                    data: action.data
            }
        default:
            return state;
    }
}

export const actions = {
    setData: (data: any[]) => ({type: 'DATA/TEST', data} as const),
}

export const getData = (): ThunkType => {
    return async (dispatch, getState) => {
        const data = JSON.parse(localStorage.getItem('data'))
        dispatch( actions.setData(data) )
    }
}

export const setData = (data: any[]): ThunkType => {
    return async (dispatch, getState) => {
        dispatch( actions.setData(data) )
    }
}

export default dataReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
export type DispatchType = Dispatch<ActionsTypes>
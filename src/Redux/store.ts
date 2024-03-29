import {Action, applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import dataReducer from "./dataReducer"
import redmineReducer from "./redmineReducer"

let rootReducer = combineReducers({
    dataReducer: dataReducer,
    redmineReducer: redmineReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
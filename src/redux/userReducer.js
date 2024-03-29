import { testAPI } from './../api/api'

const SET_USER_LIST = "SET_USER_LIST"
const TEST_CONSTANT = 'TEST_CONSTANT'
const TEST_CONSTANT = 'TEST_CONSTANT'
const TEST_CONSTANT = 'TEST_CONSTANT'

let initialState = {
    reducerData: null,
}

const userReducer = (state = initialState, action) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case TEST_CONSTANT:
            console.log(action)
            return stateCopy
        default:
            return state
    }
}

export const setUserList = (userList) => ({ type: SET_USER_LIST, userList })
export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })
export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })
export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })

// get all items method: GET
export const getUserList = () => {
    return (dispatch) => {
        testAPI.getAllUser.then(response => {
            dispatch(setUserList(response));
        })
    }
}

export const newUser = (data) => {
}

export const editUser = (data) => {
}

export const deleteUser = (data) => {
}

export default userReducer

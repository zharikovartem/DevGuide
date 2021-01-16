import React from 'react';
import CodeLine from '../code/CodeLine';
import { Collapse, Button, message} from 'antd';
import FileContainer from './FileContainer';

const { Panel } = Collapse;

const StoreBody = () => {
    return (
        <div id="123">
            <CodeLine tab="0" value="import { createStore, combineReducers, applyMiddleware } from 'redux';" />
            <CodeLine tab="0" value="import userReducer from './userReducer';" />
            <CodeLine tab="0" value="import thunkMiddleware from 'redux-thunk';" />
            <CodeLine tab="0" value="import permissionReducer from './permissionsReducer';" />
            <CodeLine tab="0" value="import productReducer from './productReducer';" />
            <CodeLine tab="0" value="import toDoReducer from './toDoReducer';" />
            <br />
            <CodeLine tab="0" value="let redusers = combineReducers({" />
            <CodeLine tab="1" value="user: userReducer," />
            <CodeLine tab="1" value="permissions: permissionReducer," />
            <CodeLine tab="1" value="products: productReducer," />
            <CodeLine tab="1" value="toDo: toDoReducer," />
            <CodeLine tab="0" value="});" />
            <br />
            <CodeLine tab="0" value="let store = createStore(redusers, applyMiddleware(thunkMiddleware));" />
            <br />
            <CodeLine tab="0" value="export default store;" />
        </div>
    )
}
const StoreComponent = (props) => {
    return <FileContainer name="store.js" collapsed={props.collapsed} body={<StoreBody />}/>
}

export default StoreComponent;


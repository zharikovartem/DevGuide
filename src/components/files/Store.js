import React from 'react';
import CodeLine from '../code/CodeLine';
import { Collapse, Button, message} from 'antd';
import FileContainer from './FileContainer';

const { Panel } = Collapse;

const StoreBody = (props) => {
    console.log(props)
    return (
        <div id="123">
            <CodeLine tab="0" value="import { createStore, combineReducers, applyMiddleware } from 'redux';" />
            <CodeLine tab="0" value={'import '+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'Reducer from "./'+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'Reducer"'} />
            <CodeLine tab="0" value="import thunkMiddleware from 'redux-thunk';" />
            {/* <CodeLine tab="0" value="import permissionReducer from './permissionsReducer';" />
            <CodeLine tab="0" value="import productReducer from './productReducer';" />
            <CodeLine tab="0" value="import toDoReducer from './toDoReducer';" /> */}
            <br />
            <CodeLine tab="0" value="let redusers = combineReducers({" />
            <CodeLine tab="1" value={props.componentName[0].toLowerCase()+props.componentName.slice(1)+': '+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'Reducer,'} />
            {/* <CodeLine tab="1" value="permissions: permissionReducer," />
            <CodeLine tab="1" value="products: productReducer," />
            <CodeLine tab="1" value="toDo: toDoReducer," /> */}
            <CodeLine tab="0" value="});" />
            <br />
            <CodeLine tab="0" value="let store = createStore(redusers, applyMiddleware(thunkMiddleware));" />
            <br />
            <CodeLine tab="0" value="export default store;" />
        </div>
    )
}
const StoreComponent = (props) => {
    return <FileContainer name="store.js" collapsed={props.collapsed} body={<StoreBody componentName={props.componentName}/>}/>
}

export default StoreComponent;


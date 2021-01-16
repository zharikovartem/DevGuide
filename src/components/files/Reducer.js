import React from 'react';
import CodeLine from '../code/CodeLine';
import FileContainer from './FileContainer';


const ReducerBody = (props) => {
    console.log(props)
    return (
        <>
            <CodeLine tab="0" value="import {testAPI} from './../api/api'" />
            <br />
            {props.isCRUD ?
            <>
            <CodeLine tab="0" value={'const SET_'+props.componentName.toUpperCase()+'_LIST = "SET_'+props.componentName.toUpperCase()+'_LIST"'} />
            {/* <CodeLine tab="0" value="const TEST_CONSTANT = 'TEST_CONSTANT'" />
            <CodeLine tab="0" value="const TEST_CONSTANT = 'TEST_CONSTANT'" />
            <CodeLine tab="0" value="const TEST_CONSTANT = 'TEST_CONSTANT'" /> */}
            </>
            :
            <CodeLine tab="0" value="const TEST_CONSTANT = 'TEST_CONSTANT'" />
            }
            <br />
            <CodeLine tab="0" value="let initialState = {" />
            <CodeLine tab="1" value={props.componentName[0].toLowerCase()+props.componentName.slice(1)+'List: null,'} />
            <CodeLine tab="0" value="}" />
            <br />
            <CodeLine tab="0" value={'const '+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'Reducer = (state = initialState, action) => {'} />
            <CodeLine tab="1" value="let stateCopy= { ...state }" />
            <CodeLine tab="1" value="switch (action.type) {" />
            <CodeLine tab="2" value={'case SET_'+props.componentName.toUpperCase()+'_LIST:'} />
            <CodeLine tab="3" value={'stateCopy.'+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'List = action.'+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'List'} />
            <CodeLine tab="3" value="return stateCopy" />
            <br/>
            <CodeLine tab="2" value="default:" />
            <CodeLine tab="3" value="return state" />
            <CodeLine tab="1" value="}" />
            <CodeLine tab="0" value="}" />
            <br />
            {props.isCRUD ?
            <>
            <CodeLine tab="0" value={'export const set' + props.componentName + 'List = ('+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'List) => ({ type: SET_'+props.componentName.toUpperCase()+'_LIST, '+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'List })'} />
            <CodeLine tab="0" value="export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })" />
            <CodeLine tab="0" value="export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })" />
            <CodeLine tab="0" value="export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })" />
            </>
            :
            <CodeLine tab="0" value="export const setTest = (toDoData) => ({ type: TEST_CONSTANT, testData })" />
            }
            <br />

            {props.isCRUD ?
                <>
                    <CodeLine tab="0" value="// get all items method: GET" />
                    <CodeLine tab="0" value={'export const get' + props.componentName + 'List = () => {'} />
                    <CodeLine tab="1" value="return (dispatch) => {" />
                    <CodeLine tab="2" value={'testAPI.getAll' + props.componentName + '.then(response => {'} />
                    <CodeLine tab="3" value={'dispatch(set' + props.componentName + 'List(response));'} />
                    <CodeLine tab="2" value="})" />
                    <CodeLine tab="1" value="}" />
                    <CodeLine tab="0" value="}" />
                    <br />
                    <CodeLine tab="0" value={'export const new' + props.componentName + ' = (data) => {'} />
                    <CodeLine tab="0" value="}" />
                    <br />
                    <CodeLine tab="0" value={'export const edit' + props.componentName + ' = (data) => {'} />
                    <CodeLine tab="0" value="}" />
                    <br />
                    <CodeLine tab="0" value={'export const delete' + props.componentName + ' = (data) => {'} />
                    <CodeLine tab="0" value="}" />
                    <br />
                </>
                :
                <>
                    <CodeLine tab="0" value="export const getTest = (data) => {" />
                    <CodeLine tab="1" value="return (dispatch) => {" />
                    <CodeLine tab="2" value="testAPI.testEndpoint(data).then(response => {" />
                    <CodeLine tab="3" value="dispatch(setTest(response));" />
                    <CodeLine tab="2" value="})" />
                    <CodeLine tab="1" value="}" />
                    <CodeLine tab="0" value="}" />
                </>
            }
            <CodeLine tab="0" value={'export default '+props.componentName[0].toLowerCase()+props.componentName.slice(1)+'Reducer'} />
        </>
    );
}


const ReducerComponent = (props) => {
    console.log('reducerComponentProps', props)
    return (<FileContainer name="reducer.js" collapsed={props.collapsed} body={<ReducerBody isCRUD={props.isCRUD} componentName={props.componentName} />} />)
}

export default ReducerComponent;







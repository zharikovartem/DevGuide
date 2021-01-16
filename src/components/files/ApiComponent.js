import React from 'react';
import CodeLine from '../code/CodeLine';
import { Collapse, Button, message} from 'antd';
import FileContainer from './FileContainer';

const { Panel } = Collapse;

const ApiBody = () => {
    return (
        <div>
            <CodeLine tab="0" value="const baseURL = 'http://127.0.0.1:8000/api/'" />
            <br />
            <CodeLine tab="0" value="const PostOptions = {" />
            <CodeLine tab="1" value="method: 'POST'," />
            <CodeLine tab="1" value="headers: { 'Content-Type': 'application/json' }," />
            <CodeLine tab="1" value="body: JSON.stringify(state)" />
            <CodeLine tab="0" value="}" />
            <br />
            <CodeLine tab="0" value="const GetOptions = {" />
            <CodeLine tab="1" value="method: 'GET'," />
            <CodeLine tab="1" value="headers: { 'Content-Type': 'application/json' }," />
            <CodeLine tab="1" value="body: JSON.stringify(state)" />
            <CodeLine tab="0" value="}" />
            <br />
            <CodeLine tab="0" value="export const testAPI = {" />
            <CodeLine tab="1" value="getTest = (data) => {" />
            
            <CodeLine tab="2" value="fetch(baseURL, PostOptions)" />
            <CodeLine tab="3" value=".then((response) => {" />
            <CodeLine tab="4" value="//console.log(response.json());" />
            <CodeLine tab="4" value="return response.json();" />
            <CodeLine tab="3" value="})" />
            <CodeLine tab="3" value=".then((data) => {" />
            <CodeLine tab="4" value="//console.log(data);" />
            <CodeLine tab="3" value="})" />
            <CodeLine tab="2" value="}" />
            <CodeLine tab="0" value="}" />
            
        </div>
    )
}
const ApiComponent = (props) => {
    return <FileContainer name="api.js" collapsed={props.collapsed} body={<ApiBody />}/>
}

export default ApiComponent;


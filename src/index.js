import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

ReactDOM.render(
  // <React.StrictMode>
    <div className="container-fluid">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Guide" key="1">
          <App />
        </TabPane>
        <TabPane tab="Dev" key="2">

        </TabPane>
      </Tabs>
      
    </div>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

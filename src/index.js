import 'antd/dist/antd.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Iconstyle } from './assets/icon/iconfont';
import { Globalstyle } from './style/global.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.info(root)
root.render(
  <HashRouter>
    <React.StrictMode>
      <Fragment>
        {/* 全局样式注册到界面中 */}
        <Iconstyle></Iconstyle>
        <Globalstyle></Globalstyle>
        <App />
      </Fragment>
    </React.StrictMode>
  </HashRouter>
);



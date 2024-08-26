import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.jsx";
import App from "./App.tsx";

/**
 * 入口文件
 */


//这里就是获取到APP组件，然后ReactDOM.render会把APP组件编译为html，最后插入到index.html文件里id为app的节点里面去
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
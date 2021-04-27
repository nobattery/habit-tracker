import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
{
  /* yarn add @fortawesome/fontawesome-free */
}

{
  /*StrictMode 이용시 개발 중 에러 메세지가 바로 표시된다.*/
}
{
  /*simpleHabit 로 변경시 ReactHook예제로 연결된다.*/
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

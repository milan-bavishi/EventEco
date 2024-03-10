import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import rootReducer from "./reducer/reducer";
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({             //added "rootReducer" into store variable and rootReducer is combination of all reducer which is made in slices;
  reducer:rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <App />
      <ToastContainer
        theme="dark"
      />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

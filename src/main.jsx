import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";
//import './08-Reducer/intro-reducer'

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <HooksApp /> */}
      {/* <CounterApp/> */}
      {/* <CounterWithCustomHook/>  */}
      {/* <SimpleForm/> */}
      {/* <FormWithCustomHook/> */}
      {/* <MultipleCustomHooks/> */}
      {/* <FocusScreen/> */}
      {/* <Layout/> */}
      {/* <Memorize/> */}
      {/* <MemoHook/> */}
      {/* <CallbackHook/> */}
      {/* <Padre/> */}
      {/* <TodoApp/> */}
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
);

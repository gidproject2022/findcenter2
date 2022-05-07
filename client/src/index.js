import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EventStore from "./store/EventStore";
import ProjectStore from "./store/ProjectStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        project: new ProjectStore(),
        event: new EventStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);

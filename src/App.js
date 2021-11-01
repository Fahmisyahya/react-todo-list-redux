import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <React.Fragment>
      <header>
        <hgroup>
          <h1>Todo List</h1>
        </hgroup>
      </header>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </React.Fragment>
  );
}

export default App;

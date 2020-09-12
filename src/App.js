import React from "react";
import Footer from "./Component/Footer/Footer";
import AddTodo from "./Container/AddTodo/AddTodo";
import VisibleTodoList from "./Container/VisibleTodoList/VisibleTodoList";

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;

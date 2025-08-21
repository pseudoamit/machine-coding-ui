import React, { useEffect, useState } from "react";
import { todoMock } from "./mock/todo.mock";
import "./Todo.css";

const Todo = () => {
  const [todoList, setTodoList] = useState(todoMock);
  const [todo, setTodo] = useState("");

  //   useEffect(() => {
  //     const modifiedTodos = todoList?.map((item) => {
  //       return {
  //         ...item,
  //         id: Date.now(),
  //       };
  //     });
  //     setTodoList(modifiedTodos);
  //   }, []);

  const removeHandler = (clickedItemId) => {
    let modifiedTodo = todoList?.filter((item) => item?.id !== clickedItemId);
    setTodoList(modifiedTodo);
  };

  const todoChangeHandler = (e) => {
    if (e?.target?.value !== "") {
      setTodo(e?.target?.value);
    }
  };

  const todoAddHandler = (e) => {
    const trimmed = todo.trim();
    if (!trimmed) return;
    const item = { id: todoList?.length + 1, title: trimmed };
    setTodoList([...todoList, item]);
    setTodo("");
  };

  return (
    <>
      <div className="todo-wrapper">
        <div className="todo-add-wrapper">
          <label htmlFor="todo-input">Add a todo</label>
          <input value={todo} onChange={todoChangeHandler} />
          <button
            className="todo-add-btn"
            onClick={todoAddHandler}
            aria-label="add todo"
          >
            Submit
          </button>
        </div>
        <div>
          {todoList && todoList.length > 0 && (
            <ul className="todo-list-wrapper">
              {todoList.map((item) => (
                <li className="todo-list">
                  <span>{item?.title}</span>
                  <button
                    className="todo-list-btn"
                    onClick={() => removeHandler(item?.id)}
                    aria-label={`Delete ${item.title}`}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;

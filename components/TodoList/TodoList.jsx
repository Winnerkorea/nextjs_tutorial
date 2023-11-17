import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ todo }) => {
  return (
    <div>
      <div>Todo List</div>
      <input type="text" placeholder="검색어를 입력하세요." />
      <div>
        {todo.map((itDoto) => {
          return <TodoItem key={itDoto.id} {...itDoto} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;

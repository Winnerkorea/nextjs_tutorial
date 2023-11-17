"use client";
import { ToDoData } from "@/Mock";
import Header from "@/components/Header/Header";
import TodoEditor from "@/components/TodoEditor/TodoEditor";
import TodoList from "@/components/TodoList/TodoList";
import { useState, useRef } from "react";

export default function Home() {
  let getDateLength = ToDoData.length;

  const isRef = useRef(getDateLength);
  const [todo, setTodo] = useState(ToDoData);

  const onCreate = (content) => {
    const newItem = {
      id: 0,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    isRef.current += 1;
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <TodoEditor onCreate={onCreate} />
      </div>
      <div>
        <TodoList todo={todo} />
      </div>
    </div>
  );
}

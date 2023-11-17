import React from "react";

const TodoItem = ({ id, content, isDone, createdDate }) => {
  return (
    <div>
      <div>
        <input type="checkbox" checked={isDone} />
      </div>
      <div>{content}</div>
      <div>{new Date(createdDate).toLocaleDateString()}</div>
      <div>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;

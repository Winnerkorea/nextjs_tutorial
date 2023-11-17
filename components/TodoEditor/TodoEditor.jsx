import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    // 빈 상태에 값이 있는 경우 포커스
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    // Content 초기화
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div>
      <div>새로운 TO 작성하기</div>
      <input
        ref={inputRef}
        type="text"
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        value={content}
      />
      <button onSubmit={onSubmit}>추가</button>
    </div>
  );
};

export default TodoEditor;

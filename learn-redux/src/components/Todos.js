// TodoItem, TodoList, Todos 총 3가지 컴포넌트 작성
// 컴포넌트의 리렌더링 성능을 최적화하기 위함

import React, { useState } from 'react';

// 컴포넌트 최적화를 위해 React.memo 사용
// 메모이제이션?
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo 사용
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

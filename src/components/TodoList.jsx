// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css'; // Импорт CSS-модуля

const TodoList = ({ items, onDelete, onEdit }) => {
  return (
    <div className={styles.todoList}>
      <h2 className={styles.title}>Список дел</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            task={item.text}
            onDelete={() => onDelete(item.id)}
            onEdit={() => onEdit(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

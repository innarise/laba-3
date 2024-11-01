// src/components/TodoItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css'; // Импорт CSS-модуля

const TodoItem = ({ task, onDelete, onEdit }) => {
  return (
    <li className={styles.item}>
      <span>{task}</span>
      <div>
        <button onClick={onEdit} className={styles.editButton}>Редактировать</button>
        <button onClick={onDelete} className={styles.deleteButton}>Удалить</button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoItem;

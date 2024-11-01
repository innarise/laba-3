import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, onSave, text, setText }) => {
  if (!show) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Редактировать задачу</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={styles.buttonContainer}>
          <button onClick={onSave}>Сохранить</button>
          <button onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

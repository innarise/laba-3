// src/components/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, onSave, text, setText }) => {
  if (!show) return null; // Не отображаем модальное окно, если show = false

  // Контент модального окна
  const modalContent = (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Редактировать задачу</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <div className={styles.buttonContainer}>
          <button onClick={onSave} className={styles.saveButton}>Сохранить</button>
          <button onClick={onClose} className={styles.cancelButton}>Отмена</button>
        </div>
      </div>
    </div>
  );

  // Рендерим через портал
  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;

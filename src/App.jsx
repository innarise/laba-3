import React, { useState, useCallback } from 'react';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = useCallback(() => {
    if (text.trim()) {
      const newItem = { id: Date.now(), text };
      setItems((prevItems) => [...prevItems, newItem]);
      setText('');
    }
  }, [text]);

  const deleteItem = useCallback((id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const openEditModal = useCallback((item) => {
    setEditingItem(item);
    setText(item.text);
    setModalOpen(true);
  }, []);

  const saveEdit = useCallback(() => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem.id ? { ...item, text } : item
      )
    );
    setModalOpen(false);
    setEditingItem(null);
    setText('');
  }, [editingItem, text]);

  return (
    <div>
      <h1>Мои домашние дела</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавить новую задачу"
      />
      <button onClick={addItem}>Добавить</button>
      <TodoList items={items} onDelete={deleteItem} onEdit={openEditModal} />
      <Modal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={saveEdit}
        text={text}
        setText={setText}
      />
    </div>
  );
}

export default App;

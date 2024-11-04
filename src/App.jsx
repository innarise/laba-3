// src/App.jsx
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import useDebounce from './hooks/useDebounce'; // Импортируем хук
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [search, setSearch] = useState(''); // Состояние для текста поиска

  const debouncedSearch = useDebounce(search, 500); // Задержка дебаунса в 500мс

  const addItem = () => {
    if (text.trim()) {
      const newItem = { id: Date.now(), text };
      setItems((prevItems) => [...prevItems, newItem]);
      setText('');
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setText(item.text);
    setModalOpen(true);
  };

  const saveEdit = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem.id ? { ...item, text } : item
      )
    );
    setModalOpen(false);
    setEditingItem(null);
    setText('');
  };

  // Фильтруем задачи на основе текста поиска с дебаунсом
  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
      <h1>Мои домашние дела</h1>
      
      <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Добавить новую задачу"
        />
        <button onClick={addItem}>Добавить</button>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск задач"
        style={{ marginTop: '20px', padding: '8px', width: '100%', borderRadius: '8px' }}
      />

      <TodoList items={filteredItems} onDelete={deleteItem} onEdit={openEditModal} />
      
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

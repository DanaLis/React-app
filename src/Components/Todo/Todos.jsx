import TodoList from './TodoList';
import styles from '../../assets/css/Todos.module.css';
import Button from './Button';
import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';

function Todos() {

  /*const defaultTodos = [
    {
      id: nanoid(),
      title: 'Задача 1',
      completed: false,
    },
    {
      id: nanoid(),
      title: 'Задача 2',
      completed: false,
    },
    {
      id: nanoid(),
      title: 'Задача 3',
      completed: false,
    },
    {
      id: nanoid(),
      title: 'Задача 4',
      completed: true,
    },
  ];*/

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos(
      [
        ...todos,
        {
          id: nanoid(),
          title: 'Новая задача',
          completed: false,
        }
      ]
    );
  }

  const deleteTodos = (id) => {
    if (!id)
      return;
    setTodos(
      todos.filter(current => current.id !== id)
    );
  }

  const toggleTodos = (id) => {
    if (!id)
      return;
    setTodos( prev =>
      prev.map(current => {
        if (current.id !== id)
          return current;
        
        return {
          ...current,
          completed: !current.completed
        }
      })
    );
  }

  useEffect(() => {
    if (todos.length === 0)
      return;
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    const json = localStorage.getItem('todos');
    if (!json)
      return;
  
    try {
      const localTodos = JSON.parse(json);
      setTodos(localTodos);
    } 
    catch {
      console.error('Ошибка при парсе JSON')
    }
  }, [])

  return (
    <div className={styles.todos}>
      <div>
        <div className={styles.btnContainer}>
          <Button text = 'Добавить' onClick = {addTodo}/>
        </div>
        <TodoList items={todos} onItemClick={toggleTodos} onItemDoubleClick={deleteTodos}/>
      </div>  
  </div>
  );
}

export default Todos;
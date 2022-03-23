import TodoList from './TodoList';
import styles from '../../assets/css/Todos.module.css'

function Todos() {

  const defaultTodos = [
    {
      id: 'TodosList1',
      title: 'Задача 1',
      completed: false,
    },
    {
      id: 'TodosList2',
      title: 'Задача 2',
      completed: false,
    },
    {
      id: 'TodosList3',
      title: 'Задача 3',
      completed: false,
    },
    {
      id: 'TodosList4',
      title: 'Задача 4',
      completed: true,
    },
  ];

  return (
  <div className={styles.todos}>
    <TodoList items={defaultTodos} />
  </div>
  );
}

export default Todos;
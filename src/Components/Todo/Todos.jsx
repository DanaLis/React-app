import TodoList from './TodoList';
import styles from '../../assets/css/Todos.module.css';
import Button from './Button';

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

  const addTodo = () => {
    alert('Пока ничего не добавлено');
  }

  return (
    <div className={styles.todos}>
      <div>
        <div className={styles.btnContainer}>
          <Button text = 'Добавить' onClick = {addTodo}/>
        </div>
        <TodoList items={defaultTodos} />
      </div>  
  </div>
  );
}

export default Todos;
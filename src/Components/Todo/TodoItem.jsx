import styles from '../../assets/css/TodoItem.module.css';
import cn from 'classnames';

function TodoItem({ data }) {
  const { title, completed } = data;
  return (
    <div className={cn(styles.item, {[styles.completed]: completed})}>
      <div>{title}</div>
    </div>
  );
}

export default TodoItem
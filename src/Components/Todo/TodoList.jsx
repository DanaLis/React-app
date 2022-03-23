import TodoItem from './TodoItem';
import styles from '../../assets/css/TodoList.module.css';
import PropTypes from 'prop-types';

function TodoList({items, onItemClick, onItemDoubleClick}) {
  return <div className={styles.list}>
    {items.map(item => (
      <TodoItem 
        key={item.id} 
        data={item}
        onClick={() => onItemClick(item.id)}
        onDoubleClick={() => onItemDoubleClick(item.id)} 
      />)
    )}
  </div>;
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,
  onItemDoubleClick: PropTypes.func,
}

TodoList.defaultProps = {
  items: [],
  onItemClick: () => {
  },
  onItemDoubleClick: () => {
  },
}


export default TodoList;
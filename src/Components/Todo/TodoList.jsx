import TodoItem from './TodoItem';
import styles from '../../assets/css/TodoList.module.css';
import PropTypes from 'prop-types';

function TodoList({items}) {
  return <div className={styles.list}>{items.map(item => <TodoItem key={item.id} data={item} />)}</div>;
}

TodoList.propTypes = {
items: PropTypes.arrayOf(PropTypes.object),
}

TodoList.defaultProps = {
items: []
}

export default TodoList;
import styles from '../../assets/css/TodoItem.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types'

function TodoItem({ data, onClick, onDoubleClick }) {
  const { title, completed } = data;
  return (
    <div 
      className={cn(styles.item, {[styles.completed]: completed})}
      onClick={onClick}
      onDoubleClick={onDoubleClick}>
      <div>{title}</div>
    </div>
  );
}

TodoItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
}


TodoItem.defaultProps = {
  data: {},
  onClick: () => {
  },
  onDoubleClick: () => {
  },
}

export default TodoItem
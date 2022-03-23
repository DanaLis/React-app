import PropTypes from 'prop-types';
import styles from '../../assets/sass/Button.module.sass';

function Button({text, onClick}) {
  return <div className = {styles.button} onClick={onClick}>{text}</div>
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: '',
  onClick: () => {
  },
}

export default Button;
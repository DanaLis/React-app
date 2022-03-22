import PropTypes from 'prop-types';

function Welcome( {name} ) {
  return <h1>Welcome, {name}</h1>
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
}

Welcome.defaultProps = {
  name: 'Name',
}

export default Welcome;
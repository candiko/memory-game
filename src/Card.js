import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  this.propTypes = {
    showing: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  // Style object for conditionally adding style to component
  let style = {};
  if (props.showing) {
    style.backgroundColor = props.backgroundColor;
  }

  return (
    <div
      className="card"
      style={style}
      onClick={props.onClick} >
    </div>
  );
}

export default Card;
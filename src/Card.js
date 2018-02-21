import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  this.propTypes = {
    showing: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  // Deconstructing this.props obj
  const {cardId, showing, backgroundColor, onClick} = props;

  // Style object for conditionally adding style to component
  let style = {};
  if (showing) {
    style.backgroundColor = backgroundColor;
  }

  return (
    <div
      className="card"
      style={style}
      onClick={() => onClick(cardId)} >
    </div>
  );
}

export default Card;
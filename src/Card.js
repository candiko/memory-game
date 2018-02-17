import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  static defaultProps = {
    colors: ['pink'],
  }

  render() {
    return (
      <div className="card" style={{backgroundColor: this.props.colors}} > {this.props.name} </div>
    );
  }
}

export default Card;
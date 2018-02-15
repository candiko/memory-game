import React, {Component} from 'react';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const cards = Array(16).fill(null);
    return (
      cards.map((card, i) => <div key={i}><Card /></div>)
    );
  }
}

export default CardList;
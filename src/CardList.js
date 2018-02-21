import React, {Component} from 'react';
import Card from './Card';
import './CardList.css';

const CardState = {
  hiding: 0,
  showing: 1,
  matching: 2,
}

// {id: 0, cardState: CardState.hiding, bacgroundColor: ''}

class CardList extends Component {
  constructor(props) {
    super(props);

    // Number of cards in the game
    const numOfCards = 32;
    // Make an empty array for card objetcs as many as number of cards
    let cards = Array(numOfCards);
    // Choose colors for cards
    const colors = this.colorForCards(numOfCards);
    // Create & add index, cardState and backgroundColor object properties
    // to each card obj in cards arr
    for (let cardId = 0; cardId < cards.length; cardId++) {
      cards[cardId] = {
        id: cardId,
        cardState: CardState.hiding,
        backgroundColor: colors[cardId]
      };
    }

    this.state = {
      cards: cards,
    }
  }

  // Creating random colors in hexadecimal format
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Fisher - Yates Shuffle Algorithm
  shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

  return array;
}

  // Create an array of colors according to card number
  colorForCards(cardNumber) {
    const colors = [];
    const colorNumber = cardNumber / 2;
    for (let i = 0; i < colorNumber; i++) {
      let color = this.getRandomColor();
      let colorPair = [color, color];
      colorPair.map((color) => colors.push(color));
    }
    this.shuffle(colors);
    return colors;
  }

  render() {
    const cards = this.state.cards.map((card) => (
      <Card
        key={card.id}
        showing={true}
        backgroundColor={card.backgroundColor}
        onClick={() => console.log('Clicked.')} />
    ));
    return (
        <div className="container">{cards}</div>
    );
  }
}

export default CardList;
import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Start game handler
  handleClick() {
    const newColors = this.colorForCards(16);
    this.setState({ colors: newColors });
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
    const cards = Array(16).fill(null);
    return (
      cards.map((card, i) => (
        <div key={i}>
          <Card colors={this.state.colors[i]} />
          <button onClick={this.handleClick}>Start Game</button>
        </div>
      ))
    );
  }
}

export default CardList;
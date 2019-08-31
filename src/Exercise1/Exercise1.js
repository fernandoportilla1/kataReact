import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return (
      <div className="container">
        {this.renderAllLines(alphabet)}
      </div>
    );
  }

  rotateStringNspaces(alphabet, spaces) {
    const sufix = alphabet.substring(0, spaces);
    const prefix = alphabet.substring(spaces, alphabet.length);
    return prefix + sufix;
  }

  renderAllLines(alphabet) {
    const alphabetArray = alphabet.split('');
    return alphabetArray.map((letter, index) => {
      const line = this.rotateStringNspaces(alphabet, index + 1);
      const lineToRender = line.startsWith('a') ? null : line;
      if (!lineToRender) {
        return null;
      }
      return <div key={letter + index}>{index + 1 + ': ' + lineToRender}</div>;
    });
  }
}

export default Exercise1;

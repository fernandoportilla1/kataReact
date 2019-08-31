import React, {Component} from 'react';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
class Exercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', message: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {message} = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <div>
          Mensaje original: {message}
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const {value} = this.state;
    const params = value.split(':');
    const rowNumber = Number(params[0]);
    const inputString = params[1].split('');
    const wordIndexes = [];
    const modifiedAlphabet = this.rotateStringNspaces(ALPHABET, rowNumber);
    inputString.forEach((element) => {
      const index = modifiedAlphabet.indexOf(element);
      if (index >= 0) {
        wordIndexes.push(modifiedAlphabet.indexOf(element));
      }
    });

    let originalMessage = '';

    for (let j = 0; j < wordIndexes.length; j += 1) {
      originalMessage += ALPHABET[wordIndexes[j]];
    }
    event.preventDefault();
    this.setState({message: originalMessage});
    return originalMessage;
  }

  rotateStringNspaces(alphabet, spaces) {
    const sufix = alphabet.substring(0, spaces);
    const prefix = alphabet.substring(spaces, alphabet.length);
    return prefix + sufix;
  }
}

export default Exercise2;

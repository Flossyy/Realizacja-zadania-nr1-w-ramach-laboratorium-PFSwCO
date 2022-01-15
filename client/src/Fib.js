import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
    tablica: [],
    display: false
  };


  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current')
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all')
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/values', { index: this.state.index, });
    this.setState({ index: '' });
    event.stopPropagation();
    this.fetchValues();
    this.fetchIndexes();

  };

  renderValues() {
    // eslint-disable-next-line
    this.state.tablica = [];
    // eslint-disable-next-line
    this.state.seenIndexes.map((rank, i, row) => {
      if (i + 11 > row.length) {
        this.state.tablica.push(rank)
      }
    })

    const entries = [];
    for (const key in this.state.tablica) {
      entries.push(
        <div key={this.state.tablica[key].number}>
          {this.state.tablica[key].number} wartość ciagu fibonacciego: {this.state.values[this.state.tablica[key].number]}
        </div>
      );
    }
    return entries;
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Podaj wartość:</label>
          <input value={this.state.index} onChange={(event) => this.setState({ index: event.target.value })} />
          <label>{this.state.value}</label>
          <button>Wyślij</button>
        </form><p />
        <button onClick={() => this.setState({ display: true })}>Historia</button>
        {this.state.display && <h3>Ostatnie 10 obliczonych wartości:</h3>}
        {this.state.display && this.renderValues()}
      </div >
    );
  }
}

export default Fib;

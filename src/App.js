import React, { Component } from 'react';
import './App.css';
import DepthChart from './components/DepthChart'
import PriceTable from './components/PriceTable'

class App extends Component {
  constructor() {
    super()

    this.state = {
      askData: [],
      bidData: []
    }
  }

  async componentDidMount() {
    let response = await fetch('https://cryptobooker-server.herokuapp.com/orderbook')
    let json = await response.json()

    this.setState({
      bidData: json.bids,
      askData: json.asks
    })
  }

  render() {
    return (
      <div className="App">
        <p>
          Cryptobooker
        </p>
        <div className='depth-chart'>
          <DepthChart bidData={this.state.bidData} askData={this.state.askData} />
          <span >
            Depth Chart (ETH/BTC)
          </span>
        </div>
        <div className='row'>
          <PriceTable header='Bid' data={this.state.bidData} />
          <PriceTable header='Ask' data={this.state.askData} />
        </div>
      </div>
    )
  }
}


export default App;

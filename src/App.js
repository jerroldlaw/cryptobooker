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

  getMinAsk(data, exchange) {
    let min = Number.MAX_VALUE

    data.forEach((quote) => {
      if (quote.exchange === exchange) {
        min = Math.min(min, quote.price)
      }
    })

    return(min)
  }

  getMaxBid(data, exchange) {
    let max = -Number.MAX_VALUE

    data.forEach((quote) => {
      if (quote.exchange === exchange) {
        max = Math.max(max, quote.price)
      }
    })

    return max
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
          <PriceTable minAsk={this.getMinAsk(this.state.askData, 'bittrex')} header='Bid' data={this.state.bidData} />
          <PriceTable maxBid={this.getMaxBid(this.state.bidData, 'kraken')} header='Ask' data={this.state.askData} />
        </div>
      </div>
    )
  }
}


export default App;

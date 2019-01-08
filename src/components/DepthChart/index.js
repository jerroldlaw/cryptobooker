import React, { Component } from 'react'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area } from 'recharts';
import './index.css';

export default class DepthChart extends Component {
  sortDescQty(arr) {
    let compare = (a,b) => {
      if (Number(a.qty) > Number(b.qty))
        return -1;
      if (Number(a.qty) < Number(b.qty))
        return 1;
      return 0;
    }
    return arr.sort(compare)
  }

  sortAscQty(arr) {
    let compare = (a,b) => {
      if (Number(a.qty) < Number(b.qty))
        return -1;
      if (Number(a.qty) > Number(b.qty))
        return 1;
      return 0;
    }
    return arr.sort(compare)
  }

  combineArr(bidArr, askArr){
    if (!bidArr || !askArr) {
      return
    }

    askArr = this.sortAscQty(askArr)
    bidArr = this.sortDescQty(bidArr)
    let depthArr = [...bidArr]

    askArr.forEach(value => {
      depthArr.push({price: value.price, bidQty: value.qty})
    })

    return depthArr
  }

  render() {
    return (
      <div className="depth">
        <div className="depth-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={1600} height={400} data={this.combineArr(this.props.bidData, this.props.askData)}>
              <XAxis dataKey="price" />
              <YAxis scale="log" domain={['auto', 'auto']} />
              <Area type="monotone" dataKey="qty" barSize={30} fill="green" />
              <Area type="monotone" dataKey="bidQty" barSize={30} fill="red" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class PriceTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [{
        Header: `${this.props.header} Price`,
        accessor: 'price',
        filterMethod: (filter, row) => {
          return (row[filter.id].toLowerCase()).includes(filter.value.toLowerCase());
        }
      },
      {
        Header: `${this.props.header} Quantity`,
        accessor: 'qty',
        filterMethod: (filter, row) => {
          return row[filter.id] <= filter.value
        }
      },
      {
        Header: `Exchange`,
        Cell: (data) => {
          if (data.row.exchange === 'bittrex'){
            return <div><img alt='bittrex' height={25} src={'https://i.imgur.com/XxGvufr.jpg'}/></div>
          }
          else if (data.row.exchange === 'kraken') {
            return <div><img alt='kraken' height={25} src={'https://i.imgur.com/TDM5BJu.png'}/></div>
          }
          else {
            return 'unknown exchange'
          }
        },
        accessor: 'exchange'
      }],
      filtered: [],
      filterAll: '',
    }
    this.filterAll = this.filterAll.bind(this);
  }

  onFilteredChange(filtered) {
    if (filtered.length > 1 && this.state.filterAll.length) {
      const filterAll = '';
      this.setState({ filtered: filtered.filter((item) => item.id !== 'all'), filterAll })
    }
    else
      this.setState({ filtered });
  }

  filterAll(e) {
    const { value } = e.target;
    const filterAll = value;
    const filtered = [{ id: 'all', value: filterAll }];
    // NOTE: this completely clears any COLUMN filters
    this.setState({ filterAll, filtered });
  }

  render() {
    return (
      <ReactTable
        className="orderbook-table"
        filtered={this.state.filtered}
        ref={r => this.reactTable = r}
        onFilteredChange={this.onFilteredChange.bind(this)}
        data={this.props.data}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={this.state.columns}
      />
    )
  }
}

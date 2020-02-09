import React from 'react';
import './App.css';

import * as Data from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iphones: [],
      searchTerm: '',
      isSearching: false
    }
  }

  doSearch = () => {
    const { searchTerm } = this.state
    this.setState(Data.getIphones(searchTerm))
  }

  render() {
    const { iphones, searchTerm } = this.state
    return (
      <div className="page">
        <div className="header">
          <div className="logo"></div>
          <h1>ACME inc</h1>
        </div>
        <div className="content">
          <input
            placeholder="search"
            value={ searchTerm }
            onChange={(event) => {
              this.setState({
                searchTerm: event.target.value,
              })
            }}
          />
          <button type="button">Search</button>
          {iphones.length
          ? (
            <div>got {iphones.length} iphones</div> 
          )
          : <div id="results">Do a search to find iphones</div>
          }
        </div>
        <div className="footer">
          <p>&copy; 2018 Fake Company</p>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

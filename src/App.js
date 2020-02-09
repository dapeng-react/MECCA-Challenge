import React from 'react'
import Iphone from './Iphone'
import NotFound from './NotFound'
import Logo from './Logo'
import './App.css'

import * as Data from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iphones: [],
      searchTerm: '',
      isSearching: false,
      // the view for the search results
      // at the beginning, it has the default value below
      resultDisplay: <div id="results">Do a search to find iPhones</div>,
    }
  }

  doSearch = async () => {
    const { searchTerm } = this.state
    // wait for result
    const iphones = await Data.getIphones(searchTerm)
    // get a new view whenever doing a new search
    const resultDisplay = this.updateDisplay(iphones);
    this.setState({
      iphones,
      resultDisplay,
    })
  }

  // this function returns a element based on the number of search results
  updateDisplay = (iphones) => {
    let result;
    if (iphones.length) {
      result = (
        <>
          <div id="results">Got {iphones.length} iPhones</div>
          <div className="result-list">
            <div className="list iphone">
              <span>ID</span>
              <span>Name</span>
              <span>Color</span>
              <span>Capacity</span>
              <span>Price</span>
            </div>
            { iphones.map((iphone) => <Iphone key={iphone.id} iphone={iphone} />)}
          </div>
        </>
      )
    } else {
      result = <NotFound />
    }
    return result
  }

  render() {
    const { resultDisplay, searchTerm } = this.state
    return (
      <div className="page">
        <div className="header">
          <div className="logo">
            <Logo />
          </div>
          <h1>ACME inc</h1>
        </div>
        <div className="content">
          <div className="search-panel">
            <input
              placeholder="search"
              value={ searchTerm }
              onChange={(event) => {
                this.setState({
                  searchTerm: event.target.value,
                })
              }}
            />
            <button
              type="button"
              onClick={() => {
                this.doSearch()
              }}
            >
              Search
            </button>
          </div>
          { resultDisplay }
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

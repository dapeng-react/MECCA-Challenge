import React from 'react'
import Iphone from './Iphone'
import NotFound from './NotFound'
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
      resultDisplay: <div id="results">Do a search to find iphones</div>,
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
          <div id="results">
            <div className="results">
              { iphones.map((iphone) => <Iphone key={iphone.id} iphone={iphone} />)}
            </div>
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
          <button
            type="button"
            onClick={() => {
              this.doSearch()
            }}
          >
            Search
          </button>
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

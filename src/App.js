import React from 'react';
import Axios from 'axios';
import './App.css';
import Search from './search'
import ResultsList from './ResultsList'
import SearchHistory from './SearchHistory'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: undefined,
      results: [],
      searchTerms: []
    }
  }
  componentDidMount() {
    this.getData()
  }
  getData = async () => {

    try {
      const apiUrl = `http://hn.algolia.com/api/v1/search?query=${this.state.input}`;
      const apiResponse = await Axios.get(apiUrl);
      const searchResult = apiResponse.data.hits
      if (apiResponse.status === 200) {
        this.setState({
          results: searchResult,
          searchTerms: [...this.state.searchTerms, this.state.input]

        })
      }
      console.log(this.state.results)
    } catch (error) {
      throw error
    }

  }
  handleChange = (event) => {

    this.setState({
      input: event.target.value,

    })
  }
  render() {

    return (
      <div className="App">
        <Search updateSearch={this.getData} handleChange={this.handleChange} />
        <SearchHistory searchTerms={this.state.searchTerms} />
        <div className="results-list">
          <ResultsList results={this.state.results} result={this.props.results} state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;

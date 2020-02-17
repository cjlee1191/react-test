import React from 'react'
import './search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleInput = (event) => {
        event.preventDefault();
        this.props.updateSearch()
    }
    handleChange = (event) => {
        event.preventDefault();
        this.props.handleChange(event)
    }

    render() {
        return (

            <form className="search-form" onSubmit={this.handleInput}>
                <input className="search-field" placeholder='Search News' type="text" onChange={this.handleChange} />
                <input className="button" value='Search' type="submit"></input>
            </form>
        )
    }
}

export default Search
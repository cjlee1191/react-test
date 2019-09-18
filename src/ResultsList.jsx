/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './ResultsList.css'

class ResultsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.state;
        this.props = props
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleClick(event)

    }
    render() {
        const results = this.props.results.map((item, index) =>

            <div key={index} className="result">
                <h1 >{item.title}</h1>
                <a href={item.url} target="_blank">Click to see article</a>
                {/* <button value={index} source={item.recipe.source} className="button" onClick={this.handleClick} >Add to Cook Book</button> */}
            </div>
        )

        return (

            <div result={this.result}>{results}</div>
        )
    }
}

export default ResultsList
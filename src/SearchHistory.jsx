import React from 'react'
import './SearchHistory.css'
const SearchHistory = (props) => {

    const history = props.searchTerms.map((item, index) =>
        <li className='history_item' key={index}>{item}</li>
    )
 
    return (
        <div className='history'>   
        {history}
        </div>

    )
}

export default SearchHistory
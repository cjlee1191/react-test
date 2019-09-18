import React from 'react'

const SearchHistory = (props) => {

    const history = props.searchTerms.map((item, index) =>
        <li key={index}>{item}</li>
    )
    return (
        <>
        Search History:
        { history }
        </>

    )
}

export default SearchHistory
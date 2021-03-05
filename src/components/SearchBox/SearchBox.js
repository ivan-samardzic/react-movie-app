import React from 'react'
import './SearchBox.css'

const SearchBox = ({searchValue, setSearchValue}) => {
    return (
        <div className="col">
            <input 
            className="form-control" 
            placeholder="Search by Movie Title" 
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
        />
        </div>
    )
}

export default SearchBox

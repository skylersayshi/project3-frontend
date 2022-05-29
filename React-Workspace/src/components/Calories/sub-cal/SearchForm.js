import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchForm ({handleChange, handleSubmit, searchString}) {
    return (
        <div>
        
        <form onSubmit={handleSubmit} className="form-horizontal">
            <input placeholder="Search" type="text" name="searchString" required onChange={handleChange} value={searchString}/>
            <button type="submit">
            <SearchIcon height="2rem" width="2rem" />
            </button>
        </form>
        </div>
    )
}

export default SearchForm;
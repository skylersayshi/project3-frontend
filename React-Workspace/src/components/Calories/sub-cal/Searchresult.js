import React from "react";

const SearchResult = ({apiData}) => {
    const mapping = apiData
    // if (!apiData.length) {
    //     return <h2>No Foods Found!</h2>
    //   } 
        return (
            <div>
            {console.log(mapping)}
            {mapping.length > 0 && mapping.map(a => (
                    <div>
                {a.fields.item_name}{a.fields.brand_name}
                    </div>
            ))}
                </div>
    )
}
export default SearchResult;
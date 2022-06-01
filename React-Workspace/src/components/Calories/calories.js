import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchResult from './sub-cal/Searchresult'
import SearchForm from './sub-cal/SearchForm'
// import dotenv from 'dotenv';

// dotenv.config();

const Calories = () => {
  const [apiData, setApiData] = useState([]);
  const [searchString, setSearchString] = useState('');
  
  function getItem(searchString) {
    const appId = process.env.appId;
    const appKey = process.env.appKey;

    const url = `https://api.nutritionix.com/v1_1/search/${searchString}?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=${appId}&appKey=${appKey}&limit=10`;
    
    axios.request(url)
    // .then(res => console.log(res.data))
    .then(res => {
      setApiData(res.data.hits)
      setSearchString('')
      
    })
  }
  
  useEffect(()=>{
    getItem(searchString)
  }, [])

  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    getItem(searchString);
  }

    return(
        <div>

        <SearchForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      searchString={searchString}
      />
      <SearchResult apiData={apiData} />
      </div>
    )
    
}

export default Calories;
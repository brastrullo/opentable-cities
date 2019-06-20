import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import RestaurantList from './components/RestaurantList'
// import Pagination from './components/Pagination'
import './App.css'
// import initData from './initData.json'
// import citiesList from './citiesList.json'

function App () {
  const [data, setData] = useState(null)
  const [query, setQuery] = useState(null)
  const [cities, setCities] = useState([])

  useEffect(() => { if (data !== null) console.log('RESTAURANTS: ', data) }, [data])
  useEffect(() => {
    const fetchCities = async () => {
      const data = await fetch('https://opentable.herokuapp.com/api/cities')
        .then(res => res.json())
      setCities(data.cities)
    }
    fetchCities()
  }, [])

  const setCityName = (res) => setQuery(res)
  const setRestaurantData = (res) => setData(res)
  return (
    <>
      <h1 className='header-title'>Let's go to a restaurant in...
        { query && <span>{query}</span> }
      </h1>

      <SearchBar setCityName={setCityName} setRestaurantData={setRestaurantData} cities={cities} />
      <RestaurantList data={data} />
      {/* { data && <Pagination setRestaurantData={setRestaurantData} /> } */}
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import './App.css'
import initData from './initData.json'
import SearchBar from './components/SearchBar'
import RestaurantList from './components/RestaurantList'

function App () {
  const [data, setData] = useState(initData)
  const [cities, setCities] = useState(null)
  useEffect(() => { if (data !== null) console.log('RESTAURANTS: ', data) }, [data])
  useEffect(() => { if (cities !== null) console.log('CITIES: ', cities) }, [cities])
  useEffect(() => {
    const fetchCities = async () => {
      const data = await fetch('https://opentable.herokuapp.com/api/cities')
        .then(res => res.json())
      setCities(data)
    }
    fetchCities()
  }, [])

  const setRestaurantData = (res) => setData(res)
  return (
    <>
      <h1 className='header-title'>Let's go to a restaurant in...</h1>
      <SearchBar setRestaurantData={setRestaurantData} cities={cities} />
      <RestaurantList data={data} />
    </>
  )
}

export default App

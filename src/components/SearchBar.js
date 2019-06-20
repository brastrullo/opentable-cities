import React, { useState, useEffect } from 'react'

function SearchBar (props) {
  const { setRestaurantData, setCityName, cities } = props
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [filteredCities, setFilteredCities] = useState([])
  useEffect(() => { if (query !== '') console.log(query) }, [query])
  const cityOptions = filteredCities && filteredCities.length > 0
    ? (
      filteredCities.map((city, id) => <option key={id}>{city}</option>)
    ) : (
      <option />
    )

  const fetchRestaurants = async () => {
    const data = await fetch('https://opentable.herokuapp.com/api/restaurants?per_page=10&city=' + query)
      .then(res => res.json())
    console.log(`fetch(https://opentable.herokuapp.com/api/restaurants?per_page=10&city=${query})`)
    setRestaurantData(data)
    setIsSearching(false)
  }

  const handleChangeInput = (e) => {
    if (e.target.id === 'searchCity') setQuery(e.target.value)
    if (e.target.value.length > 2) {
      const filteredCities = cities.filter(city => city.startsWith(query)).slice(0, 10)
      console.log('filteredCities: ', filteredCities.length, filteredCities)
      setFilteredCities(filteredCities)
    } else {
      setFilteredCities([])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSearching(true)
    console.log('SEARCH:', query || 'not found')
    const filter = query.charAt(0).toUpperCase() + query.slice(1)
    if (filteredCities.length === 0) {
      setRestaurantData({})
      setIsSearching(false)
      setCityName(query)
    } else {
      fetchRestaurants(query)
      setCityName(filter)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='searchbar'>
        <label htmlFor='searchCity' className='visuallyhidden'>Search city:</label>
        <input
          autoComplete='on'
          list='citiesList'
          type='search'
          id='searchCity'
          name='searchCity'
          placeholder='Search by city'
          aria-label='Search for restaurants by city'
          onChange={handleChangeInput}
        />
        <button disabled={isSearching}>{isSearching ? 'Searching...' : 'Search'}</button>
      </form>
      <datalist id='citiesList'>{cityOptions}</datalist>
    </>
  )
}

export default SearchBar

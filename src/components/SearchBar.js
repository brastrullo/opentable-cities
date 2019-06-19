import React, { useState, useEffect } from 'react'

function SearchBar (props) {
  const { setRestaurantData } = props
  const [query, setQuery] = useState('')

  useEffect(() => { if (query !== '') console.log(query) }, [query])

  const fetchRestaurants = async (query) => {
    const data = await fetch('https://opentable.herokuapp.com/api/restaurants?entries=100&city=' + query)
      .then(res => res.json())
    setRestaurantData(data)
  }

  const handleChangeInput = (e) => {
    if (e.target.id === 'searchCity') setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('SEARCH:', query)
    fetchRestaurants(query)
  }
  return (
    <form onSubmit={handleSubmit} className='searchbar'>
      <label htmlFor='searchCity' className='visuallyhidden'>Search city:</label>
      <input
        type='search'
        id='searchCity'
        name='searchCity'
        placeholder='Search by city'
        aria-label='Search for restaurants by city'
        onChange={handleChangeInput}
      />
      <button>Search</button>
    </form>
  )
}

export default SearchBar

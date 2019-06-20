import React from 'react'
import RestaurantItem from './RestaurantItem'

function RestaurantList (props) {
  const { data } = props
  const RestaurantItemsList = () => {
    console.log(data)
    if (!data) return <></>
    const { restaurants } = data
    const list = restaurants && restaurants.length !== 0
      ? restaurants.map((item, i) => <RestaurantItem key={i} item={item} />)
      : <li>No results found.</li>
    return (
      <ul className='restaurant-list'>
        {list}
      </ul>
    )
  }
  return <RestaurantItemsList />
}

export default RestaurantList

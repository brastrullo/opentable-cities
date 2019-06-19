import React from 'react'
import RestaurantItem from './RestaurantItem'

function RestaurantList (props) {
  const { data } = props
  const RestaurantItemsList = () => {
    if (!data) return <></>
    const { restaurants } = data
    console.log(data)
    const list = restaurants.length !== 0
      ? restaurants.map((item, i) => <RestaurantItem key={i} item={item} />)
      : <span>No results found.</span>
    return (
      <>
        <ul className='restaurant-list'>
          {list}
        </ul>
      </>
    )
  }
  return <RestaurantItemsList />
}

export default RestaurantList

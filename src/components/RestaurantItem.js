import React from 'react'

function RestaurantItem (props) {
  const { item } = props
  const { name, address, price } = item

  const symbolMap = {
    1: '$',
    2: '$$',
    3: '$$$',
    4: '$$$$',
    5: '$$$$$'
  }
  return (
    <li className='restaurant-item'>
      <div>
        <p className='restaurant-name'>{name}</p>
        <p className='restaurant-address'>{address}</p>
      </div>
      <span className='restaurant-price'>{symbolMap[price]}</span>
    </li>
  )
}

export default RestaurantItem

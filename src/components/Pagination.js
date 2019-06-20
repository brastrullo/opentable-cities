import React from 'react'

function Pagination (props) {
  const { data } = props
  if (!data) return <></>
  // const { restaurants, total_entries, per_page } = data

  return (
    <ul className='pagination'>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>12</li>
    </ul>
  )
}

export default Pagination

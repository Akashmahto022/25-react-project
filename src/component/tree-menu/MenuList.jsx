import MenuItem from './MenuItem'
import React from 'react'

const MenuList = ({list}) => {
  return (
    <ul>
      {list && list.length ?
        list.map((listitem) => <MenuItem item={listitem}/>)
       : null}
    </ul>
  )
}

export default MenuList


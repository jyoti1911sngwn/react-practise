import React, { useEffect, useState } from 'react'

const ListFun = ({ handleClick }) => {
const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(handleClick(5));
    console.log('ListFun rendered');
  }, [handleClick]);

  return (
    items.map(item=><div key={item}>{item}</div>)
  )
}

export default ListFun

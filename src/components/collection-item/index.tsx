import React from 'react'

import './collection-item.scss'

interface Props {
  otherItemProps: {
    name: string
    price: string
    imageUrl: string
  }
}

const CollectionItem = ({ otherItemProps }: Props) => {
  const { name, price, imageUrl } = otherItemProps
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem

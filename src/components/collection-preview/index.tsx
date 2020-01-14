import React from 'react'

import './collection-preview.scss'

interface Props {
  OtherCollections: {
    title: string
    items: []
  }
}

const CollectionPreview = ({ OtherCollections }: Props) => {
  const { items } = OtherCollections
  console.log(OtherCollections)

  return (
    <div className="collection-preview">
      {/* <h1 className="title">{title}</h1> */}
      <div className="preview">
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview

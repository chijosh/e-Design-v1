import React from 'react'

import './collection-preview.scss'

interface Props {
  otherCollectionProps: {
    title: string
    items: []
  }
}

const CollectionPreview = ({ otherCollection }: Props) => {
  const { title, items } = otherCollection

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview

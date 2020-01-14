import React from 'react'

import CollectionItem from '../collection-item'

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
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} otherItemProps={otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview

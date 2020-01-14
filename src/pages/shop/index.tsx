import React, { useState } from 'react'
import ShopData from './shop.data'

import CollectionPreview from '../../components/collection-preview'

interface State {
  collections: ShopData
}

type ShopData = Array<{
  id: number
  title: string
  routeName: string
  items: Items
}>

type Items = Array<{
  id: number
  name: string
  imageUrl: string
  price: number
}>
class Shop extends React.Component<ShopData, State> {
  constructor(props: ShopData) {
    super(props)

    this.state = {
      collections: [ShopData],
    }
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...OtherCollections }) => (
          <CollectionPreview key={id} otherCollections={OtherCollections} />
        ))}
      </div>
    )
  }
}

export default Shop

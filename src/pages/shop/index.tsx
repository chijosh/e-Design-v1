import React from 'react'
import Shop_Data from './shop.data'

import CollectionPreview from '../../components/collection-preview'

interface State {
  collections: Shop_Data
}

type Shop_Data = Array<{
  id: number
  title: string
  routeName: string
  items: {
    id: number
    name: string
    imageUrl: string
    price: number
  }
}>

class ShopPage extends React.Component<Shop_Data, State> {
  constructor(props: Shop_Data) {
    super(props)

    this.state = {
      collections: Shop_Data,
    }
  }

  render() {
    const { collections } = this.state

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} otherCollection={otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage

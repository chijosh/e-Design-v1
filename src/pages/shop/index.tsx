import React, { useState } from 'react'
import ShopData from './shop.data'

import CollectionPreview from '../../components/collection-preview'

interface State {
	collections: ShopDataArr
}

type ShopDataArr = Array<{ node: collections }>

const Shop = () => {
	const [collection, setCollection] = useState<State>({
		collections: [ShopData],
	})

	return (
		<div className="shop-page">
			{collection.collections.map(({ id, ...otherCollections }) => (
				<CollectionPreview key={id} otherCollections={otherCollections} />
			))}
		</div>
	)
}

export default Shop

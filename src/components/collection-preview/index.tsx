import React from 'react'

import './collection-preview.scss'

interface Props {
	otherCollections: {
		title: string
		items: []
	}
}

const CollectionPreview = ({ otherCollections }: Props) => {
	// const [items, title]  = otherCollections
    // console.log('items', items);
    
	return (
		<div className="collection-preview">
			{/* <h1 className="title">{title}</h1> */}
			<div className="preview">
				{otherCollections.items.map(item => (
					<div key={item.id}>{item.name}</div>
				))}
			</div>
		</div>
	)
}

export default CollectionPreview

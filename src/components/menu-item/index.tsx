import React from 'react'
import { Link } from 'gatsby'
import './menu-item.scss'

interface Props {
	SectionProps: {
		title: string
		imageUrl: string
		size?: string
		linkUrl: string
		match: string
	}
}

const MenuItem = ({ SectionProps }: Props) => {
	const { title, imageUrl, size, linkUrl } = SectionProps

	return (
		<Link to={linkUrl} className={`${size} menu-item`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</Link>
	)
}

export default MenuItem

export const getUrl = (type: string, url: string) => {
	switch (type) {
		case 'ContentfulBlogPost':
			return `en/blog/${url}`
		case 'ContentfulNewProducts':
			return `en/product/${url}`
		case 'ContentfulUserStories':
			return `en/story/${url}`
		default:
			return `en/blog/${url}`
	}
}

type NodeArr = Array<{ node: { node_locale: string } }>

export const filterLocale = (nodeArr: NodeArr, lang: string) => {
	return nodeArr
		.map(i => {
			if (i.node.node_locale.slice(0, 2) === lang.slice(1, 3)) {
				return i
			}
		})
		.filter(Boolean)
}

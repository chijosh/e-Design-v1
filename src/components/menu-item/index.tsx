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

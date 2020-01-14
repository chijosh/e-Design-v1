import React from 'react'
<<<<<<< Updated upstream
=======
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
>>>>>>> Stashed changes

// import MenuItem from '../menu-item'
import './directory.scss'

<<<<<<< Updated upstream
export type SectionArr = Array<{
  title: string
  imageUrl: string
  size?: string
  id: number
  linkUrl: string
}>

interface State {
  sections: SectionArr
}

class Directory extends React.Component<SectionArr, State> {
  constructor(props: SectionArr) {
    super(props)

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...SectionProps }) => (
          <MenuItem key={id} SectionProps={SectionProps} />
        ))}
      </div>
    )
  }
=======
// interface Sections {
// 	title: string
// 	imageUrl: string
// 	size?: string
// 	id: number
// 	linkUrl: string
// }

// type SectionArr = Array<{ node: Sections }>

// interface State {
// 	sections: SectionArr
// }

interface myObject {
	nodes: {
		id: string
		childImageSharp: {
			fixed: FluidObject
			fluid: FluidObject
		}
	}
}

// interface member {
// 	title: string
// 	imageUrl: string
// 	size?: string
// }

interface Props {
	data: {
		imagesContainer: myObject
	}
}
const Directory = ({ data }: Props) => {
	console.log(data.imagesContainer)
	// const imagesData: imageCont[] = data.allFile
	// const [section, setSection] = useState<State>({
	// 	sections: [
	// {
	// 	title: 'hats',
	// 	imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
	// 	id: 1,
	// 	linkUrl: 'shop/hats',
	// },
	// {
	// 	title: 'jackets',
	// 	imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
	// 	id: 2,
	// 	linkUrl: 'shop/jackets',
	// },
	// {
	// 	title: 'sneakers',
	// 	imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
	// 	id: 3,
	// 	linkUrl: 'shop/sneakers',
	// },
	// {
	// 	title: 'womens',
	// 	imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
	// 	size: 'large',
	// 	id: 4,
	// 	linkUrl: 'shop/womens',
	// },
	// {
	// 	title: 'mens',
	// 	imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
	// 	size: 'large',
	// 	id: 5,
	// 	linkUrl: 'shop/mens',
	// },
	// ],
	// })

	return (
		// const renderImage = ()=>{
		// 	return data.imagesData.map(({node})=>{
		// 		const member = {

		// 		}
		// 	})
		// }
		<div className="directory-menu">
			{/* {imagesData.map(({ title, imageUrl, size, id }: Props) => (
				<MenuItem key={id} member={member} />
			))} */}
		</div>
	)
>>>>>>> Stashed changes
}

export default Directory

export const query = graphql`
	query {
		imagesContainer: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
			nodes {
				id
				childImageSharp {
					fixed {
						...GatsbyImageSharpFixed
					}
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`

import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import MenuItem from '../index'

const stories = storiesOf('MenuItem', module)

stories.add('MenuItem', () => (
	<div>
		<MenuItem title={text('Title', 'HATS')} />
	</div>
))

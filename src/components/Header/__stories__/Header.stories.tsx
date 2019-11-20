import React from 'react'
import Header from '..'

import { storiesOf } from '@storybook/react'

storiesOf('Header', module).add('Default', () => (
	<Header siteTitle="E-commerce V2" />
))

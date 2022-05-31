import { PrimaryButtons } from './PrimaryButtons'
import { ComponentProps } from 'react'
import { Story } from '@storybook/react'

export default {
  title: 'Molecules/PrimaryButtons',
  component: PrimaryButtons,
}

const Template: Story<ComponentProps<typeof PrimaryButtons>> = (args) => (
 <PrimaryButtons  />
)

export const Primarybuttons = Template.bind({})


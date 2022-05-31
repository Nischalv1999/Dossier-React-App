import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { LandingPage } from './LandingPage'

export default {
  title: 'Page/LandingPage',
  component: LandingPage,
}

const Template: Story<ComponentProps<typeof LandingPage>> = (args) => (
 <LandingPage  />
)

export const PrimaryTemplate = Template.bind({})


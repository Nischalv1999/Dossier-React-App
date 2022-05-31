import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { LandingPageTemplate } from './LandingPageTemplate'

export default {
  title: 'Templates/LandingPageTemplate',
  component: LandingPageTemplate,
}

const Template: Story<ComponentProps<typeof LandingPageTemplate>> = (args) => (
 <LandingPageTemplate {...args} />
)

export const PrimaryTemplate = Template.bind({})

 function test (){}

PrimaryTemplate.args={
  onClickSidePanelItem:test
}


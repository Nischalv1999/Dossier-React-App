import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { Header,headerProps } from './Header'


export default {
  title: 'Organisms/Header',
  component: Header,
}

const Template: Story<ComponentProps<typeof Header>> = (args:headerProps) => (
 <Header {...args} />
)

export const Typography = Template.bind({})


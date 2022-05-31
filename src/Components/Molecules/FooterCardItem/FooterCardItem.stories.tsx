import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { FooterCardItem, footerProps } from './FooterCardItem'
import img from 'assets/Footer1.svg'


export default {
  title: 'Molecules/FooterCardItem',
  component: FooterCardItem,
}

const Template: Story<ComponentProps<typeof FooterCardItem>> = (args:footerProps) => (
 <FooterCardItem {...args} />
)

export const Cover = Template.bind({})

Cover.args = {
  iconUrl:img,
  text:'1. Cover'
}

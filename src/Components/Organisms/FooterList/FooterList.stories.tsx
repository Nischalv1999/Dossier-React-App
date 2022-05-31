import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import footer1 from 'assets/Footer1.svg'
import footer2 from 'assets/Footer2.svg'
import footer3 from 'assets/Footer3.svg'
import footer4 from 'assets/Footer4.svg'
import footer5 from 'assets/Footer5.svg'

import { FooterList,footerProps } from './FooterList'

export default {
  title: 'Organisms/FooterList',
  component: FooterList,
}

const Template: Story<ComponentProps<typeof FooterList>> = (args:footerProps) => (
 <FooterList {...args} />
)

export const Primary = Template.bind({})

const footerList=[
    {src:footer1,text:'1.Cover'},{src:footer2,text:'2.Personal Details'},{src:footer3,text:'3.Education Details'},
    {src:footer4,text:'4.Experience'},{src:footer5,text:'5.Certification'}
]

Primary.args={
    footerItems: footerList
}


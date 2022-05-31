import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { SidePanel, sidePanelProps } from './SidePanel'
import template from 'assets/template.svg'
import typography from 'assets/typography.svg'
import elements from 'assets/elements.svg'
import infographics from 'assets/infographics.svg'
import upload from 'assets/upload-2.svg'



export default {
  title: 'Organisms/SidePanel',
  component: SidePanel,
}

const Template: Story<ComponentProps<typeof SidePanel>> = (args:sidePanelProps) => (
 <SidePanel {...args} />
)

export const Primary = Template.bind({})

const sidePanelList=[
  {
      src:template,
      text:'Templates',
      onClick:()=>{}
  },
  {
     src: elements,
     text:'Themes',
     onClick:()=>{}

  },
  {
      src: typography,
      text:'Typography',
      onClick:()=>{}

   },
   {
      src: elements,
      text:'Elements',
      onClick:()=>{},


   },
   {
      src: infographics,
      text:'Infographics',
      onClick:()=>{}

   },
   {
      src:upload,
      text:'Upload',
      onClick:()=>{}
   },
]

Primary.args = {
sidePanelItems:sidePanelList
};


import { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { SidePanelItem, sidePanelProps } from './SidePanelItem'
import themes from 'assets/typography.svg'


export default {
  title: 'Molecules/SidePanelItem',
  component: SidePanelItem,
}

const Template: Story<ComponentProps<typeof SidePanelItem>> = (args:sidePanelProps) => (
 <SidePanelItem {...args} />
)

export const Typography = Template.bind({})

Typography.args = {
  iconUrl:themes,
  text:'Typography',
  onClick:()=>{}

}

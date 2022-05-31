import { Button } from './Button'
import { ComponentProps } from 'react'
import { Story } from '@storybook/react'


export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template: Story<ComponentProps<typeof Button>> = (args) => (
 <Button {...args} />
)

export const NextButton = Template.bind({})

NextButton.args = {
  name: 'Publish',
  className: 'next-button',
  variant: 'contained',
  width: '140px',
  height: '46px',
  fontsize: '14px',
  textColor: '#FFFFFF',
  color:'secondary'
}
export const SaveButton = Template.bind({})

SaveButton.args = {
  name: 'Save As Draft',
  className: 'save-button',
  variant: 'outlined',
  width: '140px',
  height: '46px',
  fontsize: '14px',
  textColor: '#4C2CD9',
  color:'secondary'
}

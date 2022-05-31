import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import Icon, { iconProps } from "./Icon";
import { ComponentProps } from "react";

import themes from 'assets/typography.svg'


export default {
  title: "Atoms/Icons",
  component: Icon,
} 


const Template: Story<ComponentProps<typeof Icon>> = (args:iconProps) => (
    <Icon {...args} />
  )
  
  export const themeIcon = Template.bind({})
  
  themeIcon.args = {
   imageSrc:themes
  }
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar, {IAvatarProps} from "./Avatar";
import User from "assets/Avatar1.svg";


export default {
  title: "Atoms/Avatar",
  component: Avatar,
} 

const Template: ComponentStory<typeof Avatar> = (args:IAvatarProps) => <Avatar {...args} />;

export const user = Template.bind({});
user.args = {
  variant: "rounded",
  src: User,
};



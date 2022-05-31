import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import UploadDialogueBox from "./UploadDialogueBox";
export default {
  title: "Molecules/UploadDialogueBox",
  component: UploadDialogueBox,
} as ComponentMeta<typeof UploadDialogueBox>;

const Template: ComponentStory<typeof UploadDialogueBox> = (args) => (
  <UploadDialogueBox {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  progress: 30,
  imageName: "Peterparker.png",
};

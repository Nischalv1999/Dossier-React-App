import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import UploadImageOptions from "./UploadImageOptions";
import UploadImage from "assets/upload.png";
import BoxIcon from "assets/lock-icon.svg";
import ThreeDots from "assets/more.png";
import LockIcon from "assets/Boxplus-icon.svg";
import FontIcon from "assets//font-sizeIcon.svg";
import FontAlignment from "assets/alignment.svg";
import BoldDropdown from "assets/Bold.svg";
import Alignment from "assets/alignmentIcon.svg";
import Color from "assets/colorIcon.svg";

export default {
  title: "Molecules/UploadImageOptions",
  component: UploadImageOptions,
} as ComponentMeta<typeof UploadImageOptions>;

const Template: ComponentStory<typeof UploadImageOptions> = (args) => (
  <UploadImageOptions {...args}></UploadImageOptions>
);

const options = [
  {
    src: UploadImage,
    action: () => console.log("Clicked"),
  },
  {
    src: BoxIcon,
  },
  {
    src: LockIcon,
  },
  
  {
    src: ThreeDots,
  },
];

export const primary = Template.bind({});
primary.args = {
  options: options,
};

const options2 = [
  {
    src: FontIcon,
    imageStyle: {
      height: "28px",
      width: "82px",
    },
  },
  {
    src: FontAlignment,
    imageStyle: {
      height: "28px",
      width: "84px",
    },
  },
  {
    src: BoldDropdown,
    imageStyle: {
      height: "28px",
      width: "62px",
    },
  },
  {
    src: Alignment,
  },
  {
    src: Color,
  },
  {
    src: BoxIcon,
  },
  {
    src: LockIcon,
  },
  {
    src: ThreeDots,
  },
];
export const secondary = Template.bind({});
secondary.args = {
  options: options2,
};
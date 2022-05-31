import { ComponentStory, ComponentMeta } from "@storybook/react";
import AlphaCard from "./AlphaCard";
import React from "react";

export default {
  title: "Organisms/AlphaCard",
  component: AlphaCard,
} as ComponentMeta<typeof AlphaCard>;

const Template: ComponentStory<typeof AlphaCard> = (args) => (
  <AlphaCard {...args} />
);

export const user = Template.bind({});
user.args = {
  userName: "Peter Parker",
  designation: "Project Manager",
  heading: "FINTECH PORTFOLIO",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum ",
};

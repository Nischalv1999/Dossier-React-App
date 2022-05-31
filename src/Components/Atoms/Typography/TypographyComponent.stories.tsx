import { ComponentProps } from "react";

import { Story } from "@storybook/react";
import TypographyComponent, { TypographyProps } from "./TypographyComponent";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/theme";

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
};

const Template: Story<ComponentProps<typeof TypographyComponent>> = (
  args: TypographyProps
) => (
  <ThemeProvider theme={theme}>
    <TypographyComponent {...args} />
  </ThemeProvider>
);

export const Text = Template.bind({});

Text.args = {
  variant: "h3",
  text: "This is Text",
  color: "#4C2CD9",
};

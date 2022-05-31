import { Typography } from "@mui/material";
import * as React from "react";

export type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  text?: string;
  color?: string;
  classname?:string
};

const TypographyComponent: React.FC<TypographyProps> = ({
  variant,
  text,
  color,
  classname
}) => {
  return (
    <Typography variant={variant} color={color} className={classname}>
      {text}
    </Typography>
  );
};

export default TypographyComponent;

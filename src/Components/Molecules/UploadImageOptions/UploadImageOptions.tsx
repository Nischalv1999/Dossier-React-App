import React from "react";
import { Box, IconButton } from "@mui/material";

export type OptionType = {
  src: any;
  imageStyle?: {
    height: string;
    width: string;
  };
  action?: any;
};
export type ImageUploadOptionsProp = {
  options: Array<OptionType>;
};
const iconButton = {
  backgroundColor: '#F7F5FF',
  height: "28px",
  justifyContent: "center",
  marginLeft: "5px",
  borderRadius: "0%",
  "&: hover": {
    backgroundColor: '#F7F5FF',
  },
};
const outerBox = {
  borderRadius: "6px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  display: "inline-block",
  justifyContent: "center",
  paddingTop: "6px",
  paddingBottom: "6px",
  paddingRight: "8px",
  backgroundColor: '#FFFFFF',
};
const imageStyle = {
  height: "18px",
  width: "18px",
};
const UploadImageOptions: React.FC<ImageUploadOptionsProp> = (props) => {
  const { options } = props;

  return (
    <>
      <Box sx={outerBox}>
        {options.map((option: OptionType, index: number) => {
          return(
            <IconButton
              key={index}
              sx={iconButton}
              onClick={option.action}
              data-testid={"icon"+index}
            >
                <img src={option.src} {...option.imageStyle} />
              
            </IconButton>
          );
        })}
      </Box>
    </>
  );
};

export default UploadImageOptions;

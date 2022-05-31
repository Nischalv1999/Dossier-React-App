import { Avatar as IAvatar, AvatarProps } from "@mui/material";

export interface IAvatarProps extends AvatarProps {
  variant?: "circular" | "rounded" | "square";
  src?: any;
  sxStyles?:any;
}

const Avatar = (props: IAvatarProps) => {
  return (
    <>
      <IAvatar {...props}  variant={props.variant} src={props.src} />
    </>
  );
};

export default Avatar;

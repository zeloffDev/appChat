import { AvatarDefault } from "@/assets/Base64/AvatarDefault";
import { ImgHTMLAttributes } from "react";

type Props = { src?: string } & ImgHTMLAttributes<HTMLImageElement>;

export const CustomImg = (props: Props) => {
  const { src, ...rest } = props;
  return (
    <img
      src={src ?? AvatarDefault}
      alt="Avatar"
      className="h-full w-full"
      {...rest}
    />
  );
};

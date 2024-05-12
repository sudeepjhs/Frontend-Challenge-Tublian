import { FC, SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export const Ellipse: FC<IconProps> = ({
  size = 4,
  height,
  width,
  fill,
  ...props
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="2" cy="2" r="2" fill={fill || "#888888"} />
    </svg>
  );
};

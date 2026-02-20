"use client";
import clsx from "clsx";
import { Button as AntdButton } from "antd";
import type { ButtonProps } from "antd";

const Button = ({
  className,
  size = "middle",
  htmlType = "button",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <AntdButton
      className={clsx("button", className)}
      size={size}
      htmlType={htmlType}
      {...rest}
    >
      {children}
    </AntdButton>
  );
};

export default Button;

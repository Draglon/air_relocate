"use client";
import clsx from "clsx";
import Text, { TextProps } from "antd/lib/typography/Text";

const TypographyText = ({
  className,
  fontFamily = '',
  type,
  underline,
  italic,
  strong,
  children,
  ...rest
}: TextProps & { fontFamily?: string }) => {
  return (
    <Text
      className={clsx("text", className, {
        "text--roboto": fontFamily === 'roboto',
      })}
      type={type}
      italic={italic}
      strong={strong}
      underline={underline}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TypographyText;

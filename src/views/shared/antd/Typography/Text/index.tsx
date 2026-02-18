"use client";
import clsx from "clsx";
import parse from 'html-react-parser';
import Text, { TextProps } from "antd/lib/typography/Text";

const TypographyText = ({
  className,
  fontFamily = "geometria",
  parseString,
  type,
  underline,
  italic,
  strong,
  children,
  ...rest
}: TextProps & { fontFamily?: string; parseString?: string }) => {
  return (
    <Text
      className={clsx("text", className, {
        "text--geometria": fontFamily === 'geometria',
        "text--roboto": fontFamily === 'roboto',
      })}
      type={type}
      italic={italic}
      strong={strong}
      underline={underline}
      {...rest}
    >
      {parseString ? parse(parseString) : children}
    </Text>
  );
};

export default TypographyText;

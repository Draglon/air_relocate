"use client";
import clsx from "clsx";
import parse from 'html-react-parser';
import Title, { TitleProps } from "antd/lib/typography/Title";

const TypographyTitle = ({
  className,
  fontFamily = "geometria",
  parseString,
  type,
  level,
  underline,
  italic,
  children,
  ...rest
}: TitleProps & { fontFamily?: string; parseString?: string }) => {
  return (
    <Title
      className={clsx("title", className, {
        "title--geometria": fontFamily === 'geometria',
        "title--roboto": fontFamily === 'roboto',
      })}
      type={type}
      level={level}
      italic={italic}
      underline={underline}
      {...rest}
    >
      {parseString ? parse(parseString) : children}
    </Title>
  );
};

export default TypographyTitle;

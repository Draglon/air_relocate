"use client";
import clsx from "clsx";
import parse from 'html-react-parser';
import Paragraph, { ParagraphProps } from "antd/lib/typography/Paragraph";

const TypographyParagraph = ({
  className,
  fontFamily = "geometria",
  parseString,
  type,
  underline,
  italic,
  strong,
  children,
  ...rest
}: ParagraphProps & { fontFamily?: string; parseString?: string }) => {
  return (
    <Paragraph
      // className={clsx("paragraph", className)}
      className={clsx("paragraph", className, {
        "paragraph--geometria": fontFamily === 'geometria',
        "paragraph--roboto": fontFamily === 'roboto',
      })}
      type={type}
      italic={italic}
      strong={strong}
      underline={underline}
      {...rest}
    >
      {parseString ? parse(parseString) : children}
    </Paragraph>
  );
};

export default TypographyParagraph;

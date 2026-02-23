"use client";
import clsx from "clsx";
import parse from 'html-react-parser';
import { ReactNode } from "react";
import { LinkProps } from "next/link";

import { Link, usePathname } from "@/i18n/navigation";

const NavigationLink = ({
  href,
  children,
  className,
  fontFamily = "geometria",
  parseString,
  ...rest
}: LinkProps & { children?: ReactNode; className?: string, fontFamily?: string, parseString?: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    // @ts-ignore
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx("link", {
        "active": isActive,
        "link--geometria": fontFamily === 'geometria',
        "link--roboto": fontFamily === 'roboto',
      }, className)}
      href={href}
      {...rest}
    >
      {parseString ? parse(parseString) : children}
    </Link>
  );
};

export default NavigationLink;

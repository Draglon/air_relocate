"use client";
import clsx from "clsx";
import { Tabs as AntdTabs } from "antd";
import type { TabsProps } from "antd";

const Tabs = ({ className, ...rest }: TabsProps) => {
  return <AntdTabs className={clsx("tabs", className)} {...rest} />;
};

export default Tabs;

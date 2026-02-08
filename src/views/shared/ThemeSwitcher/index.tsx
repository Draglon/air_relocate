"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

import { THEME } from "@/lib/constants/theme";
import Button from "@/views/shared/antd/Button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === THEME.dark;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onChangeTheme = () => {
    setTheme(!isDarkTheme ? THEME.dark : THEME.light);
  };

  return (
    <Button
      className="theme-switcher ml-16"
      color="default"
      icon={isDarkTheme ? <MoonOutlined /> : <SunOutlined />}
      onClick={onChangeTheme}
    />
  );
};

export default ThemeSwitcher;

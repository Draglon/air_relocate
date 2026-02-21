"use client";
import clsx from 'clsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";
import NavigationLink from "@/views/shared/NavigationLink";

type MenuMobileProps = {
  active: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuMobile = ({ active, setActiveMenu }: MenuMobileProps) => {
  const t = useTranslations("header");
  const [activeLang, setActiveLang] = useState("ru");

  return (
    <div className={clsx("menu-mobile", { "menu-mobile--active": active })}>
      <button className="btn btn-menu-close" onClick={() => setActiveMenu(false)}>
        <i className="icon icon-close" />
      </button>

      <nav className="menu-mobile__nav">
        <NavigationLink className="menu-mobile__nav-link" href="#">{t("mainMenu.home")}</NavigationLink>
        <NavigationLink className="menu-mobile__nav-link" href="#">{t("mainMenu.vacancies")}</NavigationLink>
        <NavigationLink className="menu-mobile__nav-link" href="#">{t("mainMenu.cities")}</NavigationLink>
        <NavigationLink className="menu-mobile__nav-link" href="#">{t("mainMenu.relocation")}</NavigationLink>
        <NavigationLink className="menu-mobile__nav-link" href="#">{t("mainMenu.blog")}</NavigationLink>
      </nav>

      <div className="menu-mobile__buttons">
        <Button className="btn btn-login">{t("login")}</Button>
        <Button className="btn btn-clients">{t("clients")}</Button>
      </div>

      <div className="lang">
          <Button
            className={clsx("btn-lang", { "btn-lang--active": activeLang === "ru" })}
            onClick={() => setActiveLang("ru")}
          >
            RU
          </Button>
          <Button
            className={clsx("btn-lang", { "btn-lang--active": activeLang === "en" })}
            onClick={() => setActiveLang("en")}
          >
            EN
          </Button>
        </div>
    </div>
  );
};

export default MenuMobile;

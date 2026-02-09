"use client";
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";

const MenuMobile = () => {
  const t = useTranslations("header");

  return (
    <div className="menu-mobile">
      <button className="btn btn-menu-close">
        <i className="icon icon-close" />
      </button>

      <nav className="menu-mobile__nav">
        <a className="menu-mobile__nav-item" href="#">{t("mainMenu.home")}</a>
        <a className="menu-mobile__nav-item" href="#">{t("mainMenu.vacancies")}</a>
        <a className="menu-mobile__nav-item" href="#">{t("mainMenu.cities")}</a>
        <a className="menu-mobile__nav-item" href="#">{t("mainMenu.relocation")}</a>
        <a className="menu-mobile__nav-item" href="#">{t("mainMenu.blog")}</a>
      </nav>

      <div className="menu-mobile__buttons">
        <Button>{t("login")}</Button>
        <Button>{t("clients")}</Button>
        <div className="lang">
          <Button>RU</Button>
          <Button>EN</Button>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;

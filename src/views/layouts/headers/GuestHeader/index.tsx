"use client";
import Image from "next/image";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import logoXL_SRC from "@/../public/images/logo/xl/logo.svg";
import logoMD_SRC from "@/../public/images/logo/md/logo.svg";
import logoSM_SRC from "@/../public/images/logo/sm/logo.svg";
import logoXS_SRC from "@/../public/images/logo/xs/logo.svg";
// import ThemeSwitcher from "@/views/shared/ThemeSwitcher";
// import LocalSwitcherSelect from "@/views/shared/LocalSwitcherSelect";
import MenuMobile from "@/views/layouts/headers/GuestHeader/MenuMobile";

const GuestHeader = () => {
  const t = useTranslations("header");
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <picture className="logo">
          <source srcSet={logoXL_SRC} media="(min-width: 1920px)"></source>
          <source srcSet={logoMD_SRC} media="(min-width: 1280px)"></source>
          <source srcSet={logoSM_SRC} media="(min-width: 900px)"></source>
          <Image className="logo__img" src={logoXS_SRC} alt={t("logoAlt")} width="118" height="15" />
        </picture>

        <div className="hamburger-menu">
          <button className="btn btn-menu" onClick={() => setActiveMenuMobile(true)}>
            <i className="icon icon-menu"></i>
          </button>
        </div>

        <MenuMobile active={activeMenuMobile} setActiveMenu={setActiveMenuMobile} />

        {/*
          <div className="header__menu">
            <LocalSwitcherSelect />
            <ThemeSwitcher />
          </div>
        */}
      </div>
    </header>
  );
};

export default GuestHeader;

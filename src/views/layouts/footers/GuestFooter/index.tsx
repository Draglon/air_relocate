"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logoWhiteSRC from "@/../public/images/logo_white.svg";
import Input from "@/views/shared/antd/Input";
import Button from "@/views/shared/antd/Button";
import NavigationLink from "@/views/shared/NavigationLink";
import { Title, Paragraph } from "@/views/shared/antd/Typography";

const GuestFooter = () => {
  const t = useTranslations("footer");

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left-side">
          <picture className="footer__logo">
            <NavigationLink href="#">
              <Image className="footer__logo-image" src={logoWhiteSRC} alt={t("logoAlt")} width="127" height="17" />
            </NavigationLink>
          </picture>

          <div className="footer__content">
            <nav className="footer__nav">
              <Title className="footer__nav-title" level={3}>{t("menu_1.title")}</Title>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_1.item_1")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_1.item_2")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_1.item_3")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_1.item_4")}</NavigationLink>
            </nav>
            <nav className="footer__nav">
              <Title className="footer__nav-title" level={3}>{t("menu_2.title")}</Title>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_2.item_1")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_2.item_2")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_2.item_3")}</NavigationLink>
            </nav>
            <nav className="footer__nav">
              <Title className="footer__nav-title" level={3}>{t("menu_3.title")}</Title>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_3.item_1")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_3.item_2")}</NavigationLink>
              <NavigationLink className="footer__nav-link" href="#">{t("menu_3.item_3")}</NavigationLink>
            </nav>
          </div>
        </div>

        <div className="footer__right-side">
          <div className="footer__callback">
            <Title className="footer__title" parseString={t("contactUs.title")} />
            <form className="footer__callback-form">
              <div className="footer__callback-field">
                <Input placeholder={t("contactUs.email.placeholder")} />
              </div>
              <div className="footer__callback-buttons">
                <Button className="button--callback" htmlType="submit" color="primary" variant="solid">
                  <i className="icon icon-paper-plane" />
                </Button>
              </div>
            </form>
          </div>

          <div className="footer__social">
            <Title className="footer__title" parseString={t("social.title")} />
            <nav className="footer__social-nav">
              <a className="footer__social-nav-link" href="#"><i className="icon icon-facebook" /></a>
              <a className="footer__social-nav-link" href="#"><i className="icon icon-vk" /></a>
              <a className="footer__social-nav-link" href="#"><i className="icon icon-twitter" /></a>
              <a className="footer__social-nav-link" href="#"><i className="icon icon-instagram" /></a>
            </nav>
          </div>
        </div>

        <div className="footer__review">
          <Paragraph parseString={t("review")} />
        </div>

        <div className="footer__copyright">
          <Paragraph parseString={t("copyright", { email: "info@aitrelocate.me" })} />
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;

"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import photoSRC from "@/../public/images/photo_2.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";

const SectionVacancies = () => {
  const t = useTranslations("Home");
  const tShared = useTranslations("shared");

  return (
    <section className="section section--vacancies">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("vacancies.title")}
          </Title>
          <p className="section__description">
            <Text className="section__text">
              {t("vacancies.description")}
            </Text>
          </p>
        </header>

        <div className="tabs">
          <Button className="button--tab button--hot" color="orange" variant="solid">
            <i className="icon icon-fire" />
            <Text>{t("vacancies.tabs.tab_1")}</Text>
          </Button>
          <Button className="button--tab" color="default" variant="solid">
            <Text>{t("vacancies.tabs.tab_2")}</Text>
          </Button>
        </div>

        <section className="vacancies">
          <article className="vacancies__article">
            <header className="vacancies__header">
              <picture className="vacancies__picture">
                <Image className="vacancies__image" src={photoSRC} alt="Photo" width="37" height="37" />
              </picture>
              <Title className="vacancies__title" level={3}>Senior Software Engineer (Full Stack)</Title>
            </header>
            <div className="vacancies__description">
              <ul className="vacancies__list">
                <li className="vacancies__item"><i className="icon icon-city" />General VR Solutions</li>
                <li className="vacancies__item"><i className="icon icon-location" />Норвегия, Франфурт на Майне</li>
              </ul>
              <Text className="vacancies__text">Our trading platform is loaded with features. Our easy-to-use interface, quick funding...</Text>
              <div className="vacancies__buttons">
                <Button className="btn btn-read-more">
                  {tShared("readMore")}
                </Button>
              </div>
            </div>
          </article>
        </section>

        <footer className="section__buttons">
          <Button className="btn btn-find-more">
            {t("vacancies.button")}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionVacancies;

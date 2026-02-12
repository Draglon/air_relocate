"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import bridgeSRC from "@/../public/images/icons/bridge.svg";
// import bridgeActiveSRC from "@/../public/images/icons/bridge_active.svg";
import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";

const SectionCities = () => {
  const t = useTranslations("Home");
  const tShared = useTranslations("shared");

  return (
    <section className="section section--cities">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("cities.title")}
          </Title>
          <Text className="section__description">
            {t("cities.description")}
          </Text>
        </header>

        <section className="cities">
          <article className="cities__article">
            <picture className="cities__picture">
              <Image className="cities__image" src={bridgeSRC} alt="City" width="37" height="37" />
            </picture>
            <Title className="cities__title" level={3}>Лондон</Title>
            <Text className="cities__title">785 открытых вакансий</Text>

            <div className="cities__buttons">
              <Button className="btn btn-read-more">
                {tShared("readMore")}
              </Button>
            </div>
          </article>
          
          <div className="stepper">
            <div className="stepper__step stepper__step--active" role="button" />
            <div className="stepper__step" role="button" />
            <div className="stepper__step" role="button" />
            <div className="stepper__step" role="button" />
          </div>
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

export default SectionCities;

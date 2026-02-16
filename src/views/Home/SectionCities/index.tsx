"use client";
import Image from "next/image";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import bridgeSRC from "@/../public/images/icons/bridge.svg";
// import bridgeActiveSRC from "@/../public/images/icons/bridge_active.svg";
import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";

const articles = [{
  id: "1",
  title: "Лондон",
  description: "785 открытых вакансий",
  src: bridgeSRC,
},
{
  id: "2",
  title: "Лондон",
  description: "785 открытых вакансий",
  src: bridgeSRC,
},
{
  id: "3",
  title: "Лондон",
  description: "785 открытых вакансий",
  src: bridgeSRC,
}];

const SectionCities = () => {
  const t = useTranslations("Home");
  const tShared = useTranslations("shared");
  const [activeStep, setActiveStep] = useState(articles[0].id);
  const steps = articles.map(article => article.id);

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
          {articles.map(article => (
            <article className="cities__article" key={article.id}>
              <picture className="cities__picture">
                <Image className="cities__image" src={article.src} alt="City" width="37" height="37" />
              </picture>
              <Title className="cities__title" level={3}>{article.title}</Title>
              <Text className="cities__text">{article.description}</Text>

              <div className="cities__buttons">
                <Button className="btn btn-read-more">
                  {tShared("readMore")}
                </Button>
              </div>
            </article>
          ))}

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
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

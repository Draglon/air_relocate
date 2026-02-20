"use client";
import clsx from 'clsx';
import Image from "next/image";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import bridgeSRC from "@/../public/images/icons/bridge.svg";
// import bridgeActiveSRC from "@/../public/images/icons/bridge_active.svg";
import Button from "@/views/shared/antd/Button";
import { Title, Text, Paragraph } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";

const articles = [{
  id: "1",
  title: "Лондон",
  description: "785 открытых вакансий",
  src: bridgeSRC,
  alt: "City"
},
{
  id: "2",
  title: "Лондон",
  description: "785 открытых вакансий",
  src: bridgeSRC,
  alt: "City"
},
{
  id: "3",
  title: "Лондон",
  description: "785 открытых вакансий",
  src: bridgeSRC,
  alt: "City"
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
          <Title className="section__title" level={1} parseString={t("cities.title")} />
          <div className='section__description text-center'>
            <Text className="section__text" parseString={t("cities.description")} />
          </div>
        </header>

        <section className="cities">
          <div className='cities__wrapper'>
            {articles.map(article => (
              <article
                key={article.id}
                className={clsx("cities__article", {
                  "cities__article--active": activeStep === article.id
                })}
              >
                <picture className="cities__picture">
                  <Image className="cities__image" src={article.src} alt={article.alt} width="48" height="48" />
                </picture>
                <Title className="cities__title" level={3}>{article.title}</Title>
                <Paragraph className="cities__text">{article.description}</Paragraph>
                <div className="cities__buttons">
                  <Button className="button-read-more">
                    {tShared("moreDetails")}
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </section>

        <footer className="section__buttons">
          <Button className="button-find-more" color="primary" variant="outlined">
            <Text>{t("cities.button")}</Text>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionCities;

"use client";
import clsx from 'clsx';
import Image from "next/image";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import photoSRC from "@/../public/images/photo_1.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text, Paragraph } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";

const articles = [
  {
    id: "1",
    avatarSRC: photoSRC,
    title: "Сергей Серцеед",
    position: "QA engeneer",
    description: "What I like about Relocate is that you get carefully selected jobs in different countries. What’s more, all the potential employers are ready to help you with relocation",
  },
  {
    id: "2",
    avatarSRC: photoSRC,
    title: "Сергей Серцеед",
    position: "QA engeneer",
    description: "What I like about Relocate is that you get carefully selected jobs in different countries. What’s more, all the potential employers are ready to help you with relocation",
  },
  {
    id: "3",
    avatarSRC: photoSRC,
    title: "Сергей Серцеед",
    position: "QA engeneer",
    description: "What I like about Relocate is that you get carefully selected jobs in different countries. What’s more, all the potential employers are ready to help you with relocation",
  },
  {
    id: "4",
    avatarSRC: photoSRC,
    title: "Сергей Серцеед",
    position: "QA engeneer",
    description: "What I like about Relocate is that you get carefully selected jobs in different countries. What’s more, all the potential employers are ready to help you with relocation",
  }
];

const SectionAboutUs = () => {
  const t = useTranslations("Home");
  const tShared = useTranslations("shared");
  const [activeStep, setActiveStep] = useState(articles[0].id);
  const steps = articles.map(article => article.id);

  return (
    <section className="section section--about-us">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1} parseString={t("aboutUs.title")} />
        </header>

        <section className="about-us">
          <div className="about-us__wrapper">
            <div className="about-us__container">
              {articles.map(article => (
                <article
                  key={article.id}
                  className={clsx("about-us__article", {
                    "about-us__article--active": activeStep === article.id
                  })}
                >
                  <header className="about-us__header">
                    <picture className="about-us__picture">
                      <Image className="about-us__image" src={article.avatarSRC} alt={article.title} width="39" height="39" />
                    </picture>
                    <div className="about-us__content">
                      <Title className="about-us__title" level={3}>{article.title}</Title>
                      <Text className="about-us__position">{article.position}</Text>
                    </div>
                  </header>

                  <Paragraph className="about-us__description truncate-multiline" parseString={article.description} />

                  <footer className="about-us__buttons">
                    <Button className="button-read-more" color="primary" variant="link">
                      <Text>{tShared("readTheFullReview")}</Text>
                    </Button>
                  </footer>
                </article>
              ))}
            </div>
          </div>

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </section>

        <footer className="section__buttons">
          <Button className="button-find-more" color="primary" variant="outlined">
            <Text>{t("aboutUs.button")}</Text>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionAboutUs;

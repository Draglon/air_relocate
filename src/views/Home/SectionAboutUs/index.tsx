"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

import photoSRC from "@/../public/images/photo_1.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";

const SectionAboutUs = () => {
  const t = useTranslations("Home");

  return (
    <section className="section section--about-us">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("aboutUs.title")}
          </Title>
        </header>

        <section className="about-us">
          <article className="about-us__article">
            <header className="about-us__header">
              <picture className="about-us__picture">
                <Image className="about-us__image" src={photoSRC} alt="Author" width="37" height="37" />
              </picture>
              <Title className="about-us__title" level={3}>Сергей Серцеед</Title>
              <Text className="about-us__position">QA engeneer</Text>
            </header>

            <div className="about-us__description">
              <Text className="about-us__text">What I like about Relocate is that you get carefully selected jobs in different countries. What’s more, all the potential employers are ready to help you with relocation...</Text>
            </div>

            <footer className="about-us__buttons">
              <Button className="btn btn-read-more">
                Читать полный отзыв
              </Button>
            </footer>
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
            {t("aboutUs.button")}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionAboutUs;

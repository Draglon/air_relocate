"use client";
import clsx from 'clsx';
import Image from "next/image";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import image_1_SRC from "@/../public/images/image_1.png";
import image_2_SRC from "@/../public/images/image_2.png";
import image_3_SRC from "@/../public/images/image_3.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text, Paragraph } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";

const articles = [{
  id: "1",
  title: "Топ 5&nbsp;профессий на&nbsp;релокейт или&nbsp;как найти",
  description: "Регистрация в&nbsp;Bürgeramt у&nbsp;меня была в&nbsp;таком виде так: я&nbsp;нашел адрес районного. Регистрация в&nbsp;Bürgeramt у&nbsp;меня была в&nbsp;таком виде так: я&nbsp;нашел адрес районного.",
  src: image_1_SRC,
  srcAlt: "Photo",
  time: "12 мин",
  link: "#",
},
{
  id: "2",
  title: "Топ 5&nbsp;профессий на&nbsp;релокейт или&nbsp;как найти",
  description: "Регистрация в&nbsp;Bürgeramt у&nbsp;меня была в&nbsp;таком виде так: я&nbsp;нашел адрес районного",
  src: image_2_SRC,
  srcAlt: "Photo",
  time: "12 мин",
  link: "#",
},
{
  id: "3",
  title: "Топ 5&nbsp;профессий на&nbsp;релокейт или&nbsp;как найти",
  description: "Регистрация в&nbsp;Bürgeramt у&nbsp;меня была в&nbsp;таком виде так: я&nbsp;нашел адрес районного",
  src: image_3_SRC,
  srcAlt: "Photo",
  time: "12 мин",
  link: "#",
},
{
  id: "4",
  title: "Топ 5&nbsp;профессий на&nbsp;релокейт или&nbsp;как найти",
  description: "Регистрация в&nbsp;Bürgeramt у&nbsp;меня была в&nbsp;таком виде так: я&nbsp;нашел адрес районного",
  src: image_3_SRC,
  srcAlt: "Photo",
  time: "12 мин",
  link: "#",
}];

const SectionBlog = () => {
  const t = useTranslations("Home");
  const tShared = useTranslations("shared");
  const [activeStep, setActiveStep] = useState(articles[0].id);
  const steps = articles.map(article => article.id);

  return (
    <section className="section section--blog">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1} parseString={t("blog.title")} />
          <Paragraph className='section__description' parseString={t("blog.description")} />
        </header>

        <section className="blog">
          <div className="blog__wrapper">
            {articles.map(article => (
                <article
                  key={article.id}
                  className={clsx("blog__article", {
                    "blog__article--active": activeStep === article.id
                  })}
                >
                <picture className="blog__picture">
                  <Image className="blog__image" src={article.src} alt={article.srcAlt} width="330" height="140" />
                </picture>
                <div className="blog__content">
                  <header className="blog__header">
                    <Text className="blog__text" fontFamily="roboto" parseString={t("blog.experience")} />
                    <i className="icon icon-mark" />
                  </header>
                  <div className="blog__description">
                    <Title className="blog__title" level={3} parseString={article.title} />
                    <Paragraph className="blog__text truncate-multiline" parseString={article.description} />
                  </div>
                  <footer className="blog__footer">
                    <Text className="blog__text" fontFamily="roboto">{article.time}</Text>
                    <a className="blog__link" href={article.link}>
                      <Text>{tShared("readMore")}</Text>
                    </a>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </section>

        <footer className="section__buttons">
          <Button className="button-find-more" color="primary" variant="outlined">
            <Text>{t("blog.button")}</Text>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionBlog;

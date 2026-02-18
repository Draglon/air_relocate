"use client";
import clsx from 'clsx';
import Image from "next/image";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import image_1_SRC from "@/../public/images/image_1.png";
import image_2_SRC from "@/../public/images/image_2.png";
import image_3_SRC from "@/../public/images/image_3.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";

const articles = [{
  id: "1",
  title: "Топ 5 профессий на релокейт или как найти",
  description: "Регистрация в Bürgeramt у меня была в таком виде так: я нашел адрес районного",
  src: image_1_SRC,
  srcAlt: "Photo",
  time: "12 мин",
  link: "#",
},
{
  id: "2",
  title: "Топ 5 профессий на релокейт или как найти",
  description: "Регистрация в Bürgeramt у меня была в таком виде так: я нашел адрес районного",
  src: image_2_SRC,
  srcAlt: "Photo",
  time: "12 мин",
  link: "#",
},
{
  id: "3",
  title: "Топ 5 профессий на релокейт или как найти",
  description: "Регистрация в Bürgeramt у меня была в таком виде так: я нашел адрес районного",
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
        <div className='section__description text-center'>
          <Text className="section__description" parseString={t("blog.description")} />
        </div>
        </header>

        <section className="blog">
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
              <div className="blog__wrapper">
                <header className="blog__header">
                  <Text className="blog__text" fontFamily="roboto">{t("blog.experience")}</Text>
                  <i className="icon icon-mark" />
                </header>
                <div className="blog__content">
                  <Title className="blog__title" level={3}>{article.title}</Title>
                  <Text className="blog__text">{article.description}</Text>
                </div>
                <footer className="blog__footer">
                  <Text className="blog__text" fontFamily="roboto">{article.description}</Text>
                  <a className="blog__link" href={article.link}>
                    <Text>{tShared("readMore")}</Text>
                  </a>
                </footer>
              </div>
            </article>
          ))}

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </section>

        <footer className="section__buttons">
          <Button className="button-find-more">
            <Text>{t("blog.button")}</Text>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionBlog;

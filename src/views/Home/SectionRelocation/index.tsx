"use client";
import { useState } from 'react';
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";

const articles = [{
  id: "1",
  title: "С чего начать при переезде и подготовка",
  nav: [{
    link: "#",
    text: "Поиск ваканчий по сервису",
  },
  {
    link: "#",
    text: "Горящие вакансии",
  },
  {
    link: "#",
    text: "Дорогостоящие вакансии",
  },
  {
    link: "#",
    text: "Дорогостоящие вакансии",
  }],
},
{
  id: "2",
  title: "С чего начать при переезде и подготовка",
  nav: [{
    link: "#",
    text: "Поиск ваканчий по сервису",
  },
  {
    link: "#",
    text: "Горящие вакансии<",
  },
  {
    link: "#",
    text: "Дорогостоящие вакансии",
  },
  {
    link: "#",
    text: "Дорогостоящие вакансии",
  }],
},
{
  id: "3",
  title: "С чего начать при переезде и подготовка",
  nav: [{
    link: "#",
    text: "Поиск ваканчий по сервису",
  },
  {
    link: "#",
    text: "Горящие вакансии",
  },
  {
    link: "#",
    text: "Дорогостоящие вакансии",
  },
  {
    link: "#",
    text: "Дорогостоящие вакансии",
  }],
}];

const SectionRelocation = () => {
  const t = useTranslations("Home");
  const [activeStep, setActiveStep] = useState(articles[0].id);
  const steps = articles.map(article => article.id);

  return (
    <section className="section section--relocate">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("relocation.title")}
          </Title>
          <Text className="section__description">
            {t("relocation.description")}
          </Text>
        </header>

        <section className="relocate">
          {articles.map(article => (
            <article className="relocate__article" key={article.id}>
              <Title className="relocate__title" level={3}>{article.title}</Title>
              <nav className="relocate__nav">
                {article.nav.map((navLink, index) => <a className="relocate__link" href={navLink.link} key={index}>{navLink.text}</a>)}
              </nav>
            </article>
          ))}

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </section>

        <footer className="section__buttons">
          <Button className="btn btn-find-more">
            {t("relocation.button")}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionRelocation;

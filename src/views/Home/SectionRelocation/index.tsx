"use client";
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";
import { Title, Text, Paragraph } from "@/views/shared/antd/Typography";
import Stepper from "@/views/shared/Stepper";
import NavigationLink from "@/views/shared/NavigationLink";

const articles = [{
  id: "1",
  title: "С&nbsp;чего начать при переезде и&nbsp;подготовка",
  nav: [{
    link: "#",
    text: "Поиск ваканчий по&nbsp;сервису",
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
  title: "Важные пункти оформления при переезде",
  nav: [{
    link: "#",
    text: "Поиск ваканчий по&nbsp;сервису",
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
  id: "3",
  title: "Важные пункти оформления при переезде",
  nav: [{
    link: "#",
    text: "Поиск ваканчий по&nbsp;сервису",
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
    <section className="section section--relocation">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1} parseString={t("relocation.title")} />
          <Paragraph className='section__description' parseString={t("relocation.description")} />
        </header>

        <section className="relocation">
          <div className="relocation__wrapper">
            {articles.map(article => (
              <article
                key={article.id}
                className={clsx("relocation__article", {
                  "relocation__article--active": activeStep === article.id
                })}
              >
                <Title className="relocation__title" level={3} parseString={article.title} />
                <nav className="relocation__nav">
                  {article.nav.map((navLink, index) => (
                    <NavigationLink
                      key={index}
                      className="relocation__nav-link"
                      href={navLink.link}
                      parseString={navLink.text}
                    />
                  ))}
                </nav>
              </article>
            ))}
          </div>

          <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </section>

        <footer className="section__buttons">
          <Button className="button-find-more" color="primary" variant="outlined">
            <Text>{t("relocation.button")}</Text>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionRelocation;

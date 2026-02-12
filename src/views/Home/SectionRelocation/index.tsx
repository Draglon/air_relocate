"use client";
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";

const SectionRelocation = () => {
  const t = useTranslations("Home");

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
          <article className="relocate__article">
            <Title className="relocate__title" level={3}>С чего начать при переезде и подготовка</Title>
            <nav className="relocate__nav">
              <a className="relocate__link" href="#">Поиск ваканчий по сервису</a>
              <a className="relocate__link" href="#">Горящие вакансии</a>
              <a className="relocate__link" href="#">Дорогостоящие вакансии</a>
              <a className="relocate__link" href="#">Дорогостоящие вакансии</a>
            </nav>
          </article>
          
          <div className="stepper">
            <div className="stepper__step stepper__step--active" role="button" />
            <div className="stepper__step" role="button" />
            <div className="stepper__step" role="button" />
          </div>
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

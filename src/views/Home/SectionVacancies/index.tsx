"use client";
import clsx from 'clsx';
import Image from "next/image";
import { useTranslations } from "next-intl";

import photoSRC from "@/../public/images/photo_2.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text, Paragraph } from "@/views/shared/antd/Typography";

const articles = [
  {
    id: "1",
    hot: true,
    src: photoSRC,
    alt: "Photo alt",
    title: "Senior Software Engineer (Full&nbsp;Stack)",
    description: "Our trading platform is&nbsp;loaded with features. Our easy-to-use interface, quick funding option",
    list: {
      city: "General VR&nbsp;Solutions",
      location: "Норвегия, Франфурт на&nbsp;Майне",
    },
  },
  {
    id: "2",
    hot: false,
    src: photoSRC,
    alt: "Photo alt",
    title: "Senior Software Engineer (Full&nbsp;Stack)",
    description: "Bending Spoons is&nbsp;a&nbsp;fast-growing tech company focused on&nbsp;building and marketing mobile applications. Despite being such a&nbsp;young company...",
    list: {
      city: "General VR&nbsp;Solutions",
      location: "Норвегия, Франфурт на&nbsp;Майне",
    },
  },
  {
    id: "3",
    hot: false,
    src: photoSRC,
    alt: "Photo alt",
    title: "Senior Software Engineer (Full&nbsp;Stack)",
    description: "Bending Spoons is&nbsp;a&nbsp;fast-growing tech company focused on&nbsp;building and marketing mobile applications. Despite being such a&nbsp;young company...",
    list: {
      city: "General VR&nbsp;Solutions",
      location: "Норвегия, Франфурт на&nbsp;Майне",
    },
  },
  // {
  //   id: "4",
  //   hot: false,
  //   src: photoSRC,
  //   alt: "Photo alt",
  //   title: "Senior Software Engineer (Full&nbsp;Stack)",
  //   description: "Bending Spoons is&nbsp;a&nbsp;fast-growing tech company focused on&nbsp;building and marketing mobile applications. Despite being such a&nbsp;young company...",
  //   list: {
  //     city: "General VR&nbsp;Solutions",
  //     location: "Норвегия, Франфурт на&nbsp;Майне",
  //   },
  // }
];

const SectionVacancies = () => {
  const t = useTranslations("Home");
  const tShared = useTranslations("shared");

  return (
    <section className="section section--vacancies">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("vacancies.title")}
          </Title>
          <Paragraph className="section__description" parseString={t("vacancies.description")} />
        </header>

        <div className="tabs">
          <Button className="button--tab button--hot" color="orange" variant="solid">
            <i className="icon icon-fire" />
            <Text>{t("vacancies.tabs.tab_1")}</Text>
          </Button>
          <Button className="button--tab" color="default" variant="solid">
            <Text>{t("vacancies.tabs.tab_2")}</Text>
          </Button>
        </div>

        <section className="vacancies">
          {articles.map(article => (
            <article className="vacancies__article" key={article.id}>
              <i className={clsx("icon", { "icon-mark": !article.hot, "icon-mark-full": article.hot })} />
              <header className="vacancies__header">
                <picture className="vacancies__picture">
                  <Image className="vacancies__image" src={article.src} alt={article.alt} width="37" height="37" />
                </picture>
                <Title className="vacancies__title" level={3} parseString={article.title} />
                <ul className="vacancies__list">
                  <li className="vacancies__item">
                    <i className="icon icon-city" />
                    <Text className="vacancies__item-text" fontFamily="roboto" parseString={article.list.city} />
                  </li>
                  <li className="vacancies__item">
                    <i className="icon icon-location" />
                    <Text className="vacancies__item-text" fontFamily="roboto" parseString={article.list.location} />
                  </li>
                </ul>
              </header>
              <div className="vacancies__description">
                <Paragraph className="vacancies__text truncate-multiline" parseString={article.description} />
              </div>
              <footer className="vacancies__buttons">
                <Button className="button-read-more" color="primary" variant={article.hot ? "solid" : "outlined" }>
                  <Text fontFamily="roboto">{tShared("moreDetails")}</Text>
                </Button>
              </footer>
            </article>
          ))}
        </section>

        <footer className="section__buttons">
          <Button className="button-find-more">
            <Text>{t("vacancies.button")}</Text>
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionVacancies;

"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

// import image_1_SRC from "@/../public/images/image_1.png";
import image_2_SRC from "@/../public/images/image_2.png";
// import image_3_SRC from "@/../public/images/image_3.png";
import Button from "@/views/shared/antd/Button";
import { Title, Text } from "@/views/shared/antd/Typography";

const SectionBlog = () => {
  const t = useTranslations("Home");

  return (
    <section className="section section--blog">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("blog.title")}
          </Title>
          <Text className="section__description">
            {t("blog.description")}
          </Text>
        </header>

        <section className="blog">
          <article className="blog__article">
            <picture className="vacancies__picture">
              <Image className="vacancies__image" src={image_2_SRC} alt="Photo" width="330" height="140" />
            </picture>
            <div className="blog__wrapper">
              <header className="blog__header">
                <Text className="blog__text">{t("blog.experience")}</Text>
                <i className="icon icon-mark" />
              </header>
              <div className="blog__content">
                <Title className="blog__title" level={3}>Топ 5 профессий на релокейт или как найти</Title>
                <Text className="blog__text">Регистрация в Bürgeramt у меня была в таком виде так: я нашел адрес районного...</Text>
              </div>
              <footer>
                <Text className="blog__text">12 мин</Text>
                <a className="blog__link" href="#">
                  <Text className="blog__text">Читать далее</Text>
                </a>
              </footer>
            </div>
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
            {t("blog.button")}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default SectionBlog;

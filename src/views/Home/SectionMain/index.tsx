"use client";
import { useTranslations } from "next-intl";

import Input from "@/views/shared/antd/Input";
import Select from "@/views/shared/antd/Select";
import Button from "@/views/shared/antd/Button";
import { Title } from "@/views/shared/antd/Typography";

const SectionMain = () => {
  const t = useTranslations("Home");

  return (
    <section className="section section--main">
      <div className="section__wrapper">
        <Title className="section__title" level={1}>
          <span className="section__title-line_1">
            <span className="plane" />
            {t("title.part_1")}
          </span>
          <span className="section__title-line_2">
            {t("title.part_2")}
          </span>
        </Title>
        <Title className="section__subTitle" level={2} parseString={t("subTitle")} />
        <form className="section__form">
          <div className="section__field">
            <Input className="section__input" placeholder={t("form.vacancy.placeholder")} />
          </div>
          <div className="section__field">
            <Select className="section__select" placeholder={t("form.city.placeholder")} />
          </div>
          <div className="section__buttons">
            <Button className="btn-search" htmlType="submit">
              <i className="icon icon-search" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionMain;

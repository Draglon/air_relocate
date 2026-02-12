"use client";
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";
import Input from "@/views/shared/antd/Input";
import { Title, Text } from "@/views/shared/antd/Typography";

const SectionSubscription = () => {
  const t = useTranslations("Home");

  return (
    <section className="section section--subscription">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1}>
            {t("subscription.title")}
          </Title>
          <Text className="section__description">
            {t("subscription.description")}
          </Text>
        </header>

        <form className="subscription__form">
          <div className="subscription__field">
            <Input placeholder={t("subscription.form.email.placeholder")} />
          </div>
          <div className="subscription__button">
            <Button className="btn btn-subscription">
              {t("vacancies.button")}
            </Button>
          </div>
          <div className="subscription__field">
            add checkbox
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionSubscription;

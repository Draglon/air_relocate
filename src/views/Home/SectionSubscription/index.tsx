"use client";
import { useTranslations } from "next-intl";

import Button from "@/views/shared/antd/Button";
import Input from "@/views/shared/antd/Input";
import Checkbox from "@/views/shared/antd/Checkbox";
import { Title, Text, Paragraph } from "@/views/shared/antd/Typography";

const SectionSubscription = () => {
  const t = useTranslations("Home");

  return (
    <section className="section section--subscription">
      <div className="section__wrapper">
        <header className="section__header">
          <Title className="section__title" level={1} parseString={t("subscription.title")} />
          <Paragraph className='section__description' parseString={t("subscription.description")} />
        </header>

        <form className="subscription__form">
          <div className="subscription__field">
            <Input placeholder={t("subscription.form.email.placeholder")} />
          </div>
          <div className="subscription__button">
            <Button className="button-submit" color="primary" variant="solid">
              <Text>{t("subscription.form.button")}</Text>
            </Button>
          </div>
          <div className="subscription__field">
            <Checkbox>
              <Text parseString={t("subscription.form.agree.label")} />
            </Checkbox>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionSubscription;

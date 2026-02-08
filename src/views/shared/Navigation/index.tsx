import { useTranslations } from "next-intl";

import NavigationLink from "@/views/shared/NavigationLink";

const Navigation = () => {
  const t = useTranslations("Navigation");

  return (
    <nav className="nav">
      <NavigationLink href="/" className="nav__link">
        {t("navPortfolio")}
      </NavigationLink>
      <NavigationLink href="/about-me" className="nav__link">
        {t("navAboutMe")}
      </NavigationLink>
      <NavigationLink href="/contacts" className="nav__link">
        {t("navContacts")}
      </NavigationLink>
    </nav>
  );
};

export default Navigation;

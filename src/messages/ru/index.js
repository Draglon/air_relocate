import home from "./home";
import header from "./header";
import footer from "./footer";
import localeSwitcher from "./localeSwitcher";
import shared from "./shared";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...home,
  ...header,
  ...footer,
  ...localeSwitcher,
  ...shared,
};

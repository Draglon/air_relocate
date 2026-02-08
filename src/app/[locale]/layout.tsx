import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import StoreProvider from "@/store/StoreProvider";
import "@/app/styles.scss";

import { Providers } from "./providers";

const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic', 'latin'],
})

const geometria = localFont({
  src: [
    {
      path: './../fonts/Geometria/Geometria.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../fonts/Geometria/Geometria-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/Geometria/Geometria-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const icomoon = localFont({
  src: [
    {
      path: './../fonts/icomoon/icomoon.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

type Props = {
  children: React.ReactNode;
  params: Promise<any> | undefined;
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return {
    title: t("layout.title"),
    description: t("layout.description"),
  };
}

export default async function RootLayout({ children, params }: Props) {
  const messages = await getMessages();
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <StoreProvider>
      <html
        lang={locale}
        className={`${roboto.className} ${geometria.className} ${icomoon.className}`}
        suppressHydrationWarning
      >
        <body>
          <Providers>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </Providers>
        </body>
      </html>
    </StoreProvider>
  );
}

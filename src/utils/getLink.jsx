const links = {
  blog: {
    base: `https://www.onlyoffice.com/blog`,
    paths: {
      en: "",
      ru: "",
      zh: "/zh-hans",
      pt: "/pt-br",
      nl: "",
    },
  },
  marketplace: {
    base: `https://www.onlyoffice.com/app-directory`,
    paths: {
      pt: "",
      it: "",
      cs: "",
      nl: "",
    },
  },
  templates: {
    base: "https://templates.onlyoffice.com",
    paths: {
      en: "",
      el: "",
      hi: "",
      sr: "",
      hy: "",
      cs: "",
      ru: "",
      "zh-hans": "/zh",
      "pt-br": "/pt",
      nl: "",
    },
  },
};

export const getLink = (type, locale) => {
  const { base, paths } = links[type];

  return `${base}${paths[locale] ?? `/${locale}`}`;
};

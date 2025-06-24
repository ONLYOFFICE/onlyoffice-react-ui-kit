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
      en: "",
      pt: "",
      it: "",
      cs: "",
      nl: "",
      hy: "",
      el: "",
      hi: "",
      ar: "",
      sr: "",
      hy: "",
      "pt-br": "",
      "zh-hans": "/zh",
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
      nl: "",
      "zh-hans": "/zh",
      "pt-br": "/pt",
    },
  },
};

export const getLink = (type, locale) => {
  const { base, paths } = links[type];

  return `${base}${paths[locale] ?? `/${locale}`}`;
};

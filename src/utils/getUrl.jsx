export const getUrl = (locale, path, baseUrl = "", baseUrlWithAspx = false) => {
  const [pathnameWithQuery, hash = ""] = path.split("#");
  const [pathname, query = ""] = pathnameWithQuery.split("?");

  const aspxPath = `${pathname}${baseUrlWithAspx ? ".aspx" : ""}`;
  const queryString = query ? `?${query}` : "";
  const hashString = hash ? `#${hash}` : "";

  return `${baseUrl || ""}${
    locale === "en" ? "" : `/${locale}`
  }${aspxPath}${queryString}${hashString}`;
};

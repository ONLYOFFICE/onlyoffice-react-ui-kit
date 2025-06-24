export const getUrl = (
  locale,
  path,
  baseUrl = "",
  baseUrlWithAspx = false,
  baseLocalePathMap,
) => {
  const [pathnameWithQuery, hash = ""] = path.split("#");
  const [pathname, query = ""] = pathnameWithQuery.split("?");

  const aspxPath = `${pathname}${baseUrlWithAspx ? ".aspx" : ""}`;
  const queryString = query ? `?${query}` : "";
  const hashString = hash ? `#${hash}` : "";

  const localePath =
    locale === "en" || baseLocalePathMap?.[locale] === ""
      ? ""
      : `/${baseLocalePathMap?.[locale] ?? locale}`;

  return `${baseUrl}${localePath}${aspxPath}${queryString}${hashString}`;
};

import React from "react";
import ar from "./locales/ar/common.json";
import cs from "./locales/cs/common.json";
import de from "./locales/de/common.json";
import el from "./locales/el/common.json";
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";
import fr from "./locales/fr/common.json";
import hi from "./locales/hi/common.json";
import hy from "./locales/hy/common.json";
import it from "./locales/it/common.json";
import ja from "./locales/ja/common.json";
import pt from "./locales/pt/common.json";
import ru from "./locales/ru/common.json";
import sr from "./locales/sr/common.json";
import zh from "./locales/zh/common.json";

const OOAdventAnnounce = ({ locale }) => {
  const currentLocale = locale || "en";
  const translations = { ar, cs, de, el, en, es, fr, hi, hy, it, ja, pt, ru, sr, zh };
  const translation = (key) => translations[currentLocale === "zh-hans" ? "zh" : currentLocale === "pt-br" ? "pt" : currentLocale][key] || translations.en[key];

  return (
    <a className={`oo-advent-announce ${currentLocale}`} href={translation("AdventAnnounceLink")}>
      <div className="oo-advent-announce-text">
        <div className="oo-advent-announce-text-desktop" dangerouslySetInnerHTML={{ __html: translation("AdventAnnounceDesktop") }} />
        <div className="oo-advent-announce-text-mobile" dangerouslySetInnerHTML={{ __html: translation("AdventAnnounceMobile") }} />
      </div>
    </a>
  );
};

export { OOAdventAnnounce };
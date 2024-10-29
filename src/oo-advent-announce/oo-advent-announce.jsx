/*
 * (c) Copyright Ascensio System SIA 2024
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import locales from "./locales/index.jsx";
import "./oo-advent-announce.scss";

const OOAdventAnnounce = ({ locale }) => {
  const currentLocale = locale || "en";
  const t = (key) => locales[currentLocale === "zh-hans" ? "zh" : currentLocale === "pt-br" ? "pt" : currentLocale][key] || locales.en[key] || key;

  return (
    <a className={`oo-advent-announce ${currentLocale}`} href={t("AdventAnnounceLink")}>
      <div className="oo-advent-announce-text">
        <div className="oo-advent-announce-text-desktop" dangerouslySetInnerHTML={{ __html: t("AdventAnnounceDesktop") }} />
        <div className="oo-advent-announce-text-mobile" dangerouslySetInnerHTML={{ __html: t("AdventAnnounceMobile") }} />
      </div>
    </a>
  );
};

export { OOAdventAnnounce };
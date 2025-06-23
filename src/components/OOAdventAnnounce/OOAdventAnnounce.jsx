/*
 * (c) Copyright Ascensio System SIA 2024-2025
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
import parse from "html-react-parser";
import clsx from "clsx";
import locales from "./locales/index.jsx";
import "./OOAdventAnnounce.scss";

const OOAdventAnnounce = ({ locale }) => {
  const t = (key) =>
    locales[locale === "zh-hans" ? "zh" : locale === "pt-br" ? "pt" : locale][
      key
    ] ||
    locales.en[key] ||
    key;

  return (
    <a className="oo-advent-announce" href={t("AdventAnnounceLink")}>
      <div className="oo-advent-announce-text">
        <div className="oo-advent-announce-text-desktop">
          {parse(t("AdventAnnounceDesktop"))}
        </div>
        <div className={clsx("oo-advent-announce-text-mobile", locale)}>
          {parse(t("AdventAnnounceMobile"))}
        </div>
      </div>
    </a>
  );
};

export { OOAdventAnnounce };

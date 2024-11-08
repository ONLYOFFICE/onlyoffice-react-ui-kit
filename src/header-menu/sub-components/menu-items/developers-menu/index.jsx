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
import Link from "next/link";
import MenuItem from "../../menu-item/index.jsx";

const DevelopersMenu = ({ t, hrefLang, navHidden, setNavHidden }) => {
  return (
    <MenuItem className="oo-hm-item--developers" heading={t("Developers")} navHidden={navHidden} setNavHidden={setNavHidden}>
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box">
          <Link className="oo-hm-item-label" href={`${hrefLang}/for-developers.aspx`}>{t("All solutions")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--docs-developer" href={`${hrefLang}/developer-edition.aspx`}>{t("Why Docs Developer")}</Link>
          {/* <Link className="oo-hm-item-box-link" href={`${hrefLang}/automation-api.aspx`}>{t("Automation API")}</Link> */}
          <Link className="oo-hm-item-box-link" href={`${hrefLang}/conversion-api.aspx`}>{t("Conversion API")}</Link>
          <Link className="oo-hm-item-box-link" href={`${hrefLang}/document-builder.aspx`}>{t("Document Builder")}</Link>
        </div>
        <div className="oo-hm-item-box oo-hm-item-box--bg-gray">
          <Link className="oo-hm-item-block" href={`${hrefLang}/see-it-in-action.aspx`}>
            <div className="oo-hm-item-block-title">{t("See it in action!")}</div>
            <div className="oo-hm-item-block-img oo-hm-item-block-img--see-it-in-action"></div>
            <div className="oo-hm-item-block-text">{t("Curious to know what the interface looks like and try the main functionality without registration?")}</div>
          </Link>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <Link className="oo-hm-item-link oo-hm-item-link--api-documentation" href="https://api.onlyoffice.com/">{t("API Docs")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--schedule-free-demo" href={`${hrefLang}/demo-order.aspx`}>{t("Schedule free demo")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--contact-sales" href={`mailto:sales@onlyoffice.com?subject=${t("ONLYOFFICE%20Docs%20Enterprise%20request")}`}>{t("Contact sales")}</Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default DevelopersMenu;
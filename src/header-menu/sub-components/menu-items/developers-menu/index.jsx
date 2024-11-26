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
import "./developers-menu.scss";

const DevelopersMenu = ({ t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  return (
    <MenuItem
      className="oo-hm-item--developers"
      heading={t("Developers")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box oo-hm-item-box--with-border">
          <Link className="oo-hm-item-label" href={`${hrefLang}/for-developers.aspx`}>{t("All solutions")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--docs-developer" href={`${hrefLang}/developer-edition.aspx`}>{t("Why Docs Developer")}</Link>
          <Link className="oo-hm-item-box-link" href={`${hrefLang}/automation-api.aspx`}>{t("Automation API")}</Link>
          <Link className="oo-hm-item-box-link" href={`${hrefLang}/conversion-api.aspx`}>{t("Conversion API")}</Link>
          <Link className="oo-hm-item-box-link" href={`${hrefLang}/document-builder.aspx`}>{t("Document Builder")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--pricing" href={`${hrefLang}/developer-edition-prices.aspx`}>{t("Pricing")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--launch-demo" href={`${hrefLang}/see-it-in-action.aspx?developer=edition`}>{t("Launch demo")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--get-in-now" href={`${hrefLang}/download-developer.aspx#docs-developer`}>{t("Get it now")}</Link>
        </div>
        <div className="oo-hm-item-box">
          <div className="oo-hm-item-label">{t("DocSpace Developer")}</div>
          <Link className="oo-hm-item-link oo-hm-item-link--why-docspace-developer" href={`${hrefLang}/docspace-developer.aspx`}>{t("Why DocSpace Developer")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--pricing" href={`${hrefLang}/docspace-developer-prices.aspx`}>{t("Pricing")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--get-in-now" href={`${hrefLang}/download-developer.aspx#docspace-developer`}>{t("Get it now")}</Link>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <Link className="oo-hm-item-link oo-hm-item-link--api-documentation" href="https://api.onlyoffice.com/">{t("API Docs")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--contact-sales" href={`mailto:sales@onlyoffice.com?subject=${t("ONLYOFFICE%20Docs%20Enterprise%20request")}`}>{t("Contact sales")}</Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default DevelopersMenu;
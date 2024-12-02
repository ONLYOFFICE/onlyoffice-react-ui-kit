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
import "./enterprise-menu.scss";

const EnterpriseMenu = ({ t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  return (
    <MenuItem
      className="oo-hm-item--enterprise"
      heading={t("Enterprise")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-wrapper-box">
          <div className="oo-hm-item-box oo-hm-item-box--with-border">
            <div className="oo-hm-item-label">{t("Docs Enterprise")}</div>
            <Link className="oo-hm-item-link oo-hm-item-link--docs-enterprise" href={`${hrefLang}/docs-enterprise.aspx`}>{t("Why Docs Enterprise")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--pricing" href={`${hrefLang}/docs-enterprise-prices.aspx`}>{t("Pricing")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--get-in-now" href={`${hrefLang}/download.aspx#docs-enterprise`}>{t("Get it now")}</Link>
          </div>
          <div className="oo-hm-item-box">
            <div className="oo-hm-item-label">{t("DocSpace Enterprise")}</div>
            <Link className="oo-hm-item-link oo-hm-item-link--docspace" href={`${hrefLang}/docspace-enterprise.aspx`}>{t("Why DocSpace Enterprise")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--pricing" href={`${hrefLang}/docspace-prices.aspx`}>{t("Pricing")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--get-in-now" href={`${hrefLang}/download.aspx#docspace-enterprise`}>{t("Get it now")}</Link>
          </div>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <Link className="oo-hm-item-link oo-hm-item-link--contact-sales" href={`mailto:sales@onlyoffice.com?subject=${t("ONLYOFFICE%20Enterprise%20Request")}`}>{t("Contact sales")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--request-demo" href={`${hrefLang}/demo-order.aspx`}>{t("Request demo")}</Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default EnterpriseMenu;
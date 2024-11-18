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
import "./pricing-menu.scss";

const PricingMenu = ({ t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  return (
    <MenuItem
      className="oo-hm-item--pricing"
      heading={t("Pricing")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-wrapper-box">
          <div className="oo-hm-item-box">
            <div className="oo-hm-item-box-wrapper">
              <div className="oo-hm-item-label">{t("For business")}</div>
              <Link className="oo-hm-item-link oo-hm-item-link--docspace" href={`${hrefLang}/docspace-prices.aspx`}>{t("DocSpace")}</Link>
              <Link className="oo-hm-item-link oo-hm-item-link--docs-enterprise" href={`${hrefLang}/docs-enterprise-prices.aspx`}>{t("Docs Enterprise")}</Link>
              <Link className="oo-hm-item-link oo-hm-item-link--workspace" href={`${hrefLang}/workspace-prices.aspx`}>{t("Workspace")}</Link>
            </div>
            <div className="oo-hm-item-box-wrapper">
              <div className="oo-hm-item-label">{t("For developers")}</div>
              <Link className="oo-hm-item-link oo-hm-item-link--docs-developer" href={`${hrefLang}/developer-edition-prices.aspx`}>{t("Docs Developer")}</Link>
            </div>
            <div className="oo-hm-item-box-wrapper">
              <div className="oo-hm-item-label">{t("For home use")}</div>
              <Link className="oo-hm-item-link oo-hm-item-link--docs-home-server" href={`${hrefLang}/docs-home-server.aspx`}>{t("Docs Home Server")}</Link>
              <Link className="oo-hm-item-link oo-hm-item-link--docspace-family-pack" href={`${hrefLang}/docspace-family-pack.aspx`}>{t("DocSpace Family Pack")}</Link>
            </div>
          </div>
          <div className="oo-hm-item-box oo-hm-item-box--bg-gray">
            <Link className="oo-hm-item-block" href={`${hrefLang}/find-partners.aspx`}>
              <div className="oo-hm-item-block-title">{t("Buy from an ONLYOFFICE reseller")}</div>
              <div className="oo-hm-item-block-img oo-hm-item-block-img--reseller"></div>
              <div className="oo-hm-item-block-text">{t("Find out the list of all the authorized ONLYOFFICE resellers in your area")}</div>
            </Link>
          </div>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <Link className="oo-hm-item-link oo-hm-item-link--contact-sales" href={`mailto:sales@onlyoffice.com?subject=${t("ONLYOFFICE%20sales%20request")}`}>{t("Contact sales")}</Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default PricingMenu;
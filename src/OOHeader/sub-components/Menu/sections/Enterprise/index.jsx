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
import clsx from "clsx";
import "./Enterprise.scss";
import { MenuItem } from "../../sub-components/MenuItem/index.jsx";
import { MenuLink } from "../../sub-components/MenuLink/index.jsx";
import { MenuLabel } from "../../sub-components/MenuLabel/index.jsx";

const Enterprise = ({ t, locale, getBaseUrl, theme, highlight }) => {
  return (
    <MenuItem
      id="oo-menu-item-btn-enterprise"
      className={clsx("oo-menu-item--enterprise", locale)}
      heading={t("Enterprise")}
      theme={theme}
      active={highlight?.buttonId}
    >
      <div className="oo-header-menu-mob-height">
        <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column">
          <div className="oo-header-menu-item oo-header-menu-item--with-border">
            <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("DocsEnterprise")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-why-docs-enterprise"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docs-enterprise")}
              icon="docs-enterprise"
              active={highlight?.linkId}
            >
              {t("WhyDocsEnterprise")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-enterprise-docs-pricing"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docs-enterprise-prices")}
              icon="pricing"
              active={highlight?.linkId}
            >
              {t("Pricing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-enterprise-docs-get-it-now"
              href={getBaseUrl("/download#docs-enterprise")}
              icon="get-in-now"
              active={highlight?.linkId}
            >
              {t("GetItNow")}
            </MenuLink>
          </div>
          <div className="oo-header-menu-item">
            <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("DocSpaceEnterprise")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-why-docspace-enterprise"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docspace-enterprise")}
              icon="docspace"
              active={highlight?.linkId}
            >
              {t("WhyDocSpaceEnterprise")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-enterprise-docspace-pricing"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docspace-prices")}
              icon="pricing"
              active={highlight?.linkId}
            >
              {t("Pricing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-linkk-enterprise-docspace-get-in-now"
              href={getBaseUrl("/download#docspace-enterprise")}
              icon="get-in-now"
              active={highlight?.linkId}
            >
              {t("GetItNow")}
            </MenuLink>
          </div>
        </div>

        <div className="oo-header-menu-bottom oo-header-menu-bottom--end">
          <MenuLink
            id="oo-menu-link-enterprise-contact"
            className="oo-header-menu-mr-24 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
            href={`mailto:sales@onlyoffice.com?subject=${t(
              "ONLYOFFICE%20Enterprise%20request",
            )}`}
            icon="contact-sales"
            variant="small"
            active={highlight?.linkId}
          >
            {t("ContactSales")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-request-demo"
            href={getBaseUrl("/demo-order")}
            icon="request-demo"
            variant="small"
            active={highlight?.linkId}
          >
            {t("RequestDemo")}
          </MenuLink>
        </div>
      </div>
    </MenuItem>
  );
};

export { Enterprise };

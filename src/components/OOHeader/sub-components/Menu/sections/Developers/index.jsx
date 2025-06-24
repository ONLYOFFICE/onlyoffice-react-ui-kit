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
import "./Developers.scss";
import { MenuItem } from "../../sub-components/MenuItem/index.jsx";
import { MenuLink } from "../../sub-components/MenuLink/index.jsx";
import { MenuLabel } from "../../sub-components/MenuLabel/index.jsx";

const Developers = ({ t, locale, getBaseUrl, theme, highlight }) => {
  return (
    <MenuItem
      id="oo-menu-item-btn-developers"
      className={clsx("oo-menu-item--developers", locale)}
      heading={t("Developers")}
      theme={theme}
      active={highlight?.buttonId}
    >
      <div className="oo-header-menu-mob-height">
        <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column">
          <div className="oo-header-menu-item oo-header-menu-item--with-border">
            <MenuLabel
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16"
              href={getBaseUrl("/for-developers")}
            >
              {t("AllSolutions")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-why-docs-developer"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/developer-edition")}
              icon="docs-developer"
              active={highlight?.linkId}
            >
              {t("WhyDocsDeveloper")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-automation-api"
              className="oo-header-menu-mb-4"
              href={getBaseUrl("/automation-api")}
              variant="small"
              active={highlight?.linkId}
            >
              {t("AutomationAPI")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-conversion-api"
              className="oo-header-menu-mb-4"
              href={getBaseUrl("/conversion-api")}
              variant="small"
              active={highlight?.linkId}
            >
              {t("ConversionAPI")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-document-builder"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16"
              href={getBaseUrl("/document-builder")}
              variant="small"
              active={highlight?.linkId}
            >
              {t("DocumentBuilder")}
            </MenuLink>

            <MenuLink
              id="oo-menu-link-developer-docs-pricing"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/developer-edition-prices")}
              icon="pricing"
              active={highlight?.linkId}
            >
              {t("Pricing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-launch-demo"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/see-it-in-action?developer=edition")}
              icon="launch-demo"
            >
              {t("LaunchDemo")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-developer-docs-get-it-now"
              href={getBaseUrl("/download-developer#docs-developer")}
              icon="get-in-now"
              active={highlight?.linkId}
            >
              {t("GetItNow")}
            </MenuLink>
          </div>
          <div className="oo-header-menu-item">
            <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("DocSpaceDeveloper")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-why-docspace-developer"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docspace-developer")}
              icon="why-docspace-developer"
              active={highlight?.linkId}
            >
              {t("WhyDocSpaceDeveloper")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-developer-docspace-pricing"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docspace-developer-prices")}
              icon="pricing"
              active={highlight?.linkId}
            >
              {t("Pricing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-developer-docspace-get-in-now"
              href={getBaseUrl("download-developer#docspace-developer")}
              icon="get-in-now"
              active={highlight?.linkId}
            >
              {t("GetItNow")}
            </MenuLink>
          </div>
        </div>

        <div className="oo-header-menu-bottom oo-header-menu-bottom--end">
          <MenuLink
            id="oo-menu-link-api-docs"
            className="oo-header-menu-mr-24 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
            href="https://api.onlyoffice.com/"
            target="_blank"
            icon="api-documentation"
            variant="small"
            active={highlight?.linkId}
          >
            {t("APIDocs")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-developer-contact"
            href={`mailto:sales@onlyoffice.com?subject=${t(
              "ONLYOFFICE%20Developer%20request",
            )}`}
            icon="contact-sales"
            variant="small"
            active={highlight?.linkId}
          >
            {t("ContactSales")}
          </MenuLink>
        </div>
      </div>
    </MenuItem>
  );
};

export { Developers };

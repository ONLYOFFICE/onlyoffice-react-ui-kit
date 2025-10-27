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
import "./Pricing.scss";
import { Link } from "../../../../../../sub-components/Link/index.jsx";
import { MenuItem } from "../../sub-components/MenuItem/index.jsx";
import { MenuLink } from "../../sub-components/MenuLink/index.jsx";
import { MenuLabel } from "../../sub-components/MenuLabel/index.jsx";
import { MenuText } from "../../sub-components/MenuText/index.jsx";

const Pricing = ({
  t,
  locale,
  getBaseUrl,
  theme,
  highlight,
  registerCloseMenu,
  handleCloseAllMenus,
}) => {
  return (
    <MenuItem
      id="oo-menu-item-btn-pricing"
      className={clsx("oo-menu-item--pricing", locale)}
      heading={t("Pricing")}
      theme={theme}
      active={highlight?.buttonId}
      registerCloseMenu={registerCloseMenu}
      handleCloseAllMenus={handleCloseAllMenus}
    >
      <div className="oo-header-menu-mob-height">
        <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column">
          <div className="oo-header-menu-item">
            <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("ForBusiness")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-pricing-docspace"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docspace-prices")}
              icon="docspace"
              active={highlight?.linkId}
            >
              {t("DocSpace")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-pricing-docs-enterprise"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docs-enterprise-prices")}
              icon="docs-enterprise"
              active={highlight?.linkId}
            >
              {t("DocsEnterprise")}
            </MenuLink>

            <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("ForDevelopers")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-pricing-docs-developer"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/developer-edition-prices")}
              icon="docs-developer"
              active={highlight?.linkId}
            >
              {t("DocsDeveloper")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-pricing-docspace-developer"
              className="oo-header-menu-mb-16 oo-header-menu-mob-mb-24"
              href={getBaseUrl("/docspace-developer-prices")}
              icon="pricing-docspace-developer"
              active={highlight?.linkId}
            >
              {t("DocSpaceDeveloper")}
            </MenuLink>

            <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("ForHomeUse")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-pricing-docs-home-server"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/docs-home-server")}
              icon="docs-home-server"
              active={highlight?.linkId}
            >
              {t("DocsHomeServer")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-pricing-docspace-family-pack"
              href={getBaseUrl("/docspace-family-pack")}
              icon="docspace-family-pack"
              active={highlight?.linkId}
            >
              {t("DocSpaceFamilyPack")}
            </MenuLink>
          </div>

          <div className="oo-header-menu-item oo-header-menu-item--bg-gray">
            <div className="oo-header-menu-block">
              <MenuLink
                id="oo-menu-link-pricing-reseller"
                className="oo-header-menu-mb-16"
                href={
                  locale === "fr"
                    ? "https://www.onlyoffice.com/blog/fr/2020/01/onlyoffice-est-reference-par-l-ugap"
                    : getBaseUrl("/find-partners")
                }
                variant="text"
                active={highlight?.linkId}
              >
                {t("BuyFromAnOOReseller")}
              </MenuLink>
              <Link
                className="oo-header-menu-block"
                href={getBaseUrl("/find-partners")}
              >
                <div
                  className={clsx(
                    "oo-header-menu-img oo-header-menu-img--pricing oo-header-menu-mb-16",
                    locale,
                  )}
                ></div>
                <MenuText>{t("BuyFromAnOOResellerDescription")}</MenuText>
              </Link>
            </div>
          </div>
        </div>

        <div className="oo-header-menu-bottom oo-header-menu-bottom--end">
          <MenuLink
            id="oo-menu-link-pricing-contact"
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

export { Pricing };

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
import Link from "next/link";
import clsx from "clsx";
import "./Partners.scss";
import { MenuItem } from "../../sub-components/MenuItem/index.jsx";
import { MenuLink } from "../../sub-components/MenuLink/index.jsx";
import { MenuText } from "../../sub-components/MenuText/index.jsx";

const Partners = ({ t, locale, getBaseUrl, theme, highlight }) => {
  return (
    <MenuItem
      id="oo-menu-item-btn-partners"
      className={clsx("oo-menu-item--partners", locale)}
      heading={t("Partners")}
      theme={theme}
      active={highlight?.buttonId}
    >
      <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column oo-header-menu-mob-height-without-header">
        <div className="oo-header-menu-item">
          <MenuLink
            id="oo-menu-link-resellers"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/resellers")}
            icon="resellers"
            active={highlight?.linkId}
          >
            {t("Resellers")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-affiliates"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/affiliates")}
            icon="affiliates"
            active={highlight?.linkId}
          >
            {t("Affiliates")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-hosting-providers"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/hosting-providers")}
            icon="hosting-providers"
            active={highlight?.linkId}
          >
            {t("HostingProviders")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-technology-partners"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/technology-partners")}
            icon="technology-partners"
            active={highlight?.linkId}
          >
            {t("TechnologyPartners")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-find-partners"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/find-partners")}
            icon="find-partners"
            active={highlight?.linkId}
          >
            {t("FindPartners")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-submit-request"
            href={getBaseUrl("/partnership-request")}
            icon="submit-request"
            active={highlight?.linkId}
          >
            {t("SubmitRequest")}
          </MenuLink>
        </div>

        <div className="oo-header-menu-item oo-header-menu-item--bg-gray">
          <Link className="oo-header-menu-block" href={getBaseUrl("/events")}>
            <MenuLink
              id="oo-menu-link-partners-events"
              className="oo-header-menu-mb-16"
              variant="text"
              active={highlight?.linkId}
            >
              {t("Events")}
            </MenuLink>
            <div className="oo-header-menu-img oo-header-menu-img--events oo-header-menu-mb-16"></div>
            <MenuText>{t("EventsDescription")}</MenuText>
          </Link>
        </div>
      </div>
    </MenuItem>
  );
};

export { Partners };

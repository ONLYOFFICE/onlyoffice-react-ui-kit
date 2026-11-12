/*
 * (c) Copyright Ascensio System SIA 2026
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

const Enterprise = ({
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
      id="oo-menu-item-btn-enterprise"
      className={clsx("oo-menu-item--enterprise", locale)}
      heading={t("Enterprise")}
      theme={theme}
      active={highlight?.buttonId}
      registerCloseMenu={registerCloseMenu}
      handleCloseAllMenus={handleCloseAllMenus}
    >
      <div className="oo-header-menu-mob-height">
        <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column">
          <div className="oo-header-menu-item">
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
              id="oo-menu-link-enterprise-get-it-now"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/download#for-enterprises")}
              icon="get-in-now"
              active={highlight?.linkId}
            >
              {t("GetItNow")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-enterprise-book-demo"
              href={getBaseUrl("/demo-order")}
              icon="book-demo"
              active={highlight?.linkId}
            >
              {t("BookDemo")}
            </MenuLink>
          </div>
        </div>
      </div>
    </MenuItem>
  );
};

export { Enterprise };

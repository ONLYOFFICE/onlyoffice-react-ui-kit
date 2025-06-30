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
import "./DownloadMenu.scss";
import { MenuItem } from "../Menu/sub-components/MenuItem/index.jsx";
import { MenuLabel } from "../Menu/sub-components/MenuLabel/index.jsx";
import { MenuLink } from "../Menu/sub-components/MenuLink/index.jsx";
import { MenuText } from "../Menu/sub-components/MenuText/index.jsx";

const DownloadMenu = ({
  t,
  locale,
  getBaseUrl,
  hasSearch,
  hasPhone,
  highlight,
  registerCloseMenu,
}) => {
  return (
    <MenuItem
      id="oo-menu-item-btn-download"
      className={clsx(
        "oo-menu-item--download",
        locale,
        !hasSearch && !hasPhone
          ? "oo-menu-item--position-1"
          : hasSearch && hasPhone
          ? "oo-menu-item--position-2"
          : hasSearch || hasPhone
          ? "oo-menu-item--position-3"
          : null,
      )}
      heading={t("Download")}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-header-menu-item">
        <MenuLabel className="oo-header-menu-mb-16">{t("Download")}</MenuLabel>
        <MenuLink
          id="oo-menu-link-enterprise-prices"
          className="oo-header-menu-mb-8"
          href={getBaseUrl("/download")}
          icon="enterprise-servers"
          active={highlight?.linkId}
        >
          {t("EnterpriseServers")}
        </MenuLink>
        <MenuText className="oo-header-menu-mb-16">
          {t("DocsAndDocSpaceForBusinessesInternalUse")}
        </MenuText>

        <MenuLink
          id="oo-menu-link-developer-servers"
          className="oo-header-menu-mb-8"
          href={getBaseUrl("/download-developer")}
          icon="developer-servers"
          active={highlight?.linkId}
        >
          {t("DeveloperServers")}
        </MenuLink>
        <MenuText className="oo-header-menu-mb-16">
          {t("DocsAndDocSpaceForSaleToCustomersUnderYourBrand")}
        </MenuText>

        <MenuLink
          id="oo-menu-link-desktop-mobile-apps"
          className="oo-header-menu-mb-8"
          href={getBaseUrl("/download-desktop")}
          icon="desktop-mobile-apps"
          active={highlight?.linkId}
        >
          {t("DesktopAndMobilesApps")}
        </MenuLink>
        <MenuText>{t("LinuxWindowsMacOSAndroidIOS")}</MenuText>
      </div>
    </MenuItem>
  );
};

export { DownloadMenu };

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
  handleCloseAllMenus,
  idSuffix = "",
}) => {
  return (
    <MenuItem
      id={`oo-menu-item-btn-download${idSuffix}`}
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
      handleCloseAllMenus={handleCloseAllMenus}
    >
      <div className="oo-header-menu-item">
        <MenuLink
          id={`oo-menu-link-download-server${idSuffix}`}
          className="oo-header-menu-mb-12"
          href={getBaseUrl("/download")}
          icon="download-server"
          active={highlight?.linkId}
        >
          {t("ForServer")}
        </MenuLink>
        <MenuLink
          id={`oo-menu-link-download-desktop-apps${idSuffix}`}
          className="oo-header-menu-mb-12"
          href={getBaseUrl("/download-desktop")}
          icon="desktop-apps"
          active={highlight?.linkId}
        >
          {t("ForPC")}
        </MenuLink>
        <MenuLink
          id={`oo-menu-link-download-mobile-apps${idSuffix}`}
          href={getBaseUrl("/download-desktop#mobile")}
          icon="mobile-apps"
          active={highlight?.linkId}
        >
          {t("ForMobile")}
        </MenuLink>
      </div>
    </MenuItem>
  );
};

export { DownloadMenu };

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
import "./download-menu.scss";

const DownloadMenu = ({ t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  return (
    <MenuItem
      className="oo-hm-item--download"
      heading={t("Download")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box">
          <div className="oo-hm-item-label">{t("Download")}</div>
          <div className="oo-hm-item-box-wrap">
            <Link className="oo-hm-item-link oo-hm-item-link--enterprise-servers" href={`${hrefLang}/download.aspx`}>{t("Enterprise servers")}</Link>
            <div className="oo-hm-item-box-text">{t("Docs and DocSpace for businesses’ internal use")}</div>
          </div>
          <div className="oo-hm-item-box-wrap">
            <Link className="oo-hm-item-link oo-hm-item-link--developer-servers" href={`${hrefLang}/download-developer.aspx`}>{t("Developer servers")}</Link>
            <div className="oo-hm-item-box-text">{t("Docs and DocSpace for sale to customers under your brand")}</div>
          </div>
          <div className="oo-hm-item-box-wrap">
            <Link className="oo-hm-item-link oo-hm-item-link--desktop-mobile-apps" href={`${hrefLang}/download-desktop.aspx`}>{t("Desktop and mobiles apps")}</Link>
            <div className="oo-hm-item-box-text">{t("Linux, Windows, macOS, Android, iOS")}</div>
          </div>
        </div>
      </div>
    </MenuItem>
  );
};

export default DownloadMenu;
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
import "./get-onlyoffice-menu.scss";

const GetOnlyofficeMenu = ({ t, hrefLang, navHidden, setNavHidden, euLocale, registerCloseMenu }) => {
  return (
    <MenuItem
      className={`oo-hm-item--get-onlyoffice ${euLocale ? "oo-hm-item--get-onlyoffice-eu" : "oo-hm-item--get-onlyoffice-default"}`}
      heading={t("Get ONLYOFFICE")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      {euLocale ? (
        <div className="oo-hm-item-wrapper">
          <div className="oo-hm-item-wrapper-box">
            <div className="oo-hm-item-box">
              <div className="oo-hm-item-box-wrap">
                <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docspace">{t("DocSpace")}</div>
                <div className="oo-hm-item-box-text">{t("Document editors integrated into secure room-based DMS")}</div>
                <div className="oo-hm-item-box-inner">
                  <div className="oo-hm-item-box-links">
                    <Link className="oo-hm-item-box-link oo-hm-item-box-link--left" href={`${hrefLang}/docspace-signin.aspx`}>{t("Sign in")}</Link>
                    /
                    <Link className="oo-hm-item-box-link oo-hm-item-box-link--right" href={`${hrefLang}/docspace-registration.aspx`}>{t("Sign up for cloud")}</Link>
                  </div>
                  <Link className="oo-hm-item-box-link" href={`${hrefLang}/download.aspx#docspace-enterprise`}>{t("Install on-premises")}</Link>
                </div>
              </div>
              <div className="oo-hm-item-box-wrap">
                <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docs-enterprise">{t("Docs Enterprise")}</div>
                <div className="oo-hm-item-box-text">{t("Document editors to integrate into your business platform")}</div>
                <div className="oo-hm-item-box-inner">
                  <div className="oo-hm-item-box-links">
                    <Link className="oo-hm-item-box-link oo-hm-item-box-link--left" href={`${hrefLang}/docs-cloud-signin.aspx`}>{t("Sign in")}</Link>
                    /
                    <Link className="oo-hm-item-box-link oo-hm-item-box-link--right" href={`${hrefLang}/docs-registration.aspx`}>{t("Sign up for cloud")}</Link>
                  </div>
                  <Link className="oo-hm-item-box-link" href={`${hrefLang}/download.aspx#docs-enterprise`}>{t("Install on-premises")}</Link>
                </div>
              </div>
            </div>
            <div className="oo-hm-item-box oo-hm-item-box--bg-gray">
              <div className="oo-hm-item-box-wrap">
                <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--workspace">{t("Workspace")}</div>
                <div className="oo-hm-item-box-text">{t("Business platform to manage your team activities")}</div>
                <div className="oo-hm-item-box-inner">
                  <Link className="oo-hm-item-box-link" href={`${hrefLang}/download-workspace.aspx`}>{t("Install on-premises")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="oo-hm-item-wrapper">
          <div className="oo-hm-item-wrapper-box">
            <div className="oo-hm-item-box oo-hm-item-box--with-border">
              <div className="oo-hm-item-label">{t("For business")}</div>
              <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docspace">{t("DocSpace")}</div>
              <div className="oo-hm-item-box-inner">
                <div className="oo-hm-item-box-links">
                  <Link className="oo-hm-item-box-link oo-hm-item-box-link--left" href={`${hrefLang}/docspace-signin.aspx`}>{t("Sign in")}</Link>
                  /
                  <Link className="oo-hm-item-box-link oo-hm-item-box-link--right" href={`${hrefLang}/docspace-registration.aspx`}>{t("Sign up for cloud")}</Link>
                </div>
                <Link className="oo-hm-item-box-link" href={`${hrefLang}/download.aspx#docspace-enterprise`}>{t("Install on-premises")}</Link>
              </div>
              <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docs-enterprise">{t("Docs Enterprise")}</div>
              <div className="oo-hm-item-box-inner">
                <div className="oo-hm-item-box-links">
                  <Link className="oo-hm-item-box-link oo-hm-item-box-link--left" href={`${hrefLang}/docs-cloud-signin.aspx`}>{t("Sign in")}</Link>
                  /
                  <Link className="oo-hm-item-box-link oo-hm-item-box-link--right" href={`${hrefLang}/docs-registration.aspx`}>{t("Sign up for cloud")}</Link>
                </div>
                <Link className="oo-hm-item-box-link" href={`${hrefLang}/download.aspx#docs-enterprise`}>{t("Install on-premises")}</Link>
              </div>
              <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--workspace">{t("Workspace")}</div>
              <div className="oo-hm-item-box-inner">
                <Link className="oo-hm-item-box-link" href={`${hrefLang}/download-workspace.aspx`}>{t("Install on-premises")}</Link>
              </div>
            </div>
            <div className="oo-hm-item-box">
              <div className="oo-hm-item-box-wrapper">
                <div className="oo-hm-item-label">{t("For developers")}</div>
                <Link className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docspace-developer" href={`${hrefLang}/download-developer.aspx#docspace-developer`}>{t("DocSpace Developer")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docs-developer" href={`${hrefLang}/download-developer.aspx#docs-developer`}>{t("Docs Developer")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--document-builder" href={`${hrefLang}/download-builder.aspx`}>{t("Document Builder")}</Link>
              </div>
              <div className="oo-hm-item-box-wrapper">
                <div className="oo-hm-item-label">{t("For community")}</div>
                <Link className="oo-hm-item-link oo-hm-item-link--workspace" href={`${hrefLang}/download-workspace.aspx#workspace-community`}>{t("Workspace Community")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--docspace-community" href={`${hrefLang}/download-community.aspx#docspace-community`}>{t("DocSpace Community")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--code-on-github" href="https://github.com/ONLYOFFICE/">{t("Code on GitHub")}</Link>
              </div>
            </div>
            <div className="oo-hm-item-box oo-hm-item-box--bg-gray">
              <div className="oo-hm-item-box-wrapper">
                <div className="oo-hm-item-label">{t("Free apps")}</div>
                <div className="oo-hm-item-box-wrap">
                  <Link className="oo-hm-item-link oo-hm-item-link--desktop" href={`${hrefLang}/desktop.aspx`}>{t("ONLYOFFICE Desktop Editors")}</Link>
                  <div className="oo-hm-item-box-text">{t("Free desktop apps for Windows, Linux, macOS")}</div>
                  <ul className="oo-hm-item-apps-list">
                    <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--windows" href={`${hrefLang}/download-desktop.aspx`}></Link></li>
                    <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--linux" href={`${hrefLang}/download-desktop.aspx`}></Link></li>
                    <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--macos" href={`${hrefLang}/download-desktop.aspx`}></Link></li>
                  </ul>
                </div>
                <div className="oo-hm-item-box-wrap oo-hm-item-box-wrap--mt">
                  <div className="oo-hm-item-link oo-hm-item-link--mobile">{t("ONLYOFFICE Documents")}</div>
                  <div className="oo-hm-item-box-text">{t("Free mobile apps for Android and iOS")}</div>
                  <ul className="oo-hm-item-apps-list">
                    <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--android" href={`${hrefLang}/download-desktop.aspx#mobile`}></Link></li>
                    <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--ios" href={`${hrefLang}/download-desktop.aspx#mobile`}></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MenuItem>
  );
};

export default GetOnlyofficeMenu;
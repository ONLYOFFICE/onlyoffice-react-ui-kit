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

const GetOnlyofficeMenu = ({ t, hrefLang, navHidden, setNavHidden }) => {
  return (
    <MenuItem className="oo-hm-item--get-onlyoffice" heading={t("Get ONLYOFFICE")} navHidden={navHidden} setNavHidden={setNavHidden}>
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
              <Link className="oo-hm-item-box-link" href={`${hrefLang}/download-docspace.aspx?from=downloadintegrationmenu#docspace-enterprise`}>{t("Install on-premises")}</Link>
            </div>
            <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docs-enterprise">{t("Docs Enterprise")}</div>
            <div className="oo-hm-item-box-inner">
              <div className="oo-hm-item-box-links">
                <Link className="oo-hm-item-box-link oo-hm-item-box-link--left" href={`${hrefLang}/docs-cloud-signin.aspx`}>{t("Sign in")}</Link>
                /
                <Link className="oo-hm-item-box-link oo-hm-item-box-link--right" href={`${hrefLang}/docs-registration.aspx`}>{t("Sign up for cloud")}</Link>
              </div>
              <Link className="oo-hm-item-box-link" href={`${hrefLang}/download-docs.aspx?from=downloadintegrationmenu#docs-enterprise`}>{t("Install on-premises")}</Link>
            </div>
            <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--workspace">{t("Workspace")}</div>
            <div className="oo-hm-item-box-inner">
              <Link className="oo-hm-item-box-link" href={`${hrefLang}/download-workspace.aspx`}>{t("Install on-premises")}</Link>
            </div>
            <Link className="oo-hm-item-link oo-hm-item-link--connectors" href={`${hrefLang}/all-connectors.aspx`}>{t("Connectors")}</Link>
          </div>
          <div className="oo-hm-item-box">
            <div className="oo-hm-item-box-wrapper">
              <div className="oo-hm-item-label">{t("For developers")}</div>
              <div className="oo-hm-item-link oo-hm-item-link-2 oo-hm-item-link--docs-developer">{t("Docs Developer")}</div>
              <div className="oo-hm-item-box-inner">
                <Link className="oo-hm-item-box-link" href={`${hrefLang}/download-docs.aspx?from=downloadintegrationmenu#docs-developer`}>{t("Install on-premises")}</Link>
              </div>
              <Link className="oo-hm-item-link oo-hm-item-link--document-builder" href={`${hrefLang}/download-builder.aspx`}>{t("Document Builder")}</Link>
            </div>
            <div className="oo-hm-item-box-wrapper">
              <div className="oo-hm-item-label">{t("For community")}</div>
              <Link className="oo-hm-item-link oo-hm-item-link--workspace" href={`${hrefLang}/download-workspace.aspx#workspace-community`}>{t("Workspace Community")}</Link>
              <Link className="oo-hm-item-link oo-hm-item-link--docspace-community" href={`${hrefLang}/download-docspace.aspx?from=downloadintegrationmenu#docspace-community`}>{t("DocSpace Community")}</Link>
              <Link className="oo-hm-item-link oo-hm-item-link--code-on-github" href="https://github.com/ONLYOFFICE/">{t("Code on GitHub")}</Link>
            </div>
          </div>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <div className="oo-hm-item-apps">
            <span className="oo-hm-item-label">{t("Desktop & mobile apps")}</span>
            <ul className="oo-hm-item-apps-list">
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--windows" href={`${hrefLang}/desktop.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--macos" href={`${hrefLang}/desktop.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--linux" href={`${hrefLang}/desktop.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--android" href={`${hrefLang}/office-for-android.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--ios" href={`${hrefLang}/office-for-ios.aspx`}></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </MenuItem>
  );
};

export default GetOnlyofficeMenu;
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

import React, { useState } from "react";
import Link from "next/link";
import MenuItem from "../../menu-item/index.jsx";

const ProductsMenu = ({ currentLocale, t, hrefLang, navHidden, setNavHidden }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileTab, setMobileTab] = useState(false);

  const appDirectoryHrefLang = `https://www.onlyoffice.com/app-directory${{ "en": "", "ar": "", "cs": "", "el": "", "hi": "", "hy": "", "it": "", "pt": "", "pt-br": "", "sr": "", "zh-hans": "/zh"}[currentLocale] ?? `/${currentLocale}`}`;

  return (
    <MenuItem className={`oo-hm-item--products ${mobileTab ? "tab-active" : ""}`} heading={t("Products")} navHidden={navHidden} setNavHidden={setNavHidden}>
      <button onClick={() => setMobileTab(false)} className="oo-hm-mobile-heading oo-hm-mobile-tab">
        {activeTab === 0 ? t("Docs") : activeTab === 1 ? t("DocSpace") : t("Workspace")}
      </button>
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-wrapper-box">
          <div className="oo-hm-item-box">
            <button onClick={() => { setActiveTab(0); setMobileTab(true) }} className={`oo-hm-item-box-item ${activeTab === 0 ? "active" : ""}`}>
              <div className="oo-hm-item-link oo-hm-item-link--docs">{t("Docs")}</div>
              <div className="oo-hm-item-box-text">{t("Doc editors to integrate into your business platform")}</div>
            </button>
            <button onClick={() => { setActiveTab(1); setMobileTab(true) }} className={`oo-hm-item-box-item ${activeTab === 1 ? "active" : ""}`}>
              <div className="oo-hm-item-link oo-hm-item-link--docspace">{t("DocSpace")}</div>
              <div className="oo-hm-item-box-text">{t("Customizable rooms for document collaboration")}</div>
            </button>
            <button onClick={() => { setActiveTab(2); setMobileTab(true) }} className={`oo-hm-item-box-item ${activeTab === 2 ? "active" : ""}`}>
              <div className="oo-hm-item-link oo-hm-item-link--workspace">{t("Workspace")}</div>
              <div className="oo-hm-item-box-text">{t("Business platform to manage your team activities")}</div>
            </button>
          </div>
          <div className="oo-hm-item-box">
            {activeTab === 0 && (
              <>
                <Link className="oo-hm-item-label" href={`${hrefLang}/office-suite.aspx`}>{t("Features overview")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--document-editor" href={`${hrefLang}/document-editor.aspx?docs=download`}>{t("Document editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--spreadsheet-editor" href={`${hrefLang}/spreadsheet-editor.aspx?docs=download`}>{t("Spreadsheet editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--presentation-editor" href={`${hrefLang}/presentation-editor.aspx?docs=download`}>{t("Presentation editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--pdf-editor" href={`${hrefLang}/pdf-editor.aspx?docs=download`}>{t("PDF editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--form-creator" href={`${hrefLang}/form-creator.aspx?docs=download`}>{t("Form creator")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--e-book-creator" href={`${hrefLang}/e-book.aspx?docs=download`}>{t("E-book creator")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--collaboration-features" href={`${hrefLang}/seamless-collaboration.aspx?docs=download`}>{t("Collaboration features")}</Link>
              </>
            )}
            {activeTab === 1 && (
              <>
                <Link className="oo-hm-item-label" href={`${hrefLang}/docspace.aspx`}>{t("Features overview")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--collaboration-rooms" href={`${hrefLang}/collaboration-rooms.aspx`}>{t("Collaboration rooms")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--meeting-rooms" href={`${hrefLang}/office-for-zoom.aspx`}>{t("Meeting rooms")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--public-rooms" href={`${hrefLang}/public-rooms.aspx`}>{t("Public rooms")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--custom-rooms" href={`${hrefLang}/custom-rooms.aspx`}>{t("Custom rooms")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--form-filling-rooms" href={`${hrefLang}/form-filling-rooms.aspx`}>{t("Form filling rooms")}</Link>

                <Link className="oo-hm-item-link oo-hm-item-link--document-editor" href={`${hrefLang}/document-editor.aspx`}>{t("Document editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--spreadsheet-editor" href={`${hrefLang}/spreadsheet-editor.aspx`}>{t("Spreadsheet editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--presentation-editor" href={`${hrefLang}/presentation-editor.aspx`}>{t("Presentation editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--pdf-editor" href={`${hrefLang}/pdf-editor.aspx`}>{t("PDF editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--form-creator" href={`${hrefLang}/form-creator.aspx`}>{t("Form creator")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--e-book-creator" href={`${hrefLang}/e-book.aspx`}>{t("E-book creator")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--markdown-editor" href={`${appDirectoryHrefLang}/markdown`}>{t("Markdown editor")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--collaboration-features" href={`${hrefLang}/seamless-collaboration.aspx`}>{t("Collaboration features")}</Link>
              </>
            )}
            {activeTab === 2 && (
              <>
                <Link className="oo-hm-item-label" href={`${hrefLang}/workspace.aspx`}>{t("Features overview")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--documents" href={`${hrefLang}/document-management.aspx`}>{t("Documents")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--crm" href={`${hrefLang}/crm.aspx`}>{t("CRM")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--projects" href={`${hrefLang}/projects.aspx`}>{t("Projects")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--mails" href={`${hrefLang}/mail.aspx`}>{t("Mails")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--calendar" href={`${hrefLang}/calendar.aspx`}>{t("Calendar")}</Link>
              </>
            )}
          </div>
          <div className="oo-hm-item-box">
            {activeTab === 0 && (
              <>
                <Link className="oo-hm-item-label" href={`${hrefLang}/all-connectors.aspx`}>{t("Connectors")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--odoo" href={`${hrefLang}/office-for-odoo.aspx`}>
                  <span className="oo-hm-item-link-new">{t("Odoo")}</span>
                  <span className="oo-hm-item-label-new">{t("New")}</span>
                </Link>
                <Link className="oo-hm-item-link oo-hm-item-link--box" href={`${hrefLang}/office-for-box.aspx`}>{t("Box")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--confluence" href={`${hrefLang}/office-for-confluence.aspx`}>{t("Confluence")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--dropbox" href={`${hrefLang}/office-for-dropbox.aspx`}>{t("Dropbox")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--moodle" href={`${hrefLang}/office-for-moodle.aspx`}>
                  <span className="oo-hm-item-link-new">{t("Moodle")}</span>
                  <span className="oo-hm-item-label-new">{t("Updated")}</span>
                </Link>
                <Link className="oo-hm-item-link oo-hm-item-link--nextcloud" href={`${hrefLang}/office-for-nextcloud.aspx`}>{t("Nextcloud")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--owncloud" href={`${hrefLang}/office-for-owncloud.aspx`}>{t("ownCloud")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--no-img" href={`${hrefLang}/all-connectors.aspx`}>{t("See more connectors")}</Link>
              </>
            )}
            {activeTab === 1 && (
              <>
                <Link className="oo-hm-item-label" href={`${hrefLang}/all-connectors.aspx`}>{t("Connectors")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--zapier" href={`${hrefLang}/office-for-zapier.aspx`}>
                  <span className="oo-hm-item-link-new">{t("Zapier")}</span>
                  <span className="oo-hm-item-label-new">{t("New")}</span>
                </Link>
                <Link className="oo-hm-item-link oo-hm-item-link--zoom" href={`${hrefLang}/office-for-zoom.aspx`}>{t("Zoom")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--wordpress" href={`${hrefLang}/office-for-wordpress.aspx`}>{t("WordPress")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--drupal" href={`${hrefLang}/office-for-drupal.aspx`}>{t("Drupal")}</Link>
                <Link className="oo-hm-item-link oo-hm-item-link--no-img" href={`${hrefLang}/all-connectors.aspx`}>{t("See more connectors")}</Link>
              </>
            )}
          </div>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <div className="oo-hm-item-apps">
            <ul className="oo-hm-item-apps-list">
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--windows" href={`${hrefLang}/desktop.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--macos" href={`${hrefLang}/desktop.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--linux" href={`${hrefLang}/desktop.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--android" href={`${hrefLang}/office-for-android.aspx`}></Link></li>
              <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--ios" href={`${hrefLang}/office-for-ios.aspx`}></Link></li>
            </ul>
          </div>
          <div className="oo-hm-item-wrapper-bottom-links">
            <Link className="oo-hm-item-link oo-hm-item-link--marketplace" href={appDirectoryHrefLang}>{t("Marketplace")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--ai-assistant" href={`${appDirectoryHrefLang}/openai`}>{t("AI assistant")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--for-desktop" href={`${hrefLang}/accessibility.aspx`}>{t("Accessibility")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--security" href={`${hrefLang}/security.aspx`}>{t("Security")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--sustainability" href={t("SustainabilityLink")}>{t("Sustainability")}</Link>
          </div>
        </div>
      </div>
    </MenuItem>
  );
};

export default ProductsMenu;
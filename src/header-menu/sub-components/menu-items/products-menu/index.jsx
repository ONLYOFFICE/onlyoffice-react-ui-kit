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

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuItem from "../../menu-item/index.jsx";
import "./products-menu.scss";

const ProductsMenu = ({ currentLocale, t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [mobileTab, setMobileTab] = useState(false);

  const templatesHrefLang = `https://templates.onlyoffice.com${{ "en": "", "el": "", "hi": "", "ar": "", "sr": "", "hy": "", "cs": "", "zh-hans": "/zh", "pt-br": "/pt" }[currentLocale] ?? `/${currentLocale}`}`;
  const appDirectoryHrefLang = `https://www.onlyoffice.com/app-directory${{ "en": "", "ar": "", "cs": "", "el": "", "hi": "", "hy": "", "it": "", "pt": "", "pt-br": "", "sr": "", "zh-hans": "/zh" }[currentLocale] ?? `/${currentLocale}`}`;

  useEffect(() => {
    setMobileTab(false);

    registerCloseMenu(() => {
      setActiveTab(null);
      setMobileTab(false);
    });
  }, [currentLocale]);

  return (
    <MenuItem
      className={`oo-hm-item--products ${mobileTab ? "tab-active" : ""}`}
      heading={t("Products")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <button onClick={() => { setActiveTab(null); setMobileTab(false) }} className="oo-hm-mobile-heading oo-hm-mobile-tab">
        {activeTab === 0 ? t("ONLYOFFICE DocSpace") : activeTab === 1 ? t("ONLYOFFICE Docs") : activeTab === 2 ? t("Other products") : ""}
      </button>
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box-buttons">
          <button onClick={() => { setActiveTab(0); setMobileTab(true) }} className={`oo-hm-item-box-button ${activeTab === 0 ? "active" : ""}`}>{t("ONLYOFFICE DocSpace")}</button>
          <button onClick={() => { setActiveTab(1); setMobileTab(true) }} className={`oo-hm-item-box-button ${activeTab === 1 ? "active" : ""}`}>{t("ONLYOFFICE Docs")}</button>
          <button onClick={() => { setActiveTab(2); setMobileTab(true) }} className={`oo-hm-item-box-button ${activeTab === 2 ? "active" : ""}`}>{t("Other products")}</button>
        </div>
        <div className="oo-hm-item-wrapper-box">
          <div className={`oo-hm-item-box oo-hm-item-box--with-border ${activeTab === 0 ? "active" : ""}`}>
            <div className="oo-hm-item-label">{t("ONLYOFFICE DocSpace")}</div>
            <div className="oo-hm-item-box-wrap">
              <Link className="oo-hm-item-link oo-hm-item-link--docspace" href={`${hrefLang}/docspace.aspx`}>{t("What is ONLYOFFICE DocSpace")}</Link>
              <div className="oo-hm-item-box-text">{t("Document editors integrated into secure room-based DMS")}</div>
            </div>
            <Link className="oo-hm-item-link oo-hm-item-link--docs" href={`${hrefLang}/office-suite.aspx`}>{t("Document editors")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--collaboration-rooms" href={`${hrefLang}/collaboration-rooms.aspx`}>{t("Collaboration rooms")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--meeting-rooms" href={`${hrefLang}/office-for-zoom.aspx`}>{t("Zoom meeting rooms")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--public-rooms" href={`${hrefLang}/public-rooms.aspx`}>{t("Public rooms")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--custom-rooms" href={`${hrefLang}/custom-rooms.aspx`}>{t("Custom rooms")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--form-filling-rooms" href={`${hrefLang}/form-filling-rooms.aspx`}>{t("Form filling rooms")}</Link>
            <div className="oo-hm-item-box-wrap oo-hm-item-box-wrap--mt">
              <Link className="oo-hm-item-link oo-hm-item-link--connectors" href={`${hrefLang}/all-connectors.aspx`}>{t("DocSpace connectors")}</Link>
              <div className="oo-hm-item-box-icons">
                <Link className="oo-hm-item-link oo-hm-item-link--zapier" href={`${hrefLang}/office-for-zapier.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--zoom" href={`${hrefLang}/office-for-zoom.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--wordpress" href={`${hrefLang}/office-for-wordpress.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--drupal" href={`${hrefLang}/office-for-drupal.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--pipedrive" href={`${hrefLang}/office-for-pipedrive.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--see-more" href={`${hrefLang}/all-connectors.aspx`}></Link>
              </div>
            </div>
          </div>
          <div className={`oo-hm-item-box oo-hm-item-box--with-border ${activeTab === 1 ? "active" : ""}`}>
            <div className="oo-hm-item-label">{t("ONLYOFFICE Docs")}</div>
            <div className="oo-hm-item-box-wrap">
              <Link className="oo-hm-item-link oo-hm-item-link--docs" href={`${hrefLang}/office-suite.aspx`}>{t("What is ONLYOFFICE Docs")}</Link>
              <div className="oo-hm-item-box-text">{t("Document editors to integrate into your business platform")}</div>
            </div>
            <Link className="oo-hm-item-link oo-hm-item-link--document-editor" href={`${hrefLang}/document-editor.aspx?docs=download`}>{t("Document editor")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--spreadsheet-editor" href={`${hrefLang}/spreadsheet-editor.aspx?docs=download`}>{t("Spreadsheet editor")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--presentation-editor" href={`${hrefLang}/presentation-editor.aspx?docs=download`}>{t("Presentation editor")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--pdf-editor" href={`${hrefLang}/pdf-editor.aspx?docs=download`}>{t("PDF editor")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--form-creator" href={`${hrefLang}/form-creator.aspx?docs=download`}>{t("Form creator")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--e-book-creator" href={`${hrefLang}/e-book.aspx?docs=download`}>{t("E-book creator")}</Link>
            <Link className="oo-hm-item-link oo-hm-item-link--collaboration-features" href={`${hrefLang}/seamless-collaboration.aspx?docs=download`}>{t("Collaboration features")}</Link>
            <div className="oo-hm-item-box-wrap oo-hm-item-box-wrap--mt">
              <Link className="oo-hm-item-link oo-hm-item-link--connectors" href={`${hrefLang}/all-connectors.aspx`}>{t("Docs connectors")}</Link>
              <div className="oo-hm-item-box-icons">
                <Link className="oo-hm-item-link oo-hm-item-link--box" href={`${hrefLang}/office-for-box.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--confluence" href={`${hrefLang}/office-for-confluence.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--dropbox" href={`${hrefLang}/office-for-dropbox.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--moodle" href={`${hrefLang}/office-for-moodle.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--nextcloud" href={`${hrefLang}/office-for-nextcloud.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--odoo" href={`${hrefLang}/office-for-odoo.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--owncloud" href={`${hrefLang}/office-for-owncloud.aspx`}></Link>
                <Link className="oo-hm-item-link oo-hm-item-link--see-more" href={`${hrefLang}/all-connectors.aspx`}></Link>
              </div>
            </div>
          </div>
          <div className={`oo-hm-item-box oo-hm-item-box--bg-gray ${activeTab === 2 ? "active" : ""}`}>
            <div className="oo-hm-item-label">{t("Other products")}</div>
            <div className="oo-hm-item-box-wrap">
              <Link className="oo-hm-item-link oo-hm-item-link--desktop" href={`${hrefLang}/desktop.aspx`}>{t("ONLYOFFICE Desktop Editors")}</Link>
              <div className="oo-hm-item-box-text">{t("Free desktop apps for Windows, Linux, macOS")}</div>
            </div>
            <div className="oo-hm-item-box-wrap oo-hm-item-box-wrap--mt">
              <div className="oo-hm-item-link oo-hm-item-link--mobile">{t("ONLYOFFICE Documents")}</div>
              <div className="oo-hm-item-box-text">{t("Free mobile apps for Android and iOS")}</div>
              <ul className="oo-hm-item-apps-list">
                <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--android" href={`${hrefLang}/office-for-android.aspx`}></Link></li>
                <li><Link className="oo-hm-item-app-link oo-hm-item-app-link--ios" href={`${hrefLang}/office-for-ios.aspx`}></Link></li>
              </ul>
            </div>
            <div className="oo-hm-item-box-wrap oo-hm-item-box-wrap--mt">
              <Link className="oo-hm-item-link oo-hm-item-link--workspace" href={`${hrefLang}/workspace.aspx`}>{t("ONLYOFFICE Workspace")}</Link>
              <div className="oo-hm-item-box-text">{t("Business platform to manage your team activities")}</div>
            </div>
            <div className="oo-hm-item-box-wrap oo-hm-item-box-wrap--mt">
              <Link className="oo-hm-item-link oo-hm-item-link--conversion-doc" href={`${hrefLang}/online-document-converter.aspx`}>{t("Online converters")}</Link>
              <div className="oo-hm-item-box-text">{t("For docs, sheets, slides, PDFs")}</div>
            </div>
          </div>
        </div>
        <div className="oo-hm-item-wrapper-bottom">
          <Link className="oo-hm-item-link oo-hm-item-link--templates" href={templatesHrefLang}>{t("Templates")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--marketplace" href={appDirectoryHrefLang}>{t("Marketplace")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--security" href={`${hrefLang}/security.aspx`}>{t("Security")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--ai-assistant" href={`${appDirectoryHrefLang}/openai`}>{t("AI assistant")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--for-desktop" href={`${hrefLang}/accessibility.aspx`}>{t("Accessibility")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--sustainability" href={t("SustainabilityLink")}>{t("Sustainability")}</Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default ProductsMenu;
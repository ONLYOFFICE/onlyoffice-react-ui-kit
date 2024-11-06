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
import locales from "./locales/index.jsx";
import "./footer-menu.scss";
import FooterItem from "./sub-components/footer-item/index.jsx";
import SocialLinks from "./sub-components/social-links/index.jsx";
import MailPopup from "./sub-components/mail-popup/index.jsx";

const FooterMenu = ({ locale, mailApiUrl, mailApiType }) => {
  const currentLocale = locale || "en";
  const t = (key) => locales[currentLocale === "zh-hans" ? "zh" : currentLocale === "pt-br" ? "pt" : currentLocale][key] || locales.en[key] || key;
  const date = new Date();
  const currentYear = date.getFullYear();
  const hrefLang = `https://www.onlyoffice.com${{ "en": "", "el": "", "hi": "", "ar": "", "sr": "", "hy": "", "zh-hans": "/zh", "pt-br": "/pt" }[currentLocale] ?? `/${currentLocale}`}`;

  const oformsHrefLang = `https://www.oforms.onlyoffice.com${{ "en": "", "el": "", "hi": "", "ar": "", "sr": "", "hy": "", "cs": "", "zh-hans": "/zh", "pt-br": "/pt" }[currentLocale] ?? `/${currentLocale}`}`;
  const blogHrefLang = `https://www.onlyoffice.com/blog${{ "en": "", "ru": "", "zh": "/zh-hans", "pt": "/pt-br"}[currentLocale] ?? `/${currentLocale}`}`;

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const handlerSetModal = () => {
    setPopupIsOpen(true);
  };

  return (
    <div className={`oo-fm ${currentLocale}`}>
      <div className="oo-fm-apps">
        <h6 className="oo-fm-apps-title">{t("Get free apps")}</h6>
        <ul className={`oo-fm-apps-items ${currentLocale}`}>
          <li><Link className="oo-fm-apps-item oo-fm-apps-item--windows" href={`${hrefLang}/download-desktop.aspx`}>{t("For Windows")}</Link></li>
          <li><Link className="oo-fm-apps-item oo-fm-apps-item--linux" href={`${hrefLang}/download-desktop.aspx`}>{t("For Linux")}</Link></li>
          <li><Link className="oo-fm-apps-item oo-fm-apps-item--macos" href={`${hrefLang}/download-desktop.aspx`}>{t("For macOS")}</Link></li>
          <li><Link className="oo-fm-apps-item oo-fm-apps-item--android" href={`${hrefLang}/download-desktop.aspx#mobile`}>{t("For Android")}</Link></li>
          <li><Link className="oo-fm-apps-item oo-fm-apps-item--ios" href={`${hrefLang}/download-desktop.aspx#mobile`}>{t("For iOS")}</Link></li>
        </ul>
      </div>
      <div className={`oo-fm-items ${currentLocale}`}>
        <div className="oo-fm-item-group">
          <FooterItem locale={locale} heading={t("Templates")}>
            <Link className="oo-fm-link" href={`${oformsHrefLang}/pdf-form-templates`}>{t("PDF form templates")}</Link>
            <Link className="oo-fm-link" href={`${oformsHrefLang}/document-templates`}>{t("Text document templates")}</Link>
            <Link className="oo-fm-link" href={`${oformsHrefLang}/spreadsheet-templates`}>{t("Spreadsheet templates")}</Link>
            <Link className="oo-fm-link" href={`${oformsHrefLang}/presentation-templates`}>{t("Presentation templates")}</Link>
          </FooterItem>
          <FooterItem locale={locale} heading={t("Converters")}>
            <Link className="oo-fm-link" href={`${hrefLang}/text-file-converter.aspx`}>{t("Convert text files")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/spreadsheet-converter.aspx`}>{t("Convert spreadsheets")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/presentation-converter.aspx`}>{t("Convert presentations")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/pdf-converter.aspx`}>{t("Convert PDFs")}</Link>
          </FooterItem>
        </div>
        <div className="oo-fm-item-group">
          <FooterItem locale={locale} heading={t("For education")}>
            <Link className="oo-fm-link" href={`${hrefLang}/office-for-students.aspx`}>{t("For students")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/office-for-educators.aspx`}>{t("For educators")}</Link>
          </FooterItem>
          <FooterItem locale={locale} heading={t("Get news")}>
            <Link className="oo-fm-link" href={blogHrefLang}>{t("Blog")}</Link>
          </FooterItem>
          <FooterItem locale={locale} heading={t("Collaborate")}>
            <Link className="oo-fm-link" href={`${hrefLang}/contribute.aspx`}>{t("For contributers")}</Link>
            <Link className="oo-fm-link" href="https://helpcenter.onlyoffice.com/guides/become-translator.aspx">{t("For translators")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/influencer-program.aspx`}>{t("For influencers")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/vacancies.aspx`}>{t("Vacancies")}</Link>
          </FooterItem>
        </div>
        <div className="oo-fm-item-group">
          <FooterItem locale={locale} heading={t("Get help")}>
            <Link className="oo-fm-link" href="https://forum.onlyoffice.com">{t("Forum")}</Link>
            <Link className="oo-fm-link" href="https://helpcenter.onlyoffice.com/index.aspx">{t("Help Center")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/training-courses.aspx`}>{t("Training courses")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/webinars.aspx`}>{t("Webinars")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/whitepapers.aspx`}>{t("White papers")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/support-contact-form.aspx`}>{t("Support contact form")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/demo-order.aspx`}>{t("Order demo")}</Link>
            <Link className="oo-fm-link" href={`${hrefLang}/legalterms.aspx`}>{t("Legal notice")}</Link>
          </FooterItem>
        </div>
        {currentLocale !== "zh" && currentLocale !== "zh-hans" &&
          <div className="oo-fm-item-group">
            <FooterItem locale={locale} heading={t("Comparison")} href={`${hrefLang}/document-editor-comparison.aspx`}>
              <Link className="oo-fm-link" href={`${hrefLang}/best-microsoft-office-alternative.aspx`}>{t("ONLYOFFICE Docs vs MS Office Online")}</Link>
              <Link className="oo-fm-link" href={`${hrefLang}/best-google-docs-alternative.aspx`}>{t("ONLYOFFICE Docs vs Google Docs")}</Link>
              <Link className="oo-fm-link" href={`${hrefLang}/best-zoho-docs-alternative.aspx`}>{t("ONLYOFFICE Docs vs Zoho Docs")}</Link>
              <Link className="oo-fm-link" href={`${hrefLang}/best-libreoffice-alternative.aspx`}>{t("ONLYOFFICE Docs vs LibreOffice")}</Link>
              <Link className="oo-fm-link" href={`${hrefLang}/best-wps-alternative.aspx`}>{t("ONLYOFFICE Docs vs WPS")}</Link>
              <Link className="oo-fm-link" href={`${hrefLang}/best-adobe-alternative.aspx`}>{t("ONLYOFFICE Docs vs Adobe Acrobat")}</Link>
              <Link className="oo-fm-link" href={`${hrefLang}/best-hancom-alternative.aspx`}>{t("ONLYOFFICE Docs vs Hancom")}</Link>
            </FooterItem>
          </div>
        }
        <div className="oo-fm-item-group">
          <FooterItem locale={locale} heading={t("Contact us")}>
            <div className="oo-fm-link-text">
              {t("Sales questions")}{["zh", "zh-hans", "ja"].includes(currentLocale) ? "" : " "}<Link className="oo-fm-link oo-fm-link--contact" href="mailto:sales@onlyoffice.com">sales@onlyoffice.com</Link>
            </div>
            <div className="oo-fm-link-text">
              {t("Partner inquiries")}{["zh", "zh-hans", "ja"].includes(currentLocale) ? "" : " "}<Link className="oo-fm-link oo-fm-link--contact" href="mailto:partners@onlyoffice.com">partners@onlyoffice.com</Link>
            </div>
            <div className="oo-fm-link-text">
              {t("Press inquiries")}{["zh", "zh-hans", "ja"].includes(currentLocale) ? "" : " "}<Link className="oo-fm-link oo-fm-link--contact" href="mailto:press@onlyoffice.com">press@onlyoffice.com</Link>
            </div>
            <Link className="oo-fm-link" href={`${hrefLang}/call-back-form.aspx`}>{t("Request a call")}</Link>
          </FooterItem>
        </div>
      </div>
      <div className="oo-fm-bottom">
        <div className="oo-fm-follow">
          <h6 className="oo-fm-follow-heading">{`${t("Follow us on")}${locale === "ja" ? " ：" : locale === "zh" ? "：" : locale === "zh-hans" ? "：" : locale === "fr" ? " :" : ":"}`}</h6>
          <SocialLinks t={t} blogHrefLang={blogHrefLang} currentLocale={currentLocale} handlerSetModal={handlerSetModal} />
        </div>
        <div className={`oo-fm-copyright-block ${currentLocale}`}>
          <span>© Ascensio System SIA 2009-{currentYear}{currentLocale === "zh" || currentLocale === "zh-hans" || currentLocale === "ja" ? "。" : "."}</span>
          <span>{t("All rights reserved")}</span>
        </div>
        <MailPopup
          t={t}
          locale={locale}
          popupIsOpen={popupIsOpen}
          setPopupIsOpen={setPopupIsOpen}
          mailApiUrl={mailApiUrl || null}
          mailApiType={mailApiType || null}
        />
      </div>
    </div>
  );
};

export { FooterMenu };
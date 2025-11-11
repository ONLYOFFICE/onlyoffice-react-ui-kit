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
import locales from "./locales/index.jsx";
import "./OOFooter.scss";
import { getUrl } from "../../utils/getUrl.jsx";
import { Link } from "../../sub-components/Link/index.jsx";
import { FooterItem } from "./sub-components/FooterItem/index.jsx";
import { SocialLinks } from "./sub-components/SocialLinks/index.jsx";
import { LanguageSelector } from "./sub-components/LanguageSelector/index.jsx";
import { HippaIcon, GdprIcon, IsoIcon, HdsIcon } from "../../icons/index.js";
import { getLink } from "../../utils/getLink.jsx";

const OOFooter = ({ locale, languages, base, mailApiUrl, mailApiType }) => {
  const t = (key) =>
    locales[locale === "zh-hans" ? "zh" : locale === "pt-br" ? "pt" : locale][
      key
    ] ||
    locales.en[key] ||
    key;

  const getBaseUrl = (path) =>
    getUrl(locale, path, base?.url, base?.withAspx, base?.localePathMap);

  return (
    <footer className="oo-footer">
      <div className={clsx("oo-footer-wrapper", locale)}>
        <div className="oo-footer-apps">
          <div className="oo-footer-apps-title">{t("GetFreeApps")}</div>
          <div className={clsx("oo-footer-apps-items", locale)}>
            <Link
              className="oo-footer-apps-item oo-footer-apps-item--windows"
              href={getBaseUrl("/download-desktop")}
            >
              {t("ForWindows")}
            </Link>
            <Link
              className="oo-footer-apps-item oo-footer-apps-item--linux"
              href={getBaseUrl("/download-desktop")}
            >
              {t("ForLinux")}
            </Link>
            <Link
              className="oo-footer-apps-item oo-footer-apps-item--macos"
              href={getBaseUrl("/download-desktop")}
            >
              {t("ForMacOS")}
            </Link>
            <Link
              className="oo-footer-apps-item oo-footer-apps-item--android"
              href={getBaseUrl("/download-desktop#mobile")}
            >
              {t("ForAndroid")}
            </Link>
            <Link
              className="oo-footer-apps-item oo-footer-apps-item--ios"
              href={getBaseUrl("/download-desktop#mobile")}
            >
              {t("ForIOS")}
            </Link>
          </div>
        </div>
        <div className={clsx("oo-footer-items", locale)}>
          <div className="oo-footer-item-group">
            <FooterItem
              locale={locale}
              heading={t("Templates")}
              href={getLink("templates", locale)}
            >
              <Link
                className="oo-footer-link"
                href={`${getLink("templates", locale)}/pdf-form-templates`}
              >
                {t("PDFFormTemplates")}
              </Link>
              <Link
                className="oo-footer-link"
                href={`${getLink("templates", locale)}/document-templates`}
              >
                {t("TextDocumentTemplates")}
              </Link>
              <Link
                className="oo-footer-link"
                href={`${getLink("templates", locale)}/spreadsheet-templates`}
              >
                {t("SpreadsheetTemplates")}
              </Link>
              <Link
                className="oo-footer-link"
                href={`${getLink("templates", locale)}/presentation-templates`}
              >
                {t("PresentationTemplates")}
              </Link>
            </FooterItem>
            <FooterItem
              locale={locale}
              heading={t("Converters")}
              href={getBaseUrl("/online-document-converter")}
            >
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/text-file-converter")}
              >
                {t("ConvertTextFiles")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/spreadsheet-converter")}
              >
                {t("ConvertSpreadsheets")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/presentation-converter")}
              >
                {t("ConvertPresentations")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/pdf-converter")}
              >
                {t("ConvertPDFs")}
              </Link>
            </FooterItem>
            <FooterItem locale={locale} heading={t("GetNews")}>
              <Link className="oo-footer-link" href={getLink("blog", locale)}>
                {t("Blog")}
              </Link>
            </FooterItem>
          </div>
          <div className="oo-footer-item-group">
            <FooterItem
              locale={locale}
              heading={t("ForEducation")}
              href={getBaseUrl("/education")}
            >
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/office-for-students")}
              >
                {t("ForStudents")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/office-for-educators")}
              >
                {t("ForEducators")}
              </Link>
            </FooterItem>
            <FooterItem locale={locale} heading={t("ForNonProfits")}>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/nonprofit-organizations")}
              >
                {t("FeaturesAndTools")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/free-cloud")}>
                {t("RequestFreeAccount")}
              </Link>
            </FooterItem>
            <FooterItem locale={locale} heading={t("Collaborate")}>
              <Link className="oo-footer-link" href={getBaseUrl("/contribute")}>
                {t("ForContributors")}
              </Link>
              <Link
                className="oo-footer-link"
                href="https://helpcenter.onlyoffice.com/guides/become-translator.aspx"
              >
                {t("ForTranslators")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/influencer-program")}
              >
                {t("ForInfluencers")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/vacancies")}>
                {t("Vacancies")}
              </Link>
            </FooterItem>
          </div>
          <div className="oo-footer-item-group">
            <FooterItem
              locale={locale}
              heading={t("Security")}
              href={getBaseUrl("/security")}
            >
              <Link className="oo-footer-link" href={getBaseUrl("/security")}>
                {t("FeaturesAndTools")}
              </Link>

              <div className="oo-footer-item-icons">
                <Link href={t("HIPAAComplianceLink")} aria-label="HIPAA">
                  <HippaIcon />
                </Link>
                <Link href={t("GDPRComplianceLink")} aria-label="GDPR">
                  <GdprIcon />
                </Link>
                <Link
                  href={t("ISO27001CertificationLink")}
                  aria-label="NetExplorer"
                >
                  <IsoIcon />
                </Link>
                <Link href={t("HDSCertificationLink")} aria-label="NetExplorer">
                  <HdsIcon />
                </Link>
              </div>
            </FooterItem>
            <FooterItem locale={locale} heading={t("GetHelp")}>
              <Link
                className="oo-footer-link"
                href="https://forum.onlyoffice.com"
              >
                {t("Forum")}
              </Link>
              <Link
                className="oo-footer-link"
                href="https://helpcenter.onlyoffice.com/index.aspx"
              >
                {t("HelpCenter")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/training-courses")}
              >
                {t("TrainingCourses")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/webinars")}>
                {t("Webinars")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/whitepapers")}
              >
                {t("WhitePapers")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/support-contact-form")}
              >
                {t("SupportContactForm")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/demo-order")}>
                {t("OrderDemo")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/legalterms")}>
                {t("LegalNotice")}
              </Link>
            </FooterItem>
          </div>
          {locale !== "zh" && locale !== "zh-hans" && (
            <div className="oo-footer-item-group">
              <FooterItem
                locale={locale}
                heading={t("Comparison")}
                href={getBaseUrl("/document-editor-comparison")}
              >
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-microsoft-office-alternative")}
                >
                  {t("OODocsVsMSOfficeOnline")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-google-docs-alternative")}
                >
                  {t("OODocsVsGoogleDocs")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-zoho-docs-alternative")}
                >
                  {t("OODocsVsZohoDocs")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-libreoffice-alternative")}
                >
                  {t("OODocsVsLibreOffice")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-wps-alternative")}
                >
                  {t("OODocsVsWPS")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-adobe-alternative")}
                >
                  {t("OODocsVsAdobeAcrobat")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-hancom-alternative")}
                >
                  {t("OODocsVsHancom")}
                </Link>
              </FooterItem>
            </div>
          )}
          <div className="oo-footer-item-group">
            <FooterItem locale={locale} heading={t("ContactUs")}>
              <div className="oo-footer-link-text">
                {t("SalesQuestions")}
                {["zh", "zh-hans", "ja"].includes(locale) ? "" : " "}
                <Link
                  className="oo-footer-link oo-footer-link--contact"
                  href="mailto:sales@onlyoffice.com"
                >
                  sales@onlyoffice.com
                </Link>
              </div>
              <div className="oo-footer-link-text">
                {t("PartnerInquiries")}
                {["zh", "zh-hans", "ja"].includes(locale) ? "" : " "}
                <Link
                  className="oo-footer-link oo-footer-link--contact"
                  href="mailto:partners@onlyoffice.com"
                >
                  partners@onlyoffice.com
                </Link>
              </div>
              <div className="oo-footer-link-text">
                {t("PressInquiries")}
                {["zh", "zh-hans", "ja"].includes(locale) ? "" : " "}
                <Link
                  className="oo-footer-link oo-footer-link--contact"
                  href="mailto:press@onlyoffice.com"
                >
                  press@onlyoffice.com
                </Link>
              </div>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/call-back-form")}
              >
                {t("RequestACall")}
              </Link>
            </FooterItem>
          </div>
        </div>
        <div className="oo-footer-bottom">
          <div className="oo-footer-follow">
            <div className="oo-footer-follow-heading">{t("FollowUsOn")}</div>
            <SocialLinks
              t={t}
              locale={locale}
              mailApiUrl={mailApiUrl}
              mailApiType={mailApiType}
            />
          </div>
          <div className="oo-footer-copyright">
            <LanguageSelector locale={locale} languages={languages} />
            <div className={clsx("oo-footer-copyright-block", locale)}>
              <span>
                © Ascensio System SIA 2009-{new Date().getFullYear()}
                {locale === "zh" || locale === "zh-hans" || locale === "ja"
                  ? "。"
                  : "."}
              </span>
              <span>{t("AllRightsReserved")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { OOFooter };

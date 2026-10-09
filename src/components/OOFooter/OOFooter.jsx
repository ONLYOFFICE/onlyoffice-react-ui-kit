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
import locales from "./locales/index.jsx";
import "./OOFooter.scss";
import { getUrl } from "../../utils/getUrl.jsx";
import { Link } from "../../sub-components/Link/index.jsx";
import { FooterItem } from "./sub-components/FooterItem/index.jsx";
import { SocialLinks } from "./sub-components/SocialLinks/index.jsx";
import { LanguageSelector } from "./sub-components/LanguageSelector/index.jsx";
import { HippaIcon, GdprIcon } from "../../icons/index.js";
import { getLink } from "../../utils/getLink.jsx";

const OOFooter = ({
  locale,
  languages,
  base,
  mailApiUrl,
  mailApiType,
  theme,
}) => {
  const t = (key) =>
    locales[locale === "zh-hans" ? "zh" : locale === "pt-br" ? "pt" : locale][
      key
    ] ||
    locales.en[key] ||
    key;

  const getBaseUrl = (path) =>
    getUrl(locale, path, base?.url, base?.withAspx, base?.localePathMap);

  const isDark = theme === "dark";

  return (
    <footer className={clsx("oo-footer", isDark && "oo-footer--theme-dark")}>
      <div className={clsx("oo-footer-wrapper", locale)}>
        <div
          className={clsx(
            "oo-footer-apps",
            isDark && "oo-footer-apps--theme-dark",
          )}
        >
          <div className="oo-footer-apps-title">{t("GetFreeApps")}</div>
          <div className={clsx("oo-footer-apps-items", locale)}>
            <Link
              className={clsx(
                "oo-footer-apps-item oo-footer-apps-item--windows",
                isDark && "oo-footer-apps-item--theme-dark",
              )}
              href={getBaseUrl("/download-desktop")}
            >
              {t("ForWindows")}
            </Link>
            <Link
              className={clsx(
                "oo-footer-apps-item oo-footer-apps-item--linux",
                isDark && "oo-footer-apps-item--theme-dark",
              )}
              href={getBaseUrl("/download-desktop")}
            >
              {t("ForLinux")}
            </Link>
            <Link
              className={clsx(
                "oo-footer-apps-item oo-footer-apps-item--macos",
                isDark && "oo-footer-apps-item--theme-dark",
              )}
              href={getBaseUrl("/download-desktop")}
            >
              {t("ForMacOS")}
            </Link>
            <Link
              className={clsx(
                "oo-footer-apps-item oo-footer-apps-item--android",
                isDark && "oo-footer-apps-item--theme-dark",
              )}
              href={getBaseUrl("/download-desktop#mobile")}
            >
              {t("ForAndroid")}
            </Link>
            <Link
              className={clsx(
                "oo-footer-apps-item oo-footer-apps-item--ios",
                isDark && "oo-footer-apps-item--theme-dark",
              )}
              href={getBaseUrl("/download-desktop#mobile")}
            >
              {t("ForIOS")}
            </Link>
          </div>
        </div>
        <div className={clsx("oo-footer-items", locale)}>
          <div className="oo-footer-item-group oo-footer-item-group--features">
            <FooterItem
              theme={theme}
              locale={locale}
              heading={t("Features")}
              href={getBaseUrl("/docs")}
            >
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/word-processor")}
              >
                {t("WordProcessing")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/sheets")}>
                {t("SpreadsheetEditing")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/slides")}>
                {t("PresentationCreation")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/form-creator")}
              >
                {t("FormBuildingFilling")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/pdf-editor")}>
                {t("PDFEditing")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/e-book")}>
                {t("EbookCreation")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/diagram-viewer")}
              >
                {t("DiagramViewing")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/seamless-collaboration")}
              >
                {t("Collaboration")}
              </Link>
              <Link
                className="oo-footer-link"
                href={getBaseUrl("/sign-documents")}
              >
                {t("Signature")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/security")}>
                {t("SecurityCompliance")}
              </Link>
            </FooterItem>
          </div>
          <div className="oo-footer-item-group oo-footer-item-group--resources">
            <FooterItem
              theme={theme}
              locale={locale}
              heading={t("Templates")}
              href={getLink("templates", locale)}
            ></FooterItem>
            <FooterItem
              theme={theme}
              locale={locale}
              heading={t("Collaborate")}
            >
              <Link className="oo-footer-link" href={getBaseUrl("/contribute")}>
                {t("ForContributors")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/vacancies")}>
                {t("Vacancies")}
              </Link>
            </FooterItem>
            <FooterItem
              theme={theme}
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
          </div>
          {locale !== "zh" && locale !== "zh-hans" && (
            <div className="oo-footer-item-group oo-footer-item-group--comparison">
              <FooterItem
                theme={theme}
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
                  href={getBaseUrl("/best-collabora-alternative")}
                >
                  {t("OODocsVsCollabora")}
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
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-foxit-alternative")}
                >
                  {t("OODocsVsFoxit")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-zoho-office-integrator-alternative")}
                >
                  {t("OODocsVsZohoOffice")}
                </Link>
                <Link
                  className="oo-footer-link"
                  href={getBaseUrl("/best-quip-alternative")}
                >
                  {t("OODocsVsQuip")}
                </Link>
              </FooterItem>
            </div>
          )}
          <div className="oo-footer-item-group oo-footer-item-group--help">
            <FooterItem theme={theme} locale={locale} heading={t("GetHelp")}>
              <Link
                className="oo-footer-link"
                href={"https://community.onlyoffice.com"}
              >
                {t("Community")}
              </Link>
              <Link
                className="oo-footer-link"
                href={"https://helpcenter.onlyoffice.com/index.aspx"}
              >
                {t("HelpCenter")}
              </Link>
              <Link className="oo-footer-link" href={getBaseUrl("/academy")}>
                {t("ONLYOFFICEAcademy")}
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
            </FooterItem>
            <FooterItem
              theme={theme}
              locale={locale}
              heading={t("Security")}
              href={getBaseUrl("/security")}
            >
              <Link className="oo-footer-link" href={getBaseUrl("/security")}>
                {t("FeaturesAndTools")}
              </Link>
              <div
                className={clsx(
                  "oo-footer-item-icons",
                  isDark && "oo-footer-item-icons--theme-dark",
                )}
              >
                <Link
                  href={t("HIPAAComplianceLink")}
                  locale={false}
                  aria-label="HIPAA"
                >
                  <HippaIcon />
                </Link>
                <Link
                  href={t("GDPRComplianceLink")}
                  locale={false}
                  aria-label="GDPR"
                >
                  <GdprIcon />
                </Link>
              </div>
            </FooterItem>
          </div>
          <div className="oo-footer-item-group oo-footer-item-group--contacts">
            <FooterItem theme={theme} locale={locale} heading={t("GetNews")}>
              <Link
                className="oo-footer-link"
                href={getLink("blog", locale)}
                locale={false}
              >
                {t("Blog")}
              </Link>
            </FooterItem>
            <FooterItem theme={theme} locale={locale} heading={t("ContactUs")}>
              <Link
                className="oo-footer-link"
                href={"mailto:sales@onlyoffice.com"}
              >
                {t("SalesQuestions")}
              </Link>
              <Link
                className="oo-footer-link"
                href={"mailto:partners@onlyoffice.com"}
              >
                {t("PartnerInquiries")}
              </Link>
              <Link
                className="oo-footer-link"
                href={"mailto:press@onlyoffice.com"}
              >
                {t("PressInquiries")}
              </Link>
              <Link
                className={clsx(
                  "oo-footer-link oo-footer-link--call",
                  isDark && "oo-footer-link--theme-dark",
                )}
                href={getBaseUrl("/call-back-form")}
              >
                {t("RequestACall")}
              </Link>
            </FooterItem>
          </div>
        </div>
        <div
          className={clsx(
            "oo-footer-bottom",
            isDark && "oo-footer-bottom--theme-dark",
          )}
        >
          <div
            className={clsx(
              "oo-footer-follow",
              isDark && "oo-footer-follow--theme-dark",
            )}
          >
            <div className="oo-footer-follow-heading">{t("FollowUsOn")}</div>
            <SocialLinks
              theme={theme}
              t={t}
              locale={locale}
              mailApiUrl={mailApiUrl}
              mailApiType={mailApiType}
            />
          </div>
          <div className="oo-footer-copyright">
            <LanguageSelector
              theme={theme}
              locale={locale}
              languages={languages}
            />
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

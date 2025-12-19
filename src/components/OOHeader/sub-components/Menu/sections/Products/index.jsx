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

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./Products.scss";
import { Link } from "../../../../../../sub-components/Link/index.jsx";
import { MenuItem } from "../../sub-components/MenuItem/index.jsx";
import { MenuLink } from "../../sub-components/MenuLink/index.jsx";
import { MenuLabel } from "../../sub-components/MenuLabel/index.jsx";
import { MenuText } from "../../sub-components/MenuText/index.jsx";
import { getLink } from "../../../../../../utils/getLink.jsx";

const Products = ({
  t,
  locale,
  getBaseUrl,
  theme,
  highlight,
  registerCloseMenu,
  handleCloseAllMenus,
}) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const resizeWindow = () => {
      if (window.innerWidth <= 1024) {
        setActiveTab(null);
      }
    };

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  registerCloseMenu(() => {
    setActiveTab(null);
  });

  return (
    <MenuItem
      id="oo-menu-item-btn-products"
      className={clsx(
        "oo-menu-item--products",
        locale,
        activeTab !== null && "oo-menu-item--hide",
      )}
      heading={t("Products")}
      theme={theme}
      active={highlight?.buttonId}
      registerCloseMenu={registerCloseMenu}
      handleCloseAllMenus={handleCloseAllMenus}
    >
      <button
        onClick={() => {
          setActiveTab(null);
        }}
        className={clsx(
          "oo-menu-item-box-heading",
          locale,
          activeTab !== null && "oo-menu-item-box-heading--show",
        )}
      >
        {activeTab === 0
          ? t("OODocSpace")
          : activeTab === 1
          ? t("OODocs")
          : activeTab === 2
          ? t("OtherProducts")
          : ""}
      </button>

      <div className="oo-header-menu-mob-height">
        <div
          className={clsx(
            "oo-header-menu-item-box-buttons",
            activeTab !== null && "oo-header-menu-item-box-buttons--hide",
          )}
        >
          <button
            onClick={() => {
              setActiveTab(0);
            }}
            className={clsx(
              "oo-header-menu-item-box-button",
              locale,
              highlight?.linkId?.match(/^oo-menu-link-docspace($|[-])/) &&
                "oo-header-menu-item-box-button--mobile-active",
            )}
          >
            {t("OODocSpace")}
          </button>
          <button
            onClick={() => {
              setActiveTab(1);
            }}
            className={clsx(
              "oo-header-menu-item-box-button",
              locale,
              highlight?.linkId?.match(/^oo-menu-link-docs($|[-])/) &&
                "oo-header-menu-item-box-button--mobile-active",
            )}
          >
            {t("OODocs")}
          </button>
          <button
            onClick={() => {
              setActiveTab(2);
            }}
            className={clsx(
              "oo-header-menu-item-box-button",
              locale,
              highlight?.linkId?.match(/^oo-menu-link-other-products($|[-])/) &&
                "oo-header-menu-item-box-button--mobile-active",
            )}
          >
            {t("OtherProducts")}
          </button>
        </div>

        <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column">
          <div
            className={clsx(
              "oo-header-menu-item-box-item oo-header-menu-item oo-header-menu-item--with-border",
              activeTab === 0 && "active",
            )}
          >
            <MenuLabel className="oo-header-menu-mb-16 oo-menu-item-box-label">
              {t("OODocSpace")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-docspace-what-is"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/docspace")}
              icon="docspace"
              active={highlight?.linkId}
            >
              {t("WhatIsOODocSpace")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("DocumentEditorsIntegratedIntoSecureRoomBasedDMS")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-docspace-document-editors"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-24"
              href={getBaseUrl(
                locale === "en"
                  ? "/docs?docspace=registration"
                  : "/office-suite?docspace=registration",
              )}
              icon="docs"
              variant="small"
              active={highlight?.linkId}
            >
              {t("DocumentEditors")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docspace-collaboration-rooms"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/collaboration-rooms")}
              icon="collaboration-rooms"
              variant="small"
              active={highlight?.linkId}
            >
              {t("CollaborationRooms")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docspace-meeting-rooms"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/office-for-zoom")}
              icon="meeting-rooms"
              variant="small"
              active={highlight?.linkId}
            >
              {t("MeetingRooms")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docspace-public-rooms"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/public-rooms")}
              icon="public-rooms"
              variant="small"
              active={highlight?.linkId}
            >
              {t("PublicRooms")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docspace-custom-rooms"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/custom-rooms")}
              icon="custom-rooms"
              variant="small"
              active={highlight?.linkId}
            >
              {t("CustomRooms")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docspace-form-filling-rooms"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/form-filling-rooms")}
              icon="form-filling-rooms"
              variant="small"
              active={highlight?.linkId}
            >
              {t("FormFillingRooms")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docspace-virtual-data-rooms"
              className="oo-header-menu-mb-16"
              href={getBaseUrl("/virtual-data-rooms")}
              icon="virtual-data-rooms"
              variant="small"
              active={highlight?.linkId}
            >
              {t("VirtualDataRooms")}
            </MenuLink>

            <MenuLink
              id="oo-menu-link-docspace-all-connectors"
              className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
              href={getBaseUrl("/all-connectors")}
              icon="connectors"
              active={highlight?.linkId}
            >
              {t("DocSpaceConnectors")}
            </MenuLink>

            <div className="oo-menu-item-icons">
              <MenuLink
                id="oo-menu-link-docspace-zapier"
                href={getBaseUrl("/office-for-zapier")}
                icon="zapier"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-docspace-zoom"
                href={getBaseUrl("/office-for-zoom")}
                icon="zoom"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-docspace-wordpress"
                href={getBaseUrl("/office-for-wordpress")}
                icon="wordpress"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-docspace-drupal"
                href={getBaseUrl("/office-for-drupal")}
                icon="drupal"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-docspace-pipedrive"
                href={getBaseUrl("/office-for-pipedrive")}
                icon="pipedrive"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-docspace-moodle"
                href={getBaseUrl("/office-for-moodle")}
                icon="moodle"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-docspace-see-more"
                href={getBaseUrl("/all-connectors")}
                icon="see-more"
                variant="icon"
              />
            </div>
          </div>
          <div
            className={clsx(
              "oo-header-menu-item-box-item oo-header-menu-item",
              activeTab === 1 && "active",
            )}
          >
            <MenuLabel className="oo-header-menu-mb-16 oo-menu-item-box-label">
              {t("OODocs")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-docs-what-is"
              className="oo-header-menu-mb-8"
              href={getBaseUrl(locale === "en" ? "/docs" : "/office-suite")}
              icon="docs"
              active={highlight?.linkId}
            >
              {t("WhatIsOODocs")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("DocumentEditorsToIntegrateIntoYourBusinessPlatform")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-docs-document-editor"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl(
                locale === "en"
                  ? "/word-processor?docs=download"
                  : "/document-editor?docs=download",
              )}
              icon="document-editor"
              variant="small"
              active={highlight?.linkId}
            >
              {t("DocumentEditor")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-spreadsheet-editor"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl(
                locale === "en"
                  ? "/sheets?docs=download"
                  : "/spreadsheet-editor?docs=download",
              )}
              icon="spreadsheet-editor"
              variant="small"
              active={highlight?.linkId}
            >
              {t("SpreadsheetEditor")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-presentation-editor"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/presentation-editor?docs=download")}
              icon="presentation-editor"
              variant="small"
              active={highlight?.linkId}
            >
              {t("PresentationEditor")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-pdf-editor"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/pdf-editor?docs=download")}
              icon="pdf-editor"
              variant="small"
              active={highlight?.linkId}
            >
              {t("PDFEditor")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-form-creator"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/form-creator?docs=download")}
              icon="form-creator"
              variant="small"
              active={highlight?.linkId}
            >
              {t("FormCreator")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-e-book-creator"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/e-book?docs=download")}
              icon="e-book-creator"
              variant="small"
              active={highlight?.linkId}
            >
              {t("EbookCreator")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-diagram-viewer"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/diagram-viewer")}
              icon="digram-viewer"
              variant="small"
              active={highlight?.linkId}
            >
              {t("DiagramViewer")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-seamless-collaboration"
              className="oo-header-menu-mb-16 oo-header-menu-mob-mb-24"
              href={getBaseUrl("/seamless-collaboration?docs=download")}
              icon="collaboration-features"
              variant="small"
              active={highlight?.linkId}
            >
              {t("CollaborationFeatures")}
            </MenuLink>

            <MenuLink
              id="oo-menu-link-docs-all-connectors"
              className="oo-header-menu-mb-12"
              href={getBaseUrl("/all-connectors")}
              icon="connectors"
              active={highlight?.linkId}
            >
              {t("DocsConnectors")}
            </MenuLink>

            <div className="oo-menu-item-icons">
              {locale === "zh" || locale === "zh-hans" ? (
                <>
                  <MenuLink
                    id="oo-menu-link-docs-alfresco"
                    href={getBaseUrl("/office-for-alfresco")}
                    icon="alfresco"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-confluence"
                    href={getBaseUrl("/office-for-confluence")}
                    icon="confluence"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-moodle"
                    href={getBaseUrl("/office-for-moodle")}
                    icon="moodle"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-nextcloud"
                    href={getBaseUrl("/office-for-nextcloud")}
                    icon="nextcloud"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-odoo"
                    href={getBaseUrl("/office-for-odoo")}
                    icon="odoo"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-seafile"
                    href={getBaseUrl("/all-connectors#seafile")}
                    icon="seafile"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-wordpress"
                    href={getBaseUrl("/office-for-wordpress")}
                    icon="wordpress"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-telegram"
                    href={getBaseUrl("/office-for-telegram")}
                    icon="telegram"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-see"
                    href={getBaseUrl("/all-connectors")}
                    icon="see-more"
                    variant="icon"
                  />
                </>
              ) : (
                <>
                  <MenuLink
                    id="oo-menu-link-docs-box"
                    href={getBaseUrl("/office-for-box")}
                    icon="box"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-confluence"
                    href={getBaseUrl("/office-for-confluence")}
                    icon="confluence"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-dropbox"
                    href={getBaseUrl("/office-for-dropbox")}
                    icon="dropbox"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-moodle"
                    href={getBaseUrl("/office-for-moodle")}
                    icon="moodle"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-nextcloud"
                    href={getBaseUrl("/office-for-nextcloud")}
                    icon="nextcloud"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-odoo"
                    href={getBaseUrl("/office-for-odoo")}
                    icon="odoo"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-owncloud"
                    href={getBaseUrl("/office-for-owncloud")}
                    icon="owncloud"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-telegram"
                    href={getBaseUrl("/office-for-telegram")}
                    icon="telegram"
                    variant="icon"
                  />
                  <MenuLink
                    id="oo-menu-link-docs-see-more"
                    href={getBaseUrl("/all-connectors")}
                    icon="see-more"
                    variant="icon"
                  />
                </>
              )}
            </div>
          </div>
          <div
            className={clsx(
              "oo-header-menu-item-box-item oo-header-menu-item oo-header-menu-item--bg-gray",
              activeTab === 2 && "active",
            )}
          >
            <MenuLabel className="oo-header-menu-mb-16 oo-menu-item-box-label">
              {t("OtherProducts")}
            </MenuLabel>
            <div className="oo-header-menu-color-highlight">
              <MenuLink
                id="oo-menu-link-ai-assistant"
                className="oo-header-menu-mb-8"
                href={getBaseUrl("/ai-assistants")}
                icon="ai-assistant"
                active={highlight?.linkId}
              >
                {t("AIInONLYOFFICE")}
              </MenuLink>
              <MenuText>
                {t("WorkSmarterOnYourDocsWithAIAssistantsAndAgents")}
              </MenuText>
            </div>
            <MenuLink
              id="oo-menu-link-other-editors-desktop-editors"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/mcp-server")}
              icon="desktop"
              active={highlight?.linkId}
            >
              {t("OOMcpServer")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-16">
              {t("ConnectAiAgentsAndTools")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-other-editors-desktop-editors"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/desktop")}
              icon="desktop"
              active={highlight?.linkId}
            >
              {t("OODesktopEditors")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-16">
              {t("FreeDesktopAppsForWindowsLinuxmacOS")}
            </MenuText>

            <MenuLink
              id="oo-menu-link-other-editors-documents"
              className="oo-header-menu-mb-8"
              icon="mobile"
              active={highlight?.linkId}
            >
              {t("OODocuments")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-8">
              {t("FreeMobileAppsForAndroidAndIOS")}
            </MenuText>

            <div className="oo-header-menu-d-flex oo-header-menu-mb-16">
              <Link
                className="oo-header-menu-app-link oo-header-menu-app-link--android oo-header-menu-mr-12"
                href={getBaseUrl("/office-for-android")}
              />
              <Link
                className="oo-header-menu-app-link oo-header-menu-app-link--ios"
                href={getBaseUrl("/office-for-ios")}
              />
            </div>

            <MenuLink
              id="oo-menu-link-other-editors-workspace"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/workspace")}
              icon="workspace"
              active={highlight?.linkId}
            >
              {t("OOWorkspace")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-16">
              {t("BusinessPlatformToManageYourTeamActivities")}
            </MenuText>
          </div>
        </div>
        <div className="oo-header-menu-bottom-with-button">
          <div className="oo-header-menu-bottom">
            <MenuLink
              id="oo-menu-link-templates"
              className="oo-header-menu-mr-16 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
              href={getLink("templates", locale)}
              icon="templates"
              variant="small"
              active={highlight?.linkId}
            >
              {t("Templates")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-marketplace"
              className="oo-header-menu-mr-16 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
              href={getLink("marketplace", locale)}
              icon="marketplace"
              variant="small"
              active={highlight?.linkId}
              locale={false}
            >
              {t("Marketplace")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-security"
              className="oo-header-menu-mr-16 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/security")}
              icon="security"
              variant="small"
              active={highlight?.linkId}
            >
              {t("Security")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-other-editors-online-converters"
              className="oo-header-menu-mr-16 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/online-document-converter")}
              icon="conversion-doc"
              variant="small"
              active={highlight?.linkId}
            >
              {t("OnlineConverters")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-accessibility"
              className="oo-header-menu-mr-16 oo-header-menu-mob-mr-0 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/accessibility")}
              icon="for-desktop"
              variant="small"
              active={highlight?.linkId}
            >
              {t("Accessibility")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-sustainability"
              href={t("SustainabilityLink")}
              icon="sustainability"
              variant="small"
              active={highlight?.linkId}
            >
              {t("Sustainability")}
            </MenuLink>
          </div>

          <Link className="oo-book-demo-btn" href={getBaseUrl("/demo-order")}>
            {t("BookDemo")}
          </Link>
        </div>
      </div>
    </MenuItem>
  );
};

export { Products };

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
      if (window.innerWidth <= 1023) {
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
          ? t("OODocs")
          : activeTab === 1
            ? t("Apps")
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
              highlight?.linkId?.match(/^oo-menu-link-docs($|[-])/) &&
                "oo-header-menu-item-box-button--mobile-active",
            )}
          >
            {t("OODocs")}
          </button>
          <button
            onClick={() => {
              setActiveTab(1);
            }}
            className={clsx(
              "oo-header-menu-item-box-button",
              locale,
              highlight?.linkId?.match(/^oo-menu-link-apps($|[-])/) &&
                "oo-header-menu-item-box-button--mobile-active",
            )}
          >
            {t("Apps")}
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
              {t("OODocs")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-docs-what-is"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/docs")}
              icon="docs"
              active={highlight?.linkId}
            >
              {t("Overview")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("DocsDesc")}
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
              {t("WordProcessing")}
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
              {t("SpreadsheetEditing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-presentation-editor"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/presentation-editor?docs=download")}
              icon="presentation-editor"
              variant="small"
              active={highlight?.linkId}
            >
              {t("PresentationCreation")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-form-creator"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/form-creator?docs=download")}
              icon="form-creator"
              variant="small"
              active={highlight?.linkId}
            >
              {t("FormBuildingFilling")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-pdf-editor"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/pdf-editor?docs=download")}
              icon="pdf-editor"
              variant="small"
              active={highlight?.linkId}
            >
              {t("PDFEditing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-e-book-creator"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/e-book?docs=download")}
              icon="e-book-creator"
              variant="small"
              active={highlight?.linkId}
            >
              {t("EbookCreation")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-diagram-viewer"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/diagram-viewer")}
              icon="digram-viewer"
              variant="small"
              active={highlight?.linkId}
            >
              {t("DiagramViewing")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-seamless-collaboration"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/seamless-collaboration")}
              icon="collaboration-features"
              variant="small"
              active={highlight?.linkId}
            >
              {t("Collaboration")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-sing"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("#")}
              icon="sign"
              variant="small"
              active={highlight?.linkId}
            >
              {t("Signature")}
            </MenuLink>
            <MenuLink
              id="oo-menu-link-docs-security"
              className="oo-header-menu-mb-4 oo-header-menu-mob-mb-12"
              href={getBaseUrl("/security")}
              icon="security"
              variant="small"
              active={highlight?.linkId}
            >
              {t("SecurityCompliance")}
            </MenuLink>
          </div>
          <div
            className={clsx(
              "oo-header-menu-item-box-item oo-header-menu-item",
              activeTab === 1 && "active",
            )}
          >
            <MenuLabel className="oo-header-menu-mb-16 oo-menu-item-box-label">
              {t("Apps")}
            </MenuLabel>
            <MenuLink
              id="oo-menu-link-apps-rooms"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/rooms")}
              icon="rooms"
              active={highlight?.linkId}
            >
              {t("Rooms")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("RoomsDesc")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-apps-files"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/files")}
              icon="files"
              active={highlight?.linkId}
            >
              {t("Files")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("FilesDesc")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-apps-forms"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("#")}
              icon="forms"
              active={highlight?.linkId}
            >
              {t("Forms")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("FormsDesc")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-apps-vault"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("#")}
              icon="vault"
              active={highlight?.linkId}
            >
              {t("Vault")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("VaultDesc")}
            </MenuText>
            <MenuText className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
              {t("SingDesc")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-apps-ai-agents"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("#")}
              icon="ai-agents"
              active={highlight?.linkId}
            >
              {t("AIAgents")}
            </MenuLink>
            <MenuText>{t("AIAgentsDesc")}</MenuText>
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
            <MenuLink
              id="oo-menu-link-other-editors-desktop-editors"
              className="oo-header-menu-mb-4"
              href={getBaseUrl("/desktop")}
              icon="desktop"
              active={highlight?.linkId}
            >
              {t("OODesktopEditors")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12">
              {t("FreeDesktopAppsForWindowsLinuxmacOS")}
            </MenuText>
            <MenuLink
              id="oo-menu-link-other-editors-documents"
              className="oo-header-menu-mb-4"
              icon="mobile"
              active={highlight?.linkId}
            >
              {t("OODocuments")}
            </MenuLink>
            <MenuText className="oo-header-menu-mb-12">
              {t("FreeMobileAppsForAndroidAndIOS")}
            </MenuText>

            <MenuLink
              id="oo-menu-link-other-editors-all-connectors"
              className="oo-header-menu-mb-8"
              href={getBaseUrl("/all-connectors")}
              icon="connectors"
              active={highlight?.linkId}
            >
              {t("OOConnectors")}
            </MenuLink>

            <div className="oo-header-menu-d-flex oo-header-menu-mb-12">
              <MenuLink
                id="oo-menu-link-other-editors-owncloud"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-owncloud")}
                icon="owncloud"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-odoo"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-odoo")}
                icon="odoo"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-alfresco"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-alfresco")}
                icon="alfresco"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-sharepoint"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-sharepoint")}
                icon="sharepoint"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-moodle"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-moodle")}
                icon="moodle"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-dropbox"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-dropbox")}
                icon="dropbox"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-box"
                className="oo-header-menu-mr-8"
                href={getBaseUrl("/office-for-box")}
                icon="box"
                variant="icon"
              />
              <MenuLink
                id="oo-menu-link-other-editors-see-more"
                href={getBaseUrl("/all-connectors")}
                icon="see-more"
                variant="icon"
              />
            </div>

            <MenuLink
              id="oo-menu-link-other-editors-workspace"
              className="oo-header-menu-mb-4"
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
              href={t("AccessibilityLink")}
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

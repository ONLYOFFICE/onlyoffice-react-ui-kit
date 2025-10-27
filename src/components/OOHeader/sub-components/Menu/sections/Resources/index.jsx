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
import "./Resources.scss";
import { Link } from "../../../../../../sub-components/Link/index.jsx";
import { MenuItem } from "../../sub-components/MenuItem/index.jsx";
import { MenuLink } from "../../sub-components/MenuLink/index.jsx";
import { MenuLabel } from "../../sub-components/MenuLabel/index.jsx";
import { MenuText } from "../../sub-components/MenuText/index.jsx";
import { getLink } from "../../../../../../utils/getLink.jsx";

const Resources = ({
  t,
  locale,
  getBaseUrl,
  theme,
  highlight,
  registerCloseMenu,
  handleCloseAllMenus,
}) => {
  return (
    <MenuItem
      id="oo-menu-item-btn-resources"
      className="oo-menu-item--resources"
      heading={t("Resources")}
      theme={theme}
      active={highlight?.buttonId}
      registerCloseMenu={registerCloseMenu}
      handleCloseAllMenus={handleCloseAllMenus}
    >
      <div className="oo-header-menu-d-flex oo-header-menu-mob-flex-column oo-header-menu-mob-height-without-header">
        <div className="oo-header-menu-item oo-header-menu-item--with-border">
          <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
            {t("AboutUs")}
          </MenuLabel>
          <MenuLink
            id="oo-menu-link-company"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/about")}
            icon="company"
            active={highlight?.linkId}
          >
            {t("Company")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-customers"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/customers")}
            icon="customers"
            active={highlight?.linkId}
          >
            {t("Customers")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-success-stories"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/customers#stories")}
            icon="success-stories"
            active={highlight?.linkId}
          >
            {t("SuccessStories")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-awards"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/awards")}
            icon="awards"
            active={highlight?.linkId}
          >
            {t("Awards")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-certificates"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/certificates")}
            icon="certificates"
            active={highlight?.linkId}
          >
            {t("Certificates")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-resources-events"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/events")}
            icon="events"
            active={highlight?.linkId}
          >
            {t("Events")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-press-downloads"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/press-downloads")}
            icon="press-downloads"
            active={highlight?.linkId}
          >
            {t("PressDownloads")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-gift-shop"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href="https://shop.spreadshirt.com/onlyoffice"
            target="_blank"
            icon="gift-shop"
            active={highlight?.linkId}
          >
            {t("GiftShop")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-contacts"
            href={getBaseUrl("/contacts")}
            icon="contacts"
            active={highlight?.linkId}
          >
            {t("Contacts")}
          </MenuLink>
        </div>

        <div className="oo-header-menu-item">
          <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
            {t("Collaborate")}
          </MenuLabel>
          <MenuLink
            id="oo-menu-link-for-contributers"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/contribute")}
            icon="for-contributers"
            active={highlight?.linkId}
          >
            {t("ForContributors")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-for-translators"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href="https://helpcenter.onlyoffice.com/guides/become-translator.aspx"
            icon="for-translators"
            active={highlight?.linkId}
          >
            {t("ForTranslators")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-for-influencers"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/influencer-program")}
            icon="for-influencers"
            active={highlight?.linkId}
          >
            {t("ForInfluencers")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-vacancies"
            className="oo-header-menu-mb-16 oo-header-menu-mob-mb-24"
            href={getBaseUrl("/vacancies")}
            icon="vacancies"
            active={highlight?.linkId}
          >
            {t("Vacancies")}
          </MenuLink>

          <MenuLabel className="oo-header-menu-mb-12 oo-header-menu-mob-mb-16">
            {t("GetHelp")}
          </MenuLabel>
          <MenuLink
            id="oo-menu-link-forum"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href="https://forum.onlyoffice.com/"
            target="_blank"
            icon="forum"
            active={highlight?.linkId}
          >
            {t("Forum")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-help-center"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href="https://helpcenter.onlyoffice.com/index.aspx"
            target="_blank"
            icon="help-center"
            active={highlight?.linkId}
          >
            {t("HelpCenter")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-academy"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/academy")}
            target="_blank"
            icon="academy"
            active={highlight?.linkId}
          >
            {t("Academy")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-training-courses"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/training-courses")}
            icon="training-courses"
            active={highlight?.linkId}
          >
            {t("TrainingCourses")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-webinars"
            className="oo-header-menu-mb-12 oo-header-menu-mob-mb-8"
            href={getBaseUrl("/webinars")}
            icon="webinars"
            active={highlight?.linkId}
          >
            {t("Webinars")}
          </MenuLink>
          <MenuLink
            id="oo-menu-link-white-papers"
            href={getBaseUrl("/whitepapers")}
            icon="white-papers"
            active={highlight?.linkId}
          >
            {t("WhitePapers")}
          </MenuLink>
        </div>

        <div className="oo-header-menu-item oo-header-menu-item--bg-gray">
          <MenuLink
            id="oo-menu-link-blog"
            className="oo-header-menu-mb-16"
            href={getLink("blog", locale)}
            variant="text"
            active={highlight?.linkId}
            locale={false}
          >
            {t("Blog")}
          </MenuLink>

          <Link
            className="oo-header-menu-block oo-header-menu-mb-16"
            href={t("blogLink1")}
            locale={false}
          >
            <div
              className={clsx(
                "oo-header-menu-img oo-header-menu-img--blog-1 oo-header-menu-mb-12",
                locale,
              )}
            ></div>
            <MenuText className="oo-header-menu-mb-4">
              {t("blogText1")}
            </MenuText>
            <MenuText className="oo-header-menu-block-date">
              {t("blogDate1")}
            </MenuText>
          </Link>

          <Link
            className="oo-header-menu-block"
            href={t("blogLink2")}
            locale={false}
          >
            <div
              className={clsx(
                "oo-header-menu-img oo-header-menu-img--blog-2 oo-header-menu-mb-12",
                locale,
              )}
            ></div>
            <MenuText className="oo-header-menu-mb-4">
              {t("blogText2")}
            </MenuText>
            <MenuText className="oo-header-menu-block-date">
              {t("blogDate2")}
            </MenuText>
          </Link>
        </div>
      </div>
    </MenuItem>
  );
};

export { Resources };

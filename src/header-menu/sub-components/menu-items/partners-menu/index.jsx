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

const PartnersMenu = ({ t, hrefLang, navHidden, setNavHidden }) => {
  return (
    <MenuItem className="oo-hm-item--partners" heading={t("Partners")} navHidden={navHidden} setNavHidden={setNavHidden}>
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box">
          <Link className="oo-hm-item-link oo-hm-item-link--resellers" href={`${hrefLang}/resellers.aspx`}>{t("Resellers")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--affiliates" href={`${hrefLang}/affiliates.aspx`}>{t("Affiliates")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--hosting-providers" href={`${hrefLang}/hosting-providers.aspx`}>{t("Hosting providers")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--technology-partners" href={`${hrefLang}/technology-partners.aspx`}>{t("Technology partners")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--find-partners" href={`${hrefLang}/find-partners.aspx`}>{t("Find partners")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--submit-request" href={`${hrefLang}/partnership-request.aspx`}>{t("Submit request")}</Link>
        </div>
        <div className="oo-hm-item-box oo-hm-item-box--bg-gray">
          <Link className="oo-hm-item-block" href={`${hrefLang}/events.aspx`}>
            <div className="oo-hm-item-block-title">{t("Events")}</div>
            <div className="oo-hm-item-block-img oo-hm-item-block-img--events"></div>
            <div className="oo-hm-item-block-text">{t("Meet the ONLYOFFICE team")}</div>
          </Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default PartnersMenu;
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
import "./login-menu.scss";

const LoginMenu = ({ t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  return (
    <MenuItem
      className="oo-hm-item--login"
      heading={t("Login")}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-wrapper-box">
          <Link className="oo-hm-item-link oo-hm-item-link--docs-cloud" href={`${hrefLang}/docs-cloud-signin.aspx`}>{t("Docs Cloud")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--docspace-cloud" href={`${hrefLang}/docspace-signin.aspx`}>{t("DocSpace Cloud")}</Link>
          <Link className="oo-hm-item-link oo-hm-item-link--workspace-cloud" href={`${hrefLang}/signin.aspx`}>{t("Workspace Cloud")}</Link>
        </div>
      </div>
    </MenuItem>
  );
};

export default LoginMenu;
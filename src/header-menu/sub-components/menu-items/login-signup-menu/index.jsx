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
import "./login-signup-menu.scss";

const LoginSignupMenu = ({ t, hrefLang, navHidden, setNavHidden, registerCloseMenu }) => {
  return (
    <MenuItem
      className="oo-hm-item--login-signup"
      heading={<>{t("Login")}<span>/</span>{t("Sign up")}</>}
      navHidden={navHidden}
      setNavHidden={setNavHidden}
      registerCloseMenu={registerCloseMenu}
    >
      <div className="oo-hm-item-wrapper">
        <div className="oo-hm-item-box">
          <div className="oo-hm-item-label">{t("Login")} / {t("Sign up")}</div>
          <div className="oo-hm-item-box-wrap">
            <Link className="oo-hm-item-link oo-hm-item-link--docspace" href={`${hrefLang}/docspace-registration.aspx`}>{t("DocSpace")}</Link>
            <div className="oo-hm-item-box-text">{t("Document editors & storage")}</div>
          </div>
          <div className="oo-hm-item-box-wrap">
            <Link className="oo-hm-item-link" href={`${hrefLang}/docs-registration.aspx`}>{t("Docs")}</Link>
            <div className="oo-hm-item-box-text">{t("Document editors only")}</div>
          </div>
        </div>
      </div>
    </MenuItem>
  );
};

export default LoginSignupMenu;
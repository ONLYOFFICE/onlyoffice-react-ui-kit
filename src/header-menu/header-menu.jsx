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

import React, { useState, useEffect, useRef } from "react";
import locales from "./locales/index.jsx";
import ProductsMenu from "./sub-components/menu-items/products-menu/index.jsx";
import EnterpriseMenu from "./sub-components/menu-items/enterprise-menu/index.jsx";
import DevelopersMenu from "./sub-components/menu-items/developers-menu/index.jsx";
import PricingMenu from "./sub-components/menu-items/pricing-menu/index.jsx";
import PartnersMenu from "./sub-components/menu-items/partners-menu/index.jsx";
import ResourcesMenu from "./sub-components/menu-items/resources-menu/index.jsx";
import DownloadMenu from "./sub-components/menu-items/download-menu/index.jsx";
import LoginSignupLink from "./sub-components/menu-items/login-signup-link/index.jsx";
import "./header-menu.scss";

const HeaderMenu = ({ locale, isOpen }) => {
  const [navHidden, setNavHidden] = useState(false);
  const navRef = useRef(null);
  const closeMenusRef = useRef([]);

  const currentLocale = locale || "en";
  const windowCheck = typeof window !== "undefined" && window.innerWidth <= 1024;
  const hrefLang = `https://www.onlyoffice.com${{ "en": "", "el": "", "hi": "", "ar": "", "sr": "", "hy": "", "zh-hans": "/zh", "pt-br": "/pt" }[currentLocale] ?? `/${currentLocale}`}`;
  const t = (key) => locales[currentLocale === "zh-hans" ? "zh" : currentLocale === "pt-br" ? "pt" : currentLocale][key] || locales.en[key] || key;
  const commonProps = { t, hrefLang, navHidden, setNavHidden };

  useEffect(() => {
    if (windowCheck && isOpen) {
      const handleClickOutside = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setNavHidden(false);
          closeMenusRef.current.forEach(closeMenu => closeMenu());
        }
      };

      window.addEventListener("touchstart", handleClickOutside);

      return () => {
        window.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [isOpen]);

  const registerCloseMenu = (closeMenu) => {
    closeMenusRef.current.push(closeMenu);
  };

  return (
    <nav ref={navRef} className={`oo-hm ${currentLocale} ${windowCheck && navHidden ? "hidden" : ""} ${isOpen ? "is-open" : ""}`}>
      <div className="oo-hm-wrapper">
        <ul className="oo-hm-items">
          <ProductsMenu currentLocale={currentLocale} registerCloseMenu={registerCloseMenu} {...commonProps} />
          <EnterpriseMenu registerCloseMenu={registerCloseMenu} {...commonProps} />
          <DevelopersMenu registerCloseMenu={registerCloseMenu} {...commonProps} />
          <PricingMenu registerCloseMenu={registerCloseMenu} {...commonProps} />
          <PartnersMenu registerCloseMenu={registerCloseMenu} {...commonProps} />
          <ResourcesMenu currentLocale={currentLocale} registerCloseMenu={registerCloseMenu} {...commonProps} />
          <DownloadMenu registerCloseMenu={registerCloseMenu} {...commonProps} />
          <LoginSignupLink t={t} hrefLang={hrefLang} />
        </ul>
        <a className="oo-hm-phone-mobile" href="tel:+37163399867">
          +371 633 998 67
        </a>
      </div>
    </nav>
  );
};

export { HeaderMenu };
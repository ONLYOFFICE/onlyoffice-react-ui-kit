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
import "./OOHeader.scss";
import locales from "./locales/index.jsx";
import Link from "next/link";
import { Menu } from "./sub-components/Menu/index.jsx";
import { DownloadMenu } from "./sub-components/DownloadMenu/index.jsx";
import { LanguageSelector } from "./sub-components/LanguageSelector/index.jsx";
import { PhoneSelector } from "./sub-components/PhoneSelector/index.jsx";
import { getUrl } from "../../utils/getUrl.jsx";
import { SearchSelector } from "./sub-components/SearchSelector/index.jsx";

const OOHeader = ({
  locale,
  base,
  theme,
  borderColor,
  backgroundColor,
  search,
  hasPhone,
  languages,
  highlight,
}) => {
  const t = (key) =>
    locales[locale === "zh-hans" ? "zh" : locale === "pt-br" ? "pt" : locale][
      key
    ] ||
    locales.en[key] ||
    key;

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const getBaseUrl = (path) => getUrl(locale, path, base?.url, base?.withAspx);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setOpenMobileMenu(false);
        document.documentElement.style.overflow = "";
        setShowOverlay(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onOverlayhHandleClick = () => {
    setShowOverlay(false);

    if (openMobileMenu) {
      setOpenMobileMenu(false);
      document.documentElement.style.overflow = "";
    }

    if (search?.show && showSearch && search.variant === "main") {
      setShowSearch(false);
    }
  };

  return (
    <header
      className={clsx(
        "oo-header",
        locale,
        openMobileMenu && "oo-header--active",
        search && hasPhone && "oo-header--space-between",
      )}
      style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
    >
      <div className="oo-header-container">
        <button
          onClick={() => {
            setOpenMobileMenu(true);
            setShowOverlay(true);
            document.documentElement.style.overflow = "hidden";
          }}
          className={clsx(
            "oo-header-hamburger",
            locale,
            theme === "white" && "oo-header-hamburger--theme-white",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
          >
            <rect width="20" height="2" fill="#444444" />
            <rect y="6" width="20" height="2" fill="#444444" />
            <rect y="12" width="20" height="2" fill="#444444" />
          </svg>
        </button>

        <Link
          className={clsx(
            "oo-header-logo",
            locale,
            theme === "white" && "oo-header-logo--theme-white",
            !(search || hasPhone) && "oo-header-logo--mobile-center",
          )}
          href={base?.url || "/"}
        ></Link>

        {!showSearch && (
          <div
            className={clsx(
              "oo-header-nav",
              locale,
              openMobileMenu && "oo-header-nav--active",
              isMobile && "oo-header-nav--is-mobile",
            )}
          >
            <Menu
              t={t}
              locale={locale}
              getBaseUrl={getBaseUrl}
              theme={theme}
              highlight={highlight}
            />

            <div className={clsx("oo-header-btns", locale)}>
              <DownloadMenu t={t} locale={locale} getBaseUrl={getBaseUrl} />
              <Link
                className={clsx(
                  "oo-header-btn",
                  locale,
                  theme === "white" && "oo-header-btn--theme-white",
                )}
                href={getBaseUrl("/docspace-registration")}
              >
                {t("Login")} <span>/</span> {t("SignUp")}
              </Link>
            </div>

            <a
              className={clsx("oo-header-menu-phone-mobile", locale)}
              href="tel:+37163399867"
            >
              +371 633 998 67
            </a>
          </div>
        )}

        <div
          className={clsx(
            "oo-header-icons",
            locale,
            showSearch && "oo-header-icons--full-width",
          )}
        >
          {search?.show && (
            <SearchSelector
              t={t}
              locale={locale}
              variant={search.variant}
              value={search.value}
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              theme={theme}
              setShowOverlay={setShowOverlay}
              onChange={search.onChange}
              onSubmit={search.onSubmit}
            />
          )}
          {hasPhone && (
            <PhoneSelector
              t={t}
              locale={locale}
              getBaseUrl={getBaseUrl}
              theme={theme}
            />
          )}
          <LanguageSelector
            locale={locale}
            theme={theme}
            languages={languages}
          />
        </div>

        <div
          onClick={onOverlayhHandleClick}
          className={clsx("oo-header-overlay", showOverlay && "active")}
        ></div>
      </div>
    </header>
  );
};

export { OOHeader };

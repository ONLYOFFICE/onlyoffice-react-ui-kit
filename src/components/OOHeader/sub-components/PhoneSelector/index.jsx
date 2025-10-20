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

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import "./PhoneSelector.scss";
import { PhoneIcon } from "../../../../icons/index.js";

const PhoneSelector = ({
  t,
  locale,
  getBaseUrl,
  theme,
  registerCloseMenu,
  handleCloseAllMenus,
}) => {
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      const focusableItems = dropdownRef.current?.querySelectorAll("a");
      const firstElement = focusableItems?.[0];
      const lastElement = focusableItems?.[focusableItems.length - 1];

      if (document.activeElement === lastElement && !e.shiftKey) {
        setIsOpen(false);
      } else if (document.activeElement === firstElement && e.shiftKey) {
        setIsOpen(false);
      }

      if (document.activeElement === buttonRef.current && e.shiftKey) {
        setIsOpen(false);
      }
    }
  };

  if (registerCloseMenu) {
    registerCloseMenu(() => setIsOpen(false));
  }

  return (
    <div
      onKeyDown={handleKeyDown}
      className={clsx("oo-phone-selector", locale)}
    >
      <button
        ref={buttonRef}
        onMouseEnter={() => {
          if (window.innerWidth > 1024) {
            handleCloseAllMenus();
            setIsOpen(true);
          }
        }}
        onClick={() => {
          handleCloseAllMenus();
          setIsOpen(!isOpen);
        }}
        className={clsx(
          "oo-phone-selector-btn",
          isOpen && "oo-phone-selector-btn--open",
          (theme === "white" ||
            theme === "white-secondary" ||
            theme === "white-tertiary") &&
            "oo-phone-selector-btn--theme-white",
        )}
      >
        <PhoneIcon />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={clsx(
            "oo-phone-selector-wrapper",
            locale,
            isOpen && "oo-phone-selector-wrapper--open",
          )}
        >
          <div className="oo-phone-selector-text">{t("AscensioSystemSIA")}</div>
          <a className="oo-phone-selector-label" href="tel:+37163399867">
            {t("Phone")} +371 63399867
          </a>
          <Link
            className="oo-phone-selector-link"
            href={getBaseUrl("/call-back-form")}
          >
            {t("RequestACall")}
          </Link>
        </div>
      )}
    </div>
  );
};

export { PhoneSelector };

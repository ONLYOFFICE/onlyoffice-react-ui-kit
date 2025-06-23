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

import React, { useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import "./PhoneSelector.scss";
import { PhoneIcon } from "../../../../icons/index.js";

const PhoneSelector = ({ t, locale, getBaseUrl, theme }) => {
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      className={clsx("oo-phone-selector", locale)}
    >
      <button
        ref={buttonRef}
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "oo-phone-selector-btn",
          isOpen && "oo-phone-selector-btn--open",
          theme === "white" && "oo-phone-selector-btn--theme-white",
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

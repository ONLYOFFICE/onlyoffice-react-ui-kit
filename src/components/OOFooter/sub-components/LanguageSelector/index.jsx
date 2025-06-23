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

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import "./LanguageSelector.scss";
import { ChevronDownIcon } from "../../../../icons/index.js";

const LanguageSelector = ({ locale, languages }) => {
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      const focusableItems = listRef.current?.querySelectorAll("a");
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
      onMouseEnter={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
      className="oo-footer-language-selector"
    >
      <button
        ref={buttonRef}
        className={clsx(
          "oo-footer-language-selector-btn",
          locale,
          isOpen && "oo-footer-language-selector-btn--active",
        )}
      >
        <span>
          {
            languages.find((lang) => lang.key === locale)
              ?.name
          }
        </span>

        <ChevronDownIcon />
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          className={clsx("oo-footer-language-selector-list", locale)}
        >
          {languages.map(({ shortKey, href, name }) => (
            <li key={shortKey}>
              <Link
                className={clsx(
                  "oo-footer-language-selector-link",
                  shortKey === locale &&
                    "oo-footer-language-selector-link--active",
                )}
                href={href}
                locale={shortKey}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { LanguageSelector };

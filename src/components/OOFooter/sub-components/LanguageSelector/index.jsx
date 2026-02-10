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

import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import "./LanguageSelector.scss";
import { Link } from "../../../../sub-components/Link/index.jsx";
import { ChevronDownIcon } from "../../../../icons/index.js";

const LanguageSelector = ({ locale, languages }) => {
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
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
      onMouseEnter={() => {
        if (window.innerWidth > 1024) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 1024) {
          setIsOpen(false);
        }
      }}
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
        <span>{languages.find((lang) => lang.shortKey === locale)?.name}</span>

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

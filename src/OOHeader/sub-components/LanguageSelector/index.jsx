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
import "./LanguageSelector.scss";

const LanguageSelector = ({ locale, theme, languageSelector }) => {
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
      className="oo-language-selector"
    >
      <button
        ref={buttonRef}
        className={clsx(
          "oo-language-selector-btn",
          isOpen && "oo-language-selector-btn--open",
          theme === "white" && "oo-language-selector-btn--theme-white",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="oo-language-selector-icon-stroke"
            cx="12.4999"
            cy="12.5"
            r="9"
            stroke="#444444"
          />
          <path
            className="oo-language-selector-icon-stroke"
            d="M12.4999 7.5C15.0512 7.5 17.3364 8.1001 18.9667 9.04395C20.6099 9.99529 21.4999 11.2348 21.4999 12.5C21.4999 13.7652 20.6099 15.0047 18.9667 15.9561C17.3364 16.8999 15.0512 17.5 12.4999 17.5C9.94851 17.5 7.66337 16.8999 6.03308 15.9561C4.38985 15.0047 3.49988 13.7652 3.49988 12.5C3.49988 11.2348 4.38985 9.99529 6.03308 9.04395C7.66337 8.1001 9.94851 7.5 12.4999 7.5Z"
            stroke="#444444"
          />
          <path
            className="oo-language-selector-icon-stroke"
            d="M17.4999 12.5C17.4999 15.0514 16.8998 17.3365 15.9559 18.9668C15.0046 20.61 13.7651 21.5 12.4999 21.5C11.2347 21.5 9.99517 20.61 9.04382 18.9668C8.09997 17.3365 7.49988 15.0514 7.49988 12.5C7.49988 9.94863 8.09998 7.66349 9.04382 6.0332C9.99517 4.38997 11.2347 3.5 12.4999 3.5C13.7651 3.5 15.0046 4.38997 15.9559 6.0332C16.8998 7.66349 17.4999 9.94863 17.4999 12.5Z"
            stroke="#444444"
          />
          <path
            className="oo-language-selector-icon-fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9999 13H3.99988V12H20.9999V13Z"
            fill="#444444"
          />
          <path
            className="oo-language-selector-icon-fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 21L11.9999 4L12.9999 4L12.9999 21L11.9999 21Z"
            fill="#444444"
          />
        </svg>

        <svg
          className="oo-language-selector-icon-arrow"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="oo-language-selector-icon-fill"
            d="M4 5L0.535899 0.499999L7.4641 0.5L4 5Z"
            fill="#444444"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          className={clsx(
            "oo-language-selector-list",
            locale,
            isOpen && "oo-language-selector-list--open",
          )}
        >
          {languageSelector.languages.map(({ shortKey, name }) => (
            <li key={shortKey}>
              <Link
                className={clsx("oo-language-selector-list-link", {
                  "oo-language-selector-list-link--active": locale === shortKey,
                })}
                href={languageSelector.href}
                locale={shortKey}
              >
                <span>{shortKey}</span>
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

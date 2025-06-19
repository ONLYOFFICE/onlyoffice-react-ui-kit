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

import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import "./SearchSelector.scss";

const SearchSelector = ({
  t,
  locale,
  value,
  variant,
  showSearch,
  setShowSearch,
  theme,
  setShowOverlay,
  onChange,
  onSubmit,
}) => {
  const wrapperRef = useRef(null);
  const searchRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setShowSearch(false);
        setShowOverlay(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  const onSearchHandleClick = () => {
    setShowSearch(true);
    setTimeout(() => {
      searchRef.current.focus();
    }, 0);

    if (window.innerWidth < 1024) {
      setShowOverlay(true);
    }
  };

  const handleKeyDown = (e) => {
    const focusableItems =
      wrapperRef.current?.querySelectorAll("input, button");
    const firstElement = focusableItems?.[0];
    const lastElement = focusableItems?.[focusableItems.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstElement) {
        setShowSearch(false);
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        setShowSearch(false);
      }
    }
  };

  return (
    <>
      {showSearch && (
        <form
          ref={wrapperRef}
          onSubmit={onSubmit}
          onKeyDown={handleKeyDown}
          className={clsx(
            "oo-header-search",
            locale,
            variant === "main" && "oo-header-search--variant-main",
          )}
        >
          <input
            ref={searchRef}
            id="oo-header-search"
            className={clsx(
              "oo-header-search-input",
              locale,
              variant === "main" && "oo-header-search-input--variant-main",
              variant === "blog" && "oo-header-search-input--variant-blog",
            )}
            placeholder={
              variant === "main"
                ? t("Download")
                : variant === "blog"
                ? t("SearchBlog")
                : null
            }
            value={value}
            onChange={onChange}
          />
          {variant === "main" && (
            <label
              htmlFor="oo-header-search"
              className={clsx("oo-header-search-label", locale)}
            >
              {t("SearchOnSite")}
            </label>
          )}
          <button
            onClick={() => setShowSearch(false)}
            className={clsx(
              "oo-header-search-clear-btn",
              locale,
              variant === "main" && "oo-header-search-clear-btn--variant-main",
              variant === "blog" && "oo-header-search-clear-btn--variant-blog",
            )}
            type="button"
          ></button>
        </form>
      )}

      {!showSearch && (
        <button
          onClick={onSearchHandleClick}
          className={clsx(
            "oo-header-search-btn",
            locale,
            theme === "white" && "oo-header-search-btn--theme-white",
          )}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.03695 10.0682C2.44111 14.1003 6.0434 17.0419 10.0829 16.6385C10.9612 16.5508 11.7878 16.3122 12.5396 15.951C12.9579 15.75 13.466 15.8015 13.7948 16.1292L18.9818 21.2983C19.3714 21.6865 20.0013 21.6873 20.3918 21.3001L21.2855 20.4139C21.6794 20.0234 21.6802 19.387 21.2873 18.9955L16.1217 13.8477C15.7888 13.5159 15.7387 12.9999 15.947 12.5786C16.5352 11.3886 16.8073 10.025 16.6652 8.60736C16.2611 4.57526 12.6588 1.6336 8.61928 2.03699C4.57979 2.44039 1.63278 6.03607 2.03695 10.0682ZM4.1267 9.85949C4.41539 12.7396 6.98846 14.8407 9.87381 14.5526C12.7592 14.2645 14.8642 11.6961 14.5755 8.81605C14.2868 5.93598 11.7137 3.83479 8.82837 4.12293C5.94302 4.41107 3.83801 6.97941 4.1267 9.85949Z"
              fill="#444444"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export { SearchSelector };

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
import { useRouter } from "next/router";
import clsx from "clsx";
import "./SearchSelector.scss";
import { SearchIcon, SearchGrayIcon } from "../../../../icons/index.js";

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
  const router = useRouter();
  const wrapperRef = useRef(null);
  const searchRef = useRef();

  useEffect(() => {
    setShowSearch(false);
  }, [router.asPath]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setShowSearch(false);
        variant === "main" && setShowOverlay(false);

        if (window.innerWidth < 1024) {
          document.documentElement.style.overflow = "";
        }
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
      variant === "main" && setShowOverlay(true);
      document.documentElement.style.overflow = "hidden";
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
            onClick={() => {
              setShowSearch(false);
            }}
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
          {variant === "blog" ? <SearchGrayIcon /> : <SearchIcon />}
        </button>
      )}
    </>
  );
};

export { SearchSelector };

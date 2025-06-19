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

import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import "./MenuItem.scss";

const MenuItem = ({ id, className, heading, children, theme, active }) => {
  const [showMenu, setShowMenu] = useState(false);

  const listRef = useRef(null);

  useEffect(() => {
    const resizeWindow = () => {
      if (window.innerWidth <= 1024) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document
        .querySelector(".oo-header-nav")
        .classList.add("oo-header-nav--overflow-hidden");
    } else {
      document
        .querySelector(".oo-header-nav")
        .classList.remove("oo-header-nav--overflow-hidden");
    }

    return () => {
      document.body.classList.remove("oo-header-nav--overflow-hidden");
    };
  }, [showMenu]);

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      const focusableItems = listRef.current?.querySelectorAll("a");

      if (!focusableItems || focusableItems.length === 0) return;

      const first = focusableItems[0];
      const last = focusableItems[focusableItems.length - 1];

      if (document.activeElement === first && e.shiftKey) {
        setShowMenu(false);
      }

      if (document.activeElement === last && !e.shiftKey) {
        setShowMenu(false);
      }
    }
  };

  return (
    <div
      onMouseLeave={() => window.innerWidth > 1024 && setShowMenu(false)}
      className={clsx("oo-menu-item", className)}
    >
      <button
        onClick={() => setShowMenu(!showMenu)}
        onMouseEnter={() => window.innerWidth > 1024 && setShowMenu(true)}
        id={id}
        className={clsx(
          "oo-menu-item-btn",
          active === id ? "oo-menu-item-btn--active" : "",
          showMenu && "oo-menu-item-btn--open",
          theme === "white" && "oo-menu-item-btn--theme-white",
        )}
      >
        {heading}
      </button>

      {showMenu && (
        <div
          ref={listRef}
          onKeyDown={handleKeyDown}
          className="oo-menu-item-wrapper"
        >
          <button
            onClick={() => setShowMenu(false)}
            className="oo-menu-item-btn-heading"
          >
            {heading}
          </button>
          {children}
        </div>
      )}
    </div>
  );
};

export { MenuItem };

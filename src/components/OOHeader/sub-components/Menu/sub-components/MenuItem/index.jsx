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

const MenuItem = ({
  id,
  className,
  heading,
  children,
  theme,
  active,
  registerCloseMenu,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const listRef = useRef(null);
  const isHoverSupported =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

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
    const headerNav = document.querySelector(".oo-header-nav");

    if (showMenu) {
      headerNav?.classList.add("oo-header-nav--overflow-hidden");
    } else {
      headerNav?.classList.remove("oo-header-nav--overflow-hidden");
    }

    const handleClickOutside = (event) => {
      if (
        listRef.current &&
        !listRef.current.contains(event.target) &&
        !event.target.closest(`#${id}`)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      headerNav?.classList.remove("oo-header-nav--overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  registerCloseMenu(() => {
    setShowMenu(false);
  });

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
      onMouseLeave={isHoverSupported ? () => setShowMenu(false) : undefined}
      className={clsx("oo-menu-item", className)}
    >
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        onMouseEnter={isHoverSupported ? () => setShowMenu(true) : undefined}
        id={id}
        className={clsx(
          "oo-menu-item-btn",
          active === id && "oo-menu-item-btn--active",
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

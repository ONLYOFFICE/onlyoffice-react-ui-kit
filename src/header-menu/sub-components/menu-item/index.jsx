/*
* (c) Copyright Ascensio System SIA 2024
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
import "./menu-item.scss";

const MenuItem = ({ children, heading, navHidden, setNavHidden, className, registerCloseMenu }) => {
  const windowCheck = typeof window !== "undefined" && window.innerWidth <= 1024;
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setNavHidden(!navHidden);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }

    let resizeWindow = () => {
      if (window.innerWidth > 1024) {
        setShowMobileMenu(false);
        setNavHidden(false);
      }
    };

    registerCloseMenu(() => {
      setNavHidden(false);
      setShowMobileMenu(false);
      setShowMenu(false);
    });

    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  return (
    <li
      onMouseLeave={() => setShowMenu(false)}
      className={`oo-hm-item ${windowCheck && showMobileMenu ? "active" : ""} ${className ? className : ""}`}
    >
      <button
        className={`oo-hm-item-heading ${showMenu ? "active": ""}`}
        onClick={toggleMenu}
        onMouseEnter={() => setShowMenu(true)}
      >
        {heading}
      </button>
      {(windowCheck ? showMobileMenu : showMenu) && (
        <div className={`oo-hm-items-wrapper ${showMobileMenu ? "is-open" : ""}`}>
          {windowCheck && (
            <div onClick={toggleMenu} className="oo-hm-mobile-heading">{heading}</div>
          )}
          {children}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
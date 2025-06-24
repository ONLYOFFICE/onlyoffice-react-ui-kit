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

import React, { useState, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import "./FooterItem.scss";

const FooterItem = ({ locale, children, heading, href }) => {
  const content = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = () => {
    window.innerWidth <= 600 && setIsOpen(!isOpen);
  };

  return (
    <div className="oo-footer-item">
      {href ? (
        <div
          onClick={onHandleClick}
          className={clsx(
            "oo-footer-item-heading",
            locale,
            isOpen && "oo-footer-item-heading--active",
          )}
        >
          <Link href={href}>{heading}</Link>
        </div>
      ) : (
        <div
          onClick={onHandleClick}
          className={clsx(
            "oo-footer-item-heading",
            locale,
            isOpen && "oo-footer-item-heading--active",
          )}
        >
          {heading}
        </div>
      )}
      <div
        ref={content}
        className={clsx(
          "oo-footer-items-group",
          isOpen && "oo-footer-items-group--active",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { FooterItem };

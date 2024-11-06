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

import React, { useState, useRef } from "react";
import Link from "next/link";
import "./footer-item.scss";

const FooterItem = ({ locale, children, heading, href }) => {
  const content = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = () => {
    window.innerWidth <= 600 && setIsOpen(!isOpen);
  };

  return (
    <div className={`oo-fm-item ${isOpen ? "is-open" : ""}`}>
      {href ? (
        <h6 onClick={onHandleClick} className={`oo-fm-item-heading oo-fm-item-heading--link ${locale}`}>
          <Link href={href}>{heading}</Link>
        </h6>
      ) : (
        <h6 onClick={onHandleClick} className={`oo-fm-item-heading ${locale}`}>{heading}</h6>
      )}
      <div ref={content} className="oo-fm-items-group">{children}</div>
    </div>
  );
};

export default FooterItem;
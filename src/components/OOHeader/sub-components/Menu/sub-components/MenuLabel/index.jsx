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

import React from "react";
import clsx from "clsx";
import "./MenuLabel.scss";
import { Link } from "../../../../../../sub-components/Link/index.jsx";
import { ChevronRightIcon } from "../../../../../../icons/index.js";

const MenuLabel = ({ id, className, children, href, active }) => {
  return href ? (
    <Link
      id={id}
      className={clsx(
        "oo-menu-label",
        active && active === id && "oo-menu-label--active",
        className,
      )}
      href={href}
    >
      <span>{children}</span>
      <ChevronRightIcon />
    </Link>
  ) : (
    <div
      id={id}
      className={clsx(
        "oo-menu-label",
        active && active === id && "oo-menu-label--active",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { MenuLabel };

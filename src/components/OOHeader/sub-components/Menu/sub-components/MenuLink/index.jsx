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
import "./MenuLink.scss";
import { Link } from "../../../../../../sub-components/Link/index.jsx";

const MenuLink = ({
  id,
  className,
  icon,
  variant,
  children,
  href,
  target,
  active,
  locale,
}) => {
  const classNames = clsx(
    "oo-menu-link",
    icon && ["oo-menu-link--icon", `oo-menu-link--icon-${icon}`],
    variant && `oo-menu-link--variant-${variant}`,
    active && active === id && "oo-menu-link--active",
    className,
  );

  return href ? (
    <Link
      id={id}
      className={classNames}
      href={href}
      target={target}
      locale={locale}
    >
      {children}
    </Link>
  ) : (
    <div id={id} className={classNames}>
      {children}
    </div>
  );
};

export { MenuLink };

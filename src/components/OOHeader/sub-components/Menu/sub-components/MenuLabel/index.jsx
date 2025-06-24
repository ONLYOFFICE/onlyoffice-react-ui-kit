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
import Link from "next/link";
import { ChevronRightIcon } from "../../../../../../icons/index.js";

const MenuLabel = ({ className, children, href }) => {
  return href ? (
    <Link className={clsx("oo-menu-label", className)} href={href}>
      <span>{children}</span>
      <ChevronRightIcon />
    </Link>
  ) : (
    <div className={clsx("oo-menu-label", className)}>{children}</div>
  );
};

export { MenuLabel };

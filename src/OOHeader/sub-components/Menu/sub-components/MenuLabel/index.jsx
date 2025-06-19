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

const MenuLabel = ({ className, children, href }) => {
  return href ? (
    <Link className={clsx("oo-menu-label", className)} href={href}>
      <span>{children}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.10257 4.99824L3.07655 8.03123C2.79256 8.31587 2.79138 8.77855 3.0739 9.06465C3.35643 9.35075 3.81568 9.35193 4.09967 9.06728L7.63727 5.52153C7.79753 5.3609 7.86773 5.14358 7.84771 4.93328C7.83437 4.76568 7.76387 4.60184 7.63627 4.47395L4.10326 0.932809C3.81927 0.648164 3.36002 0.649343 3.0775 0.935441C2.79497 1.22154 2.79616 1.68422 3.08015 1.96886L6.10257 4.99824Z"
          fill="#666666"
        />
      </svg>
    </Link>
  ) : (
    <div className={clsx("oo-menu-label", className)}>{children}</div>
  );
};

export { MenuLabel };

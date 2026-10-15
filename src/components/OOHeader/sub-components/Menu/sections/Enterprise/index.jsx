/*
 * (c) Copyright Ascensio System SIA 2026
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
import "../../sub-components/MenuItem/MenuItem.scss";
import "../Pricing/Pricing.scss";
import { Link } from "../../../../../../sub-components/Link/index.jsx";

const Enterprise = ({
  t,
  locale,
  getBaseUrl,
  theme,
  highlight,
  handleCloseAllMenus,
}) => {
  return (
    <div className={clsx("oo-menu-item", "oo-menu-item--enterprise", locale)}>
      <Link
        id="oo-menu-item-btn-enterprise"
        onMouseEnter={handleCloseAllMenus}
        className={clsx(
          "oo-menu-item-btn",
          "oo-menu-item-btn--link",
          highlight?.buttonId === "oo-menu-item-btn-enterprise" &&
            "oo-menu-item-btn--active",
          theme === "dark" && "oo-menu-item-btn--theme-dark",
        )}
        href={getBaseUrl("/docs-enterprise")}
      >
        {t("Enterprise")}
      </Link>
    </div>
  );
};

export { Enterprise };

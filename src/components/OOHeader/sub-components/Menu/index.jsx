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
import "./Menu.scss";
import { Products } from "./sections/Products/index.jsx";
import { Enterprise } from "./sections/Enterprise/index.jsx";
import { Developers } from "./sections/Developers/index.jsx";
import { Pricing } from "./sections/Pricing/index.jsx";
import { Partners } from "./sections/Partners/index.jsx";
import { Resources } from "./sections/Resources/index.jsx";

const Menu = ({ t, locale, getBaseUrl, theme, highlight }) => {
  return (
    <div className={clsx("oo-header-menu", locale)}>
      <Products
        t={t}
        locale={locale}
        getBaseUrl={getBaseUrl}
        theme={theme}
        highlight={highlight}
      />
      <Enterprise
        t={t}
        locale={locale}
        getBaseUrl={getBaseUrl}
        theme={theme}
        highlight={highlight}
      />
      <Developers
        t={t}
        locale={locale}
        getBaseUrl={getBaseUrl}
        theme={theme}
        highlight={highlight}
      />
      <Pricing
        t={t}
        locale={locale}
        getBaseUrl={getBaseUrl}
        theme={theme}
        highlight={highlight}
      />
      <Partners
        t={t}
        locale={locale}
        getBaseUrl={getBaseUrl}
        theme={theme}
        highlight={highlight}
      />
      <Resources
        t={t}
        locale={locale}
        getBaseUrl={getBaseUrl}
        theme={theme}
        highlight={highlight}
      />
    </div>
  );
};

export { Menu };

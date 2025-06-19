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

import React, { useState } from "react";
import "../styles.scss";
import { OOHeader } from "./OOHeader";

export default {
  title: "Header",
  component: OOHeader,
  argTypes: {
    locale: {
      options: [
        "ar",
        "cs",
        "de",
        "el",
        "en",
        "es",
        "fr",
        "hi",
        "hy",
        "it",
        "ja",
        "pt",
        "pt-br",
        "ru",
        "sr",
        "zh",
        "zh-hans",
        "nl",
      ],
      control: { type: "select" },
    },
  },
};

const Template = (args) => {
  const languages = [
    { shortKey: "en", name: "English" },
    { shortKey: "fr", name: "Français" },
    { shortKey: "de", name: "German" },
    { shortKey: "es", name: "Español" },
    { shortKey: "pt", name: "Português" },
    { shortKey: "it", name: "Italiano" },
    { shortKey: "cs", name: "Čeština" },
    { shortKey: "nl", name: "Nederlands" },
    { shortKey: "ja", name: "日本語" },
    { shortKey: "zh", name: "中文" },
    { shortKey: "ru", name: "Русский" },
  ];

  return (
    <OOHeader
      languageSelector={{
        languages: languages,
        href: "/",
      }}
      search={{
        show: true,
        variant: "main",
        value: "",
        onChange: () => {},
        onSubmit: () => {},
      }}
      hasPhone={true}
      highlight={{
        buttonId: "oo-menu-item-btn-products",
        linkId: "oo-menu-link-docspace-what-is",
      }}
      {...args}
    />
  );
};

const SearchTemplate = (args) => {
  const [searchValue, setSearchValue] = useState("");

  const languages = [
    { shortKey: "en", name: "English" },
    { shortKey: "fr", name: "Français" },
    { shortKey: "de", name: "German" },
    { shortKey: "es", name: "Español" },
    { shortKey: "pt", name: "Português" },
    { shortKey: "it", name: "Italiano" },
    { shortKey: "cs", name: "Čeština" },
    { shortKey: "nl", name: "Nederlands" },
    { shortKey: "ja", name: "日本語" },
    { shortKey: "zh", name: "中文" },
    { shortKey: "ru", name: "Русский" },
  ];

  return (
    <OOHeader
      languageSelector={{
        languages: languages,
        href: "/",
      }}
      search={{
        show: true,
        variant: "main",
        value: searchValue,
        onChange: (e) => {
          e.preventDefault();
          setSearchValue(e.target.value);
        },
        onSubmit: () => {},
      }}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};

export const WithSearch = SearchTemplate.bind({});
WithSearch.args = {
  locale: "en",
};

export const WithPhone = Template.bind({});
WithPhone.args = {
  locale: "en",
  hasPhone: true,
};

export const customBaseUrl = Template.bind({});
customBaseUrl.args = {
  locale: "en",
  base: {
    url: "https://www.onlyoffice.com",
    withAspx: true,
  },
};

export const whiteThemeWithBackground = Template.bind({});
whiteThemeWithBackground.args = {
  locale: "en",
  theme: "white",
  backgroundColor: "#444444",
};

export const highlightSection = Template.bind({});
highlightSection.args = {
  locale: "en",
  highlight: {
    buttonId: "oo-menu-item-btn-resources",
    linkId: "oo-menu-link-blog",
  },
};

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
import "../../styles.scss";
import { OOFooter } from "./OOFooter.jsx";

export default {
  title: "Footer",
  component: OOFooter,
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
    { shortKey: "ar", name: "عربي", href: "/" },
    { shortKey: "cs", name: "Čeština", href: "/" },
    { shortKey: "de", name: "Deutsch", href: "/" },
    { shortKey: "el", name: "Ελληνικά", href: "/" },
    { shortKey: "en", name: "English", href: "/" },
    { shortKey: "es", name: "Español", href: "/" },
    { shortKey: "fr", name: "Français", href: "/" },
    { shortKey: "hi", name: "हिन्दी", href: "/" },
    { shortKey: "hy", name: "Հայերեն", href: "/" },
    { shortKey: "it", name: "Italiano", href: "/" },
    { shortKey: "ja", name: "日本語", href: "/" },
    { shortKey: "nl", name: "Nederlands", href: "/" },
    { shortKey: "pt", name: "Português", href: "/" },
    { shortKey: "ru", name: "Русский", href: "/" },
    { shortKey: "sr", name: "Srpski", href: "/" },
    { shortKey: "zh", name: "中文", href: "/" },
  ];

  return (
    <OOFooter
      languages={languages}
      base={{
        url: "https://www.onlyoffice.com",
        withAspx: true,
        localePathMap: {
          en: "",
          el: "",
          hi: "",
          ar: "",
          sr: "",
          hy: "",
          "zh-hans": "zh",
          "pt-br": "pt",
        },
      }}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};

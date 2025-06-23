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
    { key: "ar", locale: "ar",  name: "عربي", href: "/" },
    { key: "cs", locale: "cs", name: "Čeština", href: "/" },
    { key: "de", locale: "de", name: "Deutsch", href: "/" },
    { key: "el", locale: "el", name: "Ελληνικά", href: "/" },
    { key: "en", locale: "en", name: "English", href: "/" },
    { key: "es", locale: "es", name: "Español", href: "/" },
    { key: "fr", locale: "fr", name: "Français", href: "/" },
    { key: "hi", locale: "hi", name: "हिन्दी", href: "/" },
    { key: "hy", locale: "hy",name: "Հայերեն", href: "/" },
    { key: "it", locale: "it", name: "Italiano", href: "/" },
    { key: "ja", locale: "ja", key: "ja", name: "日本語", href: "/" },
    { key: "nl", locale: "nl", name: "Nederlands", href: "/" },
    { key: "pt", locale: "pt-br", name: "Português", href: "/" },
    { key: "ru", locale: "ru", name: "Русский", href: "/" },
    { key: "sr", locale: "sr",name: "Srpski", href: "/" },
    { key: "zh", locale: "zh-hans", name: "中文", href: "/" },
  ];

  return (
    <OOFooter
      languages={languages}
      base={{
        url: "https://www.onlyoffice.com",
        withAspx: true,
      }}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};

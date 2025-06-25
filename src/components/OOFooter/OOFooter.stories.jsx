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
    { key: "en", shortKey: "en", name: "English", href: "/" },
    { key: "fr", shortKey: "fr", name: "Français", href: "/" },
    { key: "de", shortKey: "de", name: "Deutsch", href: "/" },
    { key: "es", shortKey: "es", name: "Español", href: "/" },
    { key: "pt", shortKey: "pt", name: "Português", href: "/" },
    { key: "it", shortKey: "it", name: "Italiano", href: "/" },
    { key: "cs", shortKey: "cs", name: "Čeština", href: "/" },
    { key: "nl", shortKey: "nl", name: "Nederlands", href: "/" },
    { key: "ja", shortKey: "ja", key: "ja", name: "日本語", href: "/" },
    { key: "zh", shortKey: "zh", name: "中文", href: "/" },
    { key: "ru", shortKey: "ru", name: "Русский", href: "/" },
    { key: "sr", shortKey: "sr", name: "Srpski", href: "/" },
  ];

  return <OOFooter languages={languages} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  locale: "en",
};

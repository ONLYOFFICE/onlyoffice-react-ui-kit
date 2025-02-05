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
import "../styles.scss"
import { AdventAnnounce } from "./advent-announce";

export default {
  title: "Advent announce",
  component: AdventAnnounce,
  argTypes: {
    locale: {
      options: ["ar", "cs", "de", "el", "en", "es", "fr", "hi", "hy", "it", "ja", "pt", "pt-br", "ru", "sr", "zh", "zh-hans"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <AdventAnnounce {...args} />;

export const Default = Template.bind({});
Default.args = {
  "locale": "en"
};
/*
* (c) Copyright Ascensio System SIA 2024
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
import "../styles.scss"
import { HeaderMenu } from "./header-menu";

export default {
  title: "Header menu",
  component: HeaderMenu,
  argTypes: {
    locale: {
      options: ["ar", "cs", "de", "el", "en", "es", "fr", "hi", "hy", "it", "ja", "pt", "pt-br", "ru", "sr", "zh", "zh-hans"],
      control: { type: "select" },
    },
  },
};

const Template = (args) =>  {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <HeaderMenu isOpen={isOpen} {...args} />
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  "locale": "en"
};
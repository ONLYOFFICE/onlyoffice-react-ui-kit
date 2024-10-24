import React from "react";
import "../styles.scss"
import { OOAdventAnnounce } from "./oo-advent-announce";
import "./oo-advent-announce.scss";

export default {
  title: "Advent announce",
  component: OOAdventAnnounce,
  argTypes: {
    locale: {
      options: ["ar", "cs", "de", "el", "en", "es", "fr", "hi", "hy", "it", "ja", "pt", "ru", "sr", "zh"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <OOAdventAnnounce {...args} />;

export const Default = Template.bind({});
Default.args = {
  "locale": "en"
};
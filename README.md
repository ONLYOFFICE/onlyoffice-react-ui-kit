# onlyoffice-react-ui-kit

This repository contains the ONLYOFFICE [React](https://react.dev/) components, designed for seamless integration into [Next.js](https://nextjs.org/) projects.

## Features

The `onlyoffice-react-ui-kit` package includes the following React components:

- **onlyoffice-react-ui-kit/advent-announce**: Displays the current banner, providing users with important announcements and updates.
- **onlyoffice-react-ui-kit/header**: Renders the current header, allowing users to navigate easily throughout the application.
- **onlyoffice-react-ui-kit/footer**: Displays the current menu in the footer, providing navigation links to different sections of the site and ensuring users have access to important information at the bottom of the page.

## Installation

Add onlyoffice-react-ui-kit to your project by executing `npm install onlyoffice-react-ui-kit` or `yarn add onlyoffice-react-ui-kit`.

## Usage

Here's an example of basic usage for each component:

### OOAdventAnnounce

```jsx
import React from "react";
import { OOAdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";

function MyApp() {
  return (
    <div>
      <OOAdventAnnounce locale="en" />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |

### OOHeader

```jsx
import React, { useState } from "react";
import { OOHeader } from "onlyoffice-react-ui-kit/header";
import "onlyoffice-react-ui-kit/header/css";

function MyApp() {
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
    <div>
      <OOHeader
        locale="en"
        languages={languages}
      />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |
| `languages` | Controls the visibility and content of the language selector. Should contain { languages: [ [key: string, locale: string, name: string, href: string], ... ] }. | `object` | `undefined` |
| `search` | Enables and configures a search input in the header. Should be an object like { show: boolean, variant: "main" | "blog", value: string, onChange: () => void;, onSubmit: () => void; }. | `object` | `undefined` |
| `hasPhone` | Whether to display a phone selector block. | `boolean` | `false` |
| `highlight` | Highlights specific menu elements. Should be an object like { buttonId: string, linkId: string }, where values are DOM element IDs to apply highlight styles to. | `object` | `undefined` |
| `borderColor` | Sets the bottom border color of the header. | `string` | `transparent` |
| `backgroundColor` | Sets the background color of the header. | `string` | `transparent` |
| `theme` | Applies a predefined visual theme. Currently only "white" is supported. | `string` | `undefined` |
| `base` | Base configuration for internal links. Should be an object like { url: string, withAspx: boolean }. | `object` | `undefined` |

### OOFooter

```jsx
import React from "react";
import { OOFooter } from "onlyoffice-react-ui-kit/footer";
import "onlyoffice-react-ui-kit/footer/css";

function MyApp() {
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
    <div>
      <OOFooter
        locale="en"
        languages={languages}
        mailApiUrl="/api/subscribe"
        mailApiType={0}
      />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |
| `languages` | Controls the visibility and content of the language selector. Should contain { languages: [ [key: string, locale: string, name: string, href: string], ... ] }. | `object` | `undefined` |
| `base` | Base configuration for internal links. Should be an object like { url: string, withAspx: boolean }. | `object` | `undefined` |
| `mailApiUrl` | The URL for the email subscription API endpoint. Required for submitting the form data from the modal. | `string` | `null` |
| `mailApiType` | Type identifier for the email API | `number` | `null` |

## Storybook

### Build Storybook:

```
npm run build-storybook
```

### Start Storybook:

```
npm run storybook
```

## Feedback and support

In case you have any issues, questions, or suggestions for the onlyoffice-react-ui-kit package, please refer to the [Issues](https://github.com/ONLYOFFICE/onlyoffice-react-ui-kit/issues) section.

Official project website: [www.onlyoffice.com](https://www.onlyoffice.com/).

Support forum: [forum.onlyoffice.com](https://forum.onlyoffice.com/).

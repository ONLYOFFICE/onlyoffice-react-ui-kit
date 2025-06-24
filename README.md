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
    { key: "ar", shortKey: "ar", name: "عربي", href: "/" },
    { key: "cs", shortKey: "cs", name: "Čeština", href: "/" },
    { key: "de", shortKey: "de", name: "Deutsch", href: "/" },
    { key: "el", shortKey: "el", name: "Ελληνικά", href: "/" },
    { key: "en", shortKey: "en", name: "English", href: "/" },
    { key: "es", shortKey: "es", name: "Español", href: "/" },
    { key: "fr", shortKey: "fr", name: "Français", href: "/" },
    { key: "hi", shortKey: "hi", name: "हिन्दी", href: "/" },
    { key: "hy", shortKey: "hy", name: "Հայերեն", href: "/" },
    { key: "it", shortKey: "it", name: "Italiano", href: "/" },
    { key: "ja", shortKey: "ja", key: "ja", name: "日本語", href: "/" },
    { key: "nl", shortKey: "nl", name: "Nederlands", href: "/" },
    { key: "pt-br", shortKey: "pt", name: "Português", href: "/" },
    { key: "ru", shortKey: "ru", name: "Русский", href: "/" },
    { key: "sr", shortKey: "sr", name: "Srpski", href: "/" },
    { key: "zh-hans", shortKey: "zh", name: "中文", href: "/" },
  ];

  return (
    <div>
      <OOHeader locale="en" languages={languages} />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |
| `languages` | Controls the visibility and content of the language selector. Should contain { languages: [ [key: string, shortKey: string, name: string, href: string], ... ] }. | `object` | `undefined` |
| `search` | Enables and configures a search input in the header. Should be an object like { show: boolean, variant: "main" | "blog", value: string, onChange: () => void;, onSubmit: () => void; }. | `object` | `undefined` |
| `hasPhone` | Whether to display a phone selector block. | `boolean` | `false` |
| `highlight` | Highlights specific menu elements. Should be an object like { buttonId: string, linkId: string }, where values are DOM element IDs to apply highlight styles to. | `object` | `undefined` |
| `borderColor` | Sets the bottom border color of the header. | `string` | `transparent` |
| `backgroundColor` | Sets the background color of the header. | `string` | `transparent` |
| `theme` | Applies a predefined visual theme. Currently only "white" is supported. | `string` | `undefined` |
| `base` | Base configuration for internal links. Should be an object like { url: string, withAspx: boolean, localePathMap: object }. | `object` | `undefined` |

### OOFooter

```jsx
import React from "react";
import { OOFooter } from "onlyoffice-react-ui-kit/footer";
import "onlyoffice-react-ui-kit/footer/css";

function MyApp() {
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
    { shortKey: "ja", key: "ja", name: "日本語", href: "/" },
    { shortKey: "nl", name: "Nederlands", href: "/" },
    { shortKey: "pt", name: "Português", href: "/" },
    { shortKey: "ru", name: "Русский", href: "/" },
    { shortKey: "sr", name: "Srpski", href: "/" },
    { shortKey: "zh", name: "中文", href: "/" },
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
| `languages` | Controls the visibility and content of the language selector. Should contain { languages: [ [key: string, shortKey: string, name: string, href: string], ... ] }. | `object` | `undefined` |
| `base` | Base configuration for internal links. Should be an object like { url: string, withAspx: boolean, localePathMap: object }. | `object` | `undefined` |
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

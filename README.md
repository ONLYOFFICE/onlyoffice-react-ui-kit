# onlyoffice-react-ui-kit

This repository contains the ONLYOFFICE [React](https://react.dev/) components, designed for seamless integration into [Next.js](https://nextjs.org/) projects.

## Features

The `onlyoffice-react-ui-kit` package includes the following React components:
- **onlyoffice-react-ui-kit/advent-announce**: Displays the current banner, providing users with important announcements and updates.
- **onlyoffice-react-ui-kit/header-menu**: Renders the current menu in the header, allowing users to navigate easily throughout the application.
- **onlyoffice-react-ui-kit/footer-menu**: Displays the current menu in the footer, providing navigation links to different sections of the site and ensuring users have access to important information at the bottom of the page.

## Installation

Add onlyoffice-react-ui-kit to your project by executing `npm install onlyoffice-react-ui-kit` or `yarn add onlyoffice-react-ui-kit`.

## Usage

Here's an example of basic usage for each component:

### AdventAnnounce
```jsx
import React from "react";
import { AdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";

function MyApp() {
  return (
    <div>
      <AdventAnnounce locale="en" />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |

### HeaderMenu
```jsx
import React, { useState } from "react";
import { HeaderMenu } from "onlyoffice-react-ui-kit/header-menu";
import "onlyoffice-react-ui-kit/header-menu/css";

function MyApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HeaderMenu locale="en" isOpen={isOpen} />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |
| `isOpen` | Controls the visibility of the header menu on mobile devices. Set to true to open the menu and false to close it. | `boolean` | `false` |

### FooterMenu
```jsx
import React from "react";
import { FooterMenu } from "onlyoffice-react-ui-kit/footer-menu";
import "onlyoffice-react-ui-kit/footer-menu/css";

function MyApp() {
  return (
    <div>
      <FooterMenu locale="en" mailApiUrl="/api/subscribe" mailApiType={0} />
    </div>
  );
}
```

**API**
**Props**
| Name | Description | Type | Default |
| ------------- | ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`, `"nl"`. | `string` | `"en"` |
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
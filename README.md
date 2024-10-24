# onlyoffice-advent-announce

This repo contains the ONLYOFFICE React component which integrates into [React](https://react.dev/) projects.

## Features

The onlyoffice-advent-announce component displays the current banner from the ONLYOFFICE site, providing users with important announcements and updates.

## Installation

Add onlyoffice-advent-announce to your project by executing `npm install onlyoffice-advent-announce` or `yarn add onlyoffice-advent-announce`.

## Usage

Here's an example of basic usage:

```jsx
import React from "react";
import { OOAdventAnnounce } from "onlyoffice-advent-announce";

function MyApp() {
  return (
    <OOAdventAnnounce />
  );
}
```

## Custom styling

If you want to use default onlyoffice-advent-announce styling to build upon it, you can import onlyoffice-advent-announce's styles by using:

```jsx
import "onlyoffice-advent-announce/dist/oo-advent-announce.css";
```

## API
### Props
| Name | Description | Default |
| ------------- | ------------- | ------------- |
| `locale` | Locale that should be used. Supported values: `"en"`, `"fr"`, `"de"`, `"es"`, `"pt"`, `"pt-br"`, `"it"`, `"cs"`, `"ja"`, `"zh"`, `"zh-hans"`, `"el"`, `"hi"`, `"ar"`, `"sr"`, `"hy"`, `"ru"`. | `"en"` |

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

In case you have any issues, questions, or suggestions for the onlyoffice-advent-announce component, please refer to the [Issues](https://github.com/ONLYOFFICE/onlyoffice-advent-announce/issues) section.

Official project website: [www.onlyoffice.com](https://www.onlyoffice.com/).

Support forum: [forum.onlyoffice.com](https://forum.onlyoffice.com/).
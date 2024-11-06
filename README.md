# Todo App

Welcome to my todo app. Please follow the instructions below to review it.

## Installation

- Install Node 16: I recommend using a version manager such as [nvm](https://github.com/nvm-sh/nvm);
- Install Yarn: `npm install -g yarn`;
- Clone repository locally;
- On your local repo:
  - Install dependencies: `yarn`;
  - Serve the app: `yarn start`.

Visit the app on http://localhost:3000.

> [!NOTE]
> Node's current LTS version is 22, but installing dependencies and running `yarn start` failed with the following error:
> `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "exports" in <project_path>/node_modules/postcss-safe-parser/node_modules/postcss/package.json`.
> Using Node 16 should work fine, given it was the LTS version on Jul 2021, when this challenge was created.

## Features

1. The list has 3 states. Each represented by a column. Similar to Trello.
   1. `Todo`
   2. `In Progress`
   3. `Done`
2. Each list item has a right and left arrow button.
   1. The right arrow moves the list item from:
      1. `Todo` to `In Progress`
      2. `In Progress` to `Done`
   2. The Left arrow moves the list item from
      1. `Done` to `In Progress`
      2. `In Progress` to `Todo`
3. If the list in the in the `Todo` column, the left button should be disabled
4. If the list is in the `Done` column, the right button should be disabled.
5. There should be form with a text input below the buttons. When the user submits the form, the text from the text input should be added to a new todo item in the `Todo` column.

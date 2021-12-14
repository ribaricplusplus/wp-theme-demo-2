# WP Theme Demo

WordPress theme skeleton with the following features:

- `@wordpress/env` server
- e2e tests with puppeteer. See `specs/` directory.
- JS unit tests. See `js/basic-script/__tests__/` directory.
- PHPUnit tests. See `phpunit/` directory.
- Composer autoloading.
- Building JavaScript
- SCSS
- Linting / formatting for PHP, JS and SCSS.

## Setup

Run the following commands

```
nvm use
node ./scripts/setup.js
```

Start the server

```
npx wp-env start
```

Test that it works

```
npm run test:e2e
```

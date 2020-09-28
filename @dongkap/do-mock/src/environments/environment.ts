/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  locale: 'en-US',
  basePath: '/',
  host: {
    auth: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
    security: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
    profile: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
    master: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
    file: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
    notification: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
    panic: {
      protocol: 'http',
      host: 'localhost',
      port: 8085,
    },
  },
};

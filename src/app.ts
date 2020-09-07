import 'reflect-metadata'; // We need this in order to use @Decorators

import config from './Config';

import express from 'express';

import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  });
}

startServer();




//  yarn add -D @types/agenda @types/express @types/lodash @types/mongoose @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier nodemon prettier  ts-node tslint typescript



//  yarn add agenda agendash body-parser celebrate cors dotenv errorhandler express-basic-auth express-jwt jsonwebtoken lodash mailgun-js method-override moment moment-timezone mongoose morgan reflect-metadata typedi winston bcryptjs express express-validator install mongoose-unique-validator mongoose-paginate-v2 nodemon --save
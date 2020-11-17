const http = require('http');

const app = require('./app');
const {
    globalConfig,
    sequelizeConfig: {
        sequelize,
        syncOptions
    }
} = require('./configs');
const {winstonLogger} = require('./loggers');

const server = http.createServer(app);

sequelize.sync(syncOptions)
    .then(() => server.listen(globalConfig.PORT, () => console.log(`(☞ﾟヮﾟ)☞ Server ready at http://localhost:${globalConfig.PORT}/ ☜(ﾟヮﾟ☜)`)))
    .catch(error => {
        winstonLogger.error(error);
        server.close(() => process.exit(0));
    });

process.on('SIGTERM', () => server.close(() => process.exit(0)));

process.on('uncaughtException', () => server.close(() => process.exit(0)));

process.on('unhandledRejection', () => server.close(() => process.exit(0)));

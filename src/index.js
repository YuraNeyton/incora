const http = require('http');
const socketIo = require('socket.io');

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
const io = socketIo(server);

io.on('connection', socket => {
    console.log('New WS Connection...');

    socket.emit('message', 'Welcome to server');

    socket.on('disconnect', () => io.emit('message',`Disconnected from server`));
})

sequelize.sync(syncOptions)
    .then(() => server.listen(globalConfig.PORT, () => console.log(`(☞ﾟヮﾟ)☞ Server ready at http://localhost:${globalConfig.PORT}/ ☜(ﾟヮﾟ☜)`)))
    .catch(error => {
        winstonLogger.error(error);
        server.close(() => process.exit(0));
    });

process.on('SIGTERM', () => server.close(() => process.exit(0)));

process.on('uncaughtException', () => server.close(() => process.exit(0)));

process.on('unhandledRejection', () => server.close(() => process.exit(0)));

module.exports = io;

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const dotEnv = require('dotenv');

dotEnv.config();

const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('./constants');
const {
    associations: {
        initDBAssociations
    }
} = require('./database');
const {
    globalConfig,
    corsConfig,
    rateLimitConfig
} = require('./configs');
const {errors} = require('./errors');
const {winstonLogger} = require('./loggers');
const {apiRouter, notFoundRouter} = require('./routes');

const app = express();

app.use(morgan(globalConfig.MORGAN_FORMAT));
app.use(cors(corsConfig));
app.use(rateLimit(rateLimitConfig));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('*', notFoundRouter);

initDBAssociations();

app.use((err, req, res, next) => {
    winstonLogger.error({
        method: req.method,
        url: req.path,
        data: req.body,
        time: new Date(),
        massage: err.message
    });
    next(err);
});
app.use((err, req, res, next) => {
    res
        .status(err.status || ResponseStatusCodeEnum.SERVER_ERROR)
        .json({
            message: err.message || errors.SERVER_UNKNOWN_ERROR.message,
            code: err.code || errors.SERVER_UNKNOWN_ERROR.code
        });
});

module.exports = app;

module.exports = {
    PORT: process.env.PORT || '3000',
    HOST: process.env.HOST || 'http://localhost',
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',

    MORGAN_FORMAT: process.env.MORGAN_FORMAT || 'dev',

    JWT_SECRET: process.env.JWT_SECRET || 'PJjBg4Jr6Bta295',
    ACCESS_TOKEN_LIFETIME: process.env.ACCESS_TOKEN_LIFETIME || '1h',

    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'dnjK7KXJPzTV5kq',
    REFRESH_TOKEN_LIFETIME: process.env.REFRESH_TOKEN_LIFETIME || '30m',

    DATABASE_USER: process.env.DATABASE_USER || 'postgres',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'root',
    DATABASE_NAME: process.env.DATABASE_NAME || 'incora',
    DATABASE_HOST: process.env.DATABASE_HOST || '127.0.0.1',
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
};


const {
    enums: {
        responseStatusCode: {
            ResponseStatusCodeEnum
        }
    }
} = require('../constants');
const {userService} = require('../services');

class UserController {

    async create(req, res, next) {
        try {
            await userService.create(req.body);


            res.status(ResponseStatusCodeEnum.CREATED).end();

        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.user;

            await userService.update(id, req.body);

            res.status(ResponseStatusCodeEnum.CREATED).end();

        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.user;

            await userService.delete(id);

            res.status(ResponseStatusCodeEnum.NO_CONTENT).end();

        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await userService.getAll();

            res.json({
                data: users
            });

        } catch (error) {
            next(error);
        }
    }

    getById(req, res, next) {
        try {
            const user = req.user ;

            res.json({
                data: user
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();

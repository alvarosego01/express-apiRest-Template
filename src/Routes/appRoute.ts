import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
    app.use('/prueba', route);
    route.get('/', (req, res, next) => {
        //
        res.status(200).json({
            ok: true,
            mensaje: 'API WAM V2 project, en funcionamiento'
        });
        //
    });
};
// module.exports = app;

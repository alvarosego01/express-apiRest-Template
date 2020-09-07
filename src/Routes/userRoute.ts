import { Router, Request, Response } from 'express';
// import middlewares from '../middlewares';
import { UserController } from '../Controllers/controllers.index';
const route = Router();




// import middlewares from '../middlewares';
const User = new UserController();

export default (app: Router) => {

    app.use('/user', route);
    route.get('/', async (req, res, next) => {
        // let aux  = await User.Index();
        var l = {
            mensaje: 'USER ruta escuchando'
        };
        return res.status(200).json(l);
    });
    route.post('/create', async (req, res, next) => {
        let aux = req.body;
        // console.log('lo que es req', req);
        console.log('lo que viene por body', aux);
        aux = await User.create(aux);
        // User.culo();
        return res.status(aux.status).json(aux);
    });
    // app.put('/modify/:id', async (req, res, next)=>
    // {
    //     let aux  =  req.body;
    //     aux      =  await User.Modify(req.params.id, aux);
    //     return res.status(aux.status).json(aux);
    // });
    // app.put('/restore/:id', async (req, res, next)=>
    // {
    //     let aux  =  await User.Restore(req.params.id);
    //     return res.status(aux.status).json(aux);
    // });
    // app.delete('/delete/:id', async (req, res, next)=>
    // {
    //     let aux  =  await User.Delete(req.params.id);
    //     return res.status(aux.status).json(aux);
    // });
    // app.delete('/destroy/:id', async (req, res, next)=>
    // {
    //     let aux  =  await User.Destroy(req.params.id);
    //     return res.status(aux.status).json(aux);
    // });
};
// }
// }


// export default (app: Router) => {
//     app.use('/users', route);

//     route.get('/me', middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
//       return res.json({ user: req.currentUser }).status(200);
//     });
//   };

const Middleware = require('./Middleware');
const KEY        = require('./Middleware');

class LoginMiddleware extends Middleware
{
    constructor(){ super();}

    static verifyToken(req, res, next)
    {//funcion que me verifica el token web
        let token = req.query.t;
        KEY.JWT.verify(token, KEY.SEED, (err, decode)=>
        {
            if(err)
            {
                KEY.Response.message = 'Token inválido o no obtenido, por favor inicie sesión =/';
                KEY.Response.data    = null;
                KEY.Response.ok      = true;
                KEY.Response.status  = 401;

                return res.status(401).json(KEY.Response);
            }
            req.user = decode.user;
            next();
        });
    }

    static verifyAdminRole(req, res, next)
    {//funcion que me permite verificar si el usuario es admin
        let user = req.user;
        if(user.role === 'admin_role')
        {
            next();
            return;
        }else
        {
            KEY.Response.message = 'Usuario no posee acceso de administrador =/';
            KEY.Response.data    = null;
            KEY.Response.ok      = true;
            KEY.Response.status  = 401;
            return res.status(401).json(KEY.Response);
        }
    }

    static verifySameUserOrAdmin(req, res, next)
    {//funcion que verifica si es el mismo usuario o es admnistrador
        let user    = req.user;
        let idUser  = req.params.id;

        if (user.role === 'admin_role' || user._id === idUser)
        {
            next();
            return;
        }else
        {
            KEY.Response.message = 'No es el dueño de estos datos, tampoco posee permisos de administración';
            KEY.Response.status  = 401;
            KEY.Response.ok      = true;
            KEY.Response.data    = null;
            return res.status(401).json(KEY.Response);
        }
    }


}

module.exports = LoginMiddleware;
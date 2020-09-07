import { userClass } from "./classes/class.index";
import { jsonResponse, Controller } from "./Controller";

const User = require('../Models/userSchema');
const Moment = require('moment');
const Bcrypt = require('bcryptjs');
// const Controller = require('./Controller').Controller;
const Response = jsonResponse;






const dateMoment = Moment().locale('es');
const _User = require('../models/userSchema');
const _userClass = new userClass();
/*({ esquema gral del registro de usuario
    'visible'       : (!value.visible)? true : value.visible,
    'name'          : value.name,
    'email'         : value.email,
    'pass'          : Bcrypt.hashSync(value.pass),
    'adress'        : value.adress,
    'phone'         : value.phone,
    'cID'           : value.cID,
    '_userQuestions': value._userQuestions,
    'photo'         : (!value.photo)? 'No_Posee': value.photo,
    'role'          : (!value.role)? 'client_role' : value.role,
    'created_at': Today.format('LL'),
    'updated_at': null,
});*/
export class UserController extends Controller {
    constructor() {
        super();
    }
    // async Index()
    // {// funcion que me retorna todos los usuarios del sistema
    //     try
    //     {
    //         const aux = await User.find();
    //         Response.data       = await aux.filter(item =>{ return item.visible != false; });
    //         Response.message    = "¡Usuario(os), "+Response.data.length+" encontrados!";
    //         Response.status     = 200;
    //         Response.ok         = true;
    //         return Response;
    //     } catch (error)
    //     {
    //         Response.data       = null;
    //         Response.message    = "Error no se encontraron usuarios";
    //         Response.ok         = false;
    //         Response.status     = 400;
    //         console.log('\n Error :', error, '\n');
    //     }
    // }
    async create(value) {
        // try
        // {
        //     value.pass          = Bcrypt.hashSync(value.pass);
        // Response.data       = await User.create(value);
        //     Response.message    = "¡Usuario creado!";
        //     Response.status     = 201;
        //     return Response;
        // } catch (error)
        // {
        //     Response.data       = null;
        //     Response.message    = "Error al crear el usuario";
        //     Response.ok         = false;
        //     Response.status     = 400;
        //     console.log('\n Error :', error, '\n');
        //     return Response;
        // }
        console.log('llega al controlador', value);
        let l = null;
        await _userClass.getPrueba(value).then(r => {
            l = r;
        });
        console.log('lo que llega e L', l);
        console.log('que coño es _user', _User);
        let c = await _User.create(l);
        Response.data = c;
        Response.message = 'Usuario creado';
        Response.status = 201;
        return Response;
    }
}
// module.exports = UserController;


// import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';

const Moment = require('moment-timezone');
const dateMoment = Moment().tz("America/Montevideo");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;
const roles = {
    values: [
        'ADMIN_ROLE',
        'CONTRATISTA_ROLE',
        'CANTANTE_ROLE',
        'INSTRUMENTISTA_ROLE',
        'ESCENADIRECTOR_ROLE',
        'ORQUESTADIRECTOR_ROLE'
    ],
    response: 'El rol {VALUE} no esta permitido'
}; //array de roles
// const _social = new Schema({
//     name: {
//         type: String,
//         required: false,
//         default: null
//     },
//     url: {
//         type: String,
//         required: false,
//         default: null
//     }
// });
// const _socialNetwork = new Schema({
//     youtube: {
//         type: String,
//         required: false,
//         default: null
//     },
//     webSite: {
//         type: String,
//         required: false,
//         default: null
//     },
//     _social: [_social]
// });
// const UserSchema = new Schema({
//     visible:
//     {
//         type: Boolean,
//         required: true,
//         default: false
//     },//valor de borrado lógico
//     name:
//     {
//         type: String,
//         required: [true, 'Debe proporcionar un nombre']
//     },//nombre del usuario
//     lastName:
//     {
//         type: String,
//         required: [true, 'Debe proporcionar un apellido']
//     },//apellido del usuario
//     originCountry:
//     {
//         type: String,
//         required: [true, 'Debe indicar el pais de origen']
//     },//pais de origen
//     citizenship:
//     {
//         type: String,
//         required: [true, 'Debe indicar una nacionalidad']
//     },//nacionalidad
//     user:
//     {
//         type: String,
//         unique: [true, 'El nickname ya existe'],
//         required: [true, 'Debe proporcionar un nickname']
//     },//nickname del usuario
//     pass:
//     {
//         type: String,
//         required: [true, 'Debe proporcionar una contraseña']
//     },//cntraseña del usuario
//     email:
//     {
//         type: String,
//         unique: [true, 'El email ya se encuentra registrado'],
//         required: [true, 'Debe proporcionar un email']
//     },//correo del usuario
//     phone:
//     {
//         type: String,
//         required: [true, 'Debe proporcionar un numero de contato']
//     },//correo del usuario
//     photo:
//     {
//         type: String,
//         required: false,
//         default: null
//     },//photo del usuario
//     _socialNetwork: _socialNetwork,
//     role:
//     {
//         type: String,
//         required: [true, 'Debe establecer un rol'],
//         enum: roles
//     },//roles de usuario
//     created_at:
//     {
//         type: String,
//         default: null
//     },//fecha de creación del usuario
//     updated_at:
//     {
//         type: String,
//         default: null
//     },//fecha de actualizacion de perfil del usuario
// });
const prueba = new Schema({
    name: {
        type: String,
        default: null
    },
    pass: {
        type: String,
        default: null
    },
    created_at: {
        type: String,
        default: dateMoment.format('LL')
    }
}, {
    strict: false,
    timestamps: true
});
// return mongoose.model<IUser & mongoose.Document>('User', User);
// prueba.plugin(uniqueValidator, { message: 'El {PATH} {VALUE} ya está registrado en sistema' });
prueba.plugin(mongoosePaginate);
// module.exports = mongoose.model('User',prueba);
// export default mongoose.model('Users', prueba);
let model = null;
try {
    model = mongoose.model('User', prueba);
}
catch (e) {
    // console.log(e);
    model = mongoose.model('User');
}
module.exports = model;
// export default model
// const users = module.exports = mongoose.model('User', prueba);
// import { IUser } from '../Interfaces/IUser';
// const User = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please enter a full name'],
//       index: true,
//     },
//     email: {
//       type: String,
//       lowercase: true,
//       unique: true,
//       index: true,
//     },
//     password: String,
//     salt: String,
//     role: {
//       type: String,
//       default: 'user',
//     },
//   },
//   { timestamps: true },
// );
// export default mongoose.model<IUser & mongoose.Document>('User', User);

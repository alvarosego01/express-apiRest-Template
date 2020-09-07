
const Moment = require('moment');
const Bcrypt = require('bcryptjs');
const dateMoment = Moment().locale('es');
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
export class userClass {
    constructor() {
    }
    getPrueba(value) {
        return new Promise((resolve, reject) => {
            var l = {
                name: value.name,
                pass: Bcrypt.hashSync(value.pass)
            };
            resolve(l);
            // return l;
        });
    }
}


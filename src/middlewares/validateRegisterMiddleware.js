const { body } = require('express-validator');
const path = require("path");

module.exports = [
    body('firstName').notEmpty().withMessage('Debes completar el campo de nombre.'),
    body('lastName').notEmpty().withMessage('Debes completar el campo de apellido.'),
    body('email')
    .notEmpty().withMessage('Debes completar el campo con un email.').bail()
    .isEmail().withMessage('Debes completar el campo con un email valido.'),
    body('password')
    .notEmpty().withMessage('Debes completar el campo con una contraseña.').bail()
    .isLength({min: 8}).withMessage('Contraseña no tiene un minimo de 8 caracteres.').bail()
    .isLength({max: 16}).withMessage('Contraseña tiene mas de 16 caracteres.'),
]



/* image check */               //si nos llegan a pedir que subamos una foto en el register //

// body('avatar').custom((value, {req }) => { 
//     let fle = req.file;
//     let accepetedExtensions = ['.jpg', '.png', '.gif' ];
    

//     if (!file) {
//         throw new Error('Tiene que subir una imagen');
//     } else {
//         let fileExtension = path.extname(file.originalname);
//         if (!accepetedExtensions.includes(fileExtension)){
//             throw new Error('Las extensiones de archivo pertimidas son: ' + accepetedExtensions.join(', '));
//         }
//     }
    
//     return true
// })
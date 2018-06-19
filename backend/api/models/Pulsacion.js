/**
 * Pulsacion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
<<<<<<< HEAD

  attributes: {
    nombreRaspberry:{
      type: 'string',
      required:true
    },
    usuarioIDFK: {
      model: 'usuario'
=======
  // Pulsacion
  attributes: {
    nombreRaspberry: {
      type: 'string',
      required: true
    },
    usuarioIdFK: {
      model: 'Usuario'
>>>>>>> 12f303f4e67fd06328c4c04c5800d690e200e7ab
    }
  },

};


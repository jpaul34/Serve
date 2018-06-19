/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
<<<<<<< HEAD
    nombre:{
      type: 'string',
      required:true
    },
    apellido:{
      type: 'string',
      required:true
    },
    pulsaciones: {
      collection: 'Pulsacion',
      via: 'usuarioIDFK'
=======
    nombre: {
      type: 'string',
      required: true
    },
    apellido: {
      type: 'string',
      required: true
    },
    pulsaciones: {
      collection: 'Pulsacion',
      via: 'usuarioIdFK'
>>>>>>> 12f303f4e67fd06328c4c04c5800d690e200e7ab
    }
  },

};


<<<<<<< HEAD

const request = require('request');

module.exports.bootstrap = async function(done) {
=======
/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const request = require('request');

module.exports.bootstrap = async function (done) {
>>>>>>> 12f303f4e67fd06328c4c04c5800d690e200e7ab

  setInterval(
    () => {
      console.log('Enviar datos');

      const objetoRequest = {
<<<<<<< HEAD
        url: 'http://localhost:1337/Pulsacion',
        form: {
          nombreRaspberry: 'Lolita',
          usuarioIDFK: '9'
=======
        url: 'http://localhost:1338/Pulsacion',
        form: {
          nombreRaspberry: 'Lolita',
          usuarioIdFK: 16 // USEN EL SUYO
>>>>>>> 12f303f4e67fd06328c4c04c5800d690e200e7ab
        }
      };
      request
        .post(objetoRequest,
          (err, respuesta, body) => {
            console.log('err', err);
            console.log('respuesta', respuesta);
            console.log('body', body);
<<<<<<< HEAD

=======
>>>>>>> 12f303f4e67fd06328c4c04c5800d690e200e7ab
          })
    }
    , 10000);

  return done();

};

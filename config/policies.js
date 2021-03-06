/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions (`true` allows public     *
   * access)                                                                  *
   *                                                                          *
   ***************************************************************************/

  '*': 'flash',

  'entrada': {
    'nuevo': 'authenticated',
    'create': 'authenticated',
    'update': 'authenticated',
    'delete': false,
    'index': 'flash',
    'misEntradas': 'authenticated'
  },
  'rol': {
    '*': 'authenticated',
    'update': false
  },
  'comentario': {
    'index': 'flash',
    '*': 'authenticated'
  },
  'categoriaentrada': {
    'index': 'flash',
    'create': 'authenticated',
    'update': 'authenticated',
    'delete': false, //Asegurar que no se pueda, de todas formas ya está deshabilitado los request DELETE
    'eliminar': 'authenticated'
  },
  'usuario': {
    'login': 'flash',
    'signin': 'flash',
    'register': 'flash',
    'perfil': 'authenticated',
    'signout': 'authenticated',
    'create': 'flash',
    'auth': 'flash',
    'index': false,
    '*': false
  },
  'blog': {
    'index': 'flash',
    'create': 'authenticated',
    'update': 'authenticated'
  }

  /***************************************************************************
   *                                                                          *
   * Here's an example of mapping some policies to run before a controller    *
   * and its actions                                                          *
   *                                                                          *
   ***************************************************************************/
  // RabbitController: {

  // Apply the `false` policy as the default for all of RabbitController's actions
  // (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
  // '*': false,

  // For the action `nurture`, apply the 'isRabbitMother' policy
  // (this overrides `false` above)
  // nurture	: 'isRabbitMother',

  // Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
  // before letting any users feed our rabbits
  // feed : ['isNiceToAnimals', 'hasRabbitFood']
  // }
};

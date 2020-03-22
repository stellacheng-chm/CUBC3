/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //Homepage
  '/': 'UserController.login',

  //Login/Logout
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  //Usermainpage
  '    /item/userindex': 'ItemController.userindex',
  '    /item/usernoti': 'ItemController.usernoti',
  '    /item/useraccount': 'ItemController.useraccount',
  '    /item/usersearch': 'ItemController.usersearch',

  //Vistormainpage
  '    /item/vistorsearch': 'ItemController.vistorsearch',
  '    /item/vistornotlogin': 'ItemController.vistornotlogin',

  //Adminmainpage
  '    /item/adminindex': 'ItemController.adminindex',
  '    /item/adminnoti': 'ItemController.adminnoti',
  '    /item/adminaccount': 'ItemController.adminaccount',
  '    /item/adminsearch': 'ItemController.adminsearch',
  '    /item/adminedititem': 'ItemController.adminedititem',
  '    /item/adminadditem': 'ItemController.adminadditem',
  '    /item/adminaddbook': 'ItemController.adminaddbook',
  '    /item/adminaddgame': 'ItemController.adminaddgame',
  '    /item/adminaddgift': 'ItemController.adminaddgift',
  '    /item/adminaddmaterial': 'ItemController.adminaddmaterial',
  '    /item/adminaddaccount': 'ItemController.adminaddaccount',

  //UserBookpage
  '   /book/userbooksearch': 'BookController.userbooksearch',
  'GET /book/userbookresult': 'BookController.userbookresult',
  '   /book/userbookdetail/:id': 'BookController.userbookdetail',

  //UserGamepage
  '   /game/usergamesearch': 'GameController.usergamesearch',
  'GET /game/usergameresult': 'GameController.usergameresult',
  '   /game/usergamedetail/:id': 'GameController.usergamedetail',

  //UserGiftpage
  '   /gift/usergiftsearch': 'GiftController.usergiftsearch',
  'GET /gift/usergiftresult': 'GiftController.usergiftresult',
  '   /gift/usergiftdetail/:id': 'GiftController.usergiftdetail',

  //UserMaterialpage
  '   /material/usermaterialsearch': 'MaterialController.usermaterialsearch',
  'GET /material/usermamterialresult': 'MaterialController.usermaterialresult',
  '   /material/usermaterialdetail/:id': 'MaterialController.usermaterialdetail',

  //AdminBookpage
  '   /book/adminbooksearch': 'BookController.adminbooksearch',
  'GET /book/adminbookresult': 'BookController.adminbookresult',
  '   /book/adminbookdetail/:id': 'BookController.adminbookdetail',
  '   /book/adminbookedit': 'BookController.adminbookedit',
  'GET /book/adminbookupdate/:id': 'BookController.adminbookupdate',
  'POST /book/adminbookupdate/:id': 'BookController.adminbookupdate',
  'POST /book/adminbookdelete/:id': 'BookController.adminbookdelete',

  //AdminGamepage
  '   /game/admingamesearch': 'GameController.admingamesearch',
  'GET /game/admingameresult': 'GameController.admingameresult',
  '   /game/admingamedetail/:id': 'GameController.admingamedetail',
  '   /game/admingameedit': 'GameController.admingameedit',
  'GET /game/admingameupdate/:id': 'GameController.admingameupdate',
  'POST /game/admingameupdate/:id': 'GameController.admingameupdate',
  'POST /game/admingamedelete/:id': 'GameController.admingamedelete',
  


  //AdminGiftpage
  '   /gift/admingiftsearch': 'GiftController.admingiftsearch',
  'GET /gift/admingiftresult': 'GiftController.admingiftresult',
  '   /gift/admingiftdetail/:id': 'GiftController.admingiftdetail',
  '   /gift/admingiftedit': 'GiftController.admingiftedit',
  'GET /gift/admingiftupdate/:id': 'GiftController.admingiftupdate',
  'POST /gift/admingiftupdate/:id': 'GiftController.admingiftupdate',
  'POST /gift/admingiftdelete/:id': 'GiftController.admingiftdelete',

  //AdminMaterialpage
  '   /material/adminmaterialsearch': 'MaterialController.adminmaterialsearch',
  'GET /material/adminmamterialresult': 'MaterialController.adminmaterialresult',
  '   /material/adminmaterialdetail/:id': 'MaterialController.adminmaterialdetail',
  '   /material/admingameedit': 'MaterialController.admingameedit',
  'GET /material/adminmaterialupdate/:id': 'MaterialController.adminmaterialupdate',
  'POST /material/adminmaterialupdate/:id': 'MaterialController.adminmaterialupdate',
  'POST /material/adminmaterialdelete/:id': 'MaterialController.adminmaterialdelete',

  //VistorBookpage
  '    /book/vistorbooksearch': 'BookController.vistorbooksearch',
  'GET /book/vistorbookresult': 'BookController.vistorbookresult',
  '   /book/vistorbookdetail/:id': 'BookController.vistorbookdetail',

  //VistorGamepage
  '   /game/vistorgamesearch': 'GameController.vistorgamesearch',
  'GET /game/vistorgameresult': 'GameController.vistorgameresult',
  '   /game/vistorgamedetail/:id': 'GameController.vistorgamedetail',
  
  


  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};

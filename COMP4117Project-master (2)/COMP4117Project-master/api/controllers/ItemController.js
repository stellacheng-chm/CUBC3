/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    userindex: async function (req, res) {


        return res.view('item/userindex');
    },

    adminindex: async function (req, res) {


        return res.view('item/adminindex');
    },

    usersearch: async function (req, res) {


        return res.view('item/usersearch');
    },

    vistorsearch: async function (req, res) {


        return res.view('item/vistorsearch');
    },

    adminsearch: async function (req, res) {


        return res.view('item/adminsearch');
    },

    usernoti: async function (req, res) {
        return res.view('item/usernoti');
    },

    useraccount: async function (req, res) {
        var username=req.session.username
        var user=await User.findOne({username:username});
        return res.view('item/useraccount', {model:user});
    },

    vistornotlogin: async function (req, res) {
        return res.view('item/vistornotlogin');
    },

    adminnoti: async function (req, res) {


        return res.view('item/adminnoti');
    },

    adminaccount: async function (req, res) {
        var username=req.session.username
        var user=await User.findOne({username:username});
        return res.view('item/adminaccount',{model:user});
    },

    adminadditem: async function (req, res) {


        return res.view('item/adminadditem');
    },

    adminedititem: async function (req, res) {


        return res.view('item/adminedititem');
    },

    adminaddbook: async function (req, res) {

        if (req.method == "GET")
            return res.view('item/adminaddbook');

        if (!req.body.Book)
            return res.badRequest("Form-data not received.");

        await Book.create(req.body.Book);

        return res.view('item/adminaddbook')
    },

    adminaddgame: async function (req, res) {

        if (req.method == "GET")
            return res.view('item/adminaddgame');

        if (!req.body.Game)
            return res.badRequest("Form-data not received.");

        await Game.create(req.body.Game);

        return res.view('item/adminaddgame')
    },

    adminaddgift: async function (req, res) {

        if (req.method == "GET")
            return res.view('item/adminaddgift');

        if (!req.body.Gift)
            return res.badRequest("Form-data not received.");

        await Gift.create(req.body.Gift);

        return res.view('item/adminaddgift')
    },

    adminaddmaterial: async function (req, res) {

        if (req.method == "GET")
            return res.view('item/adminaddmaterial');

        if (!req.body.Material)
            return res.badRequest("Form-data not received.");

        await Material.create(req.body.Material);

        return res.view('item/adminaddmaterial')
    },

    adminaddaccount: async function (req, res) {

        if (req.method == "GET")
            return res.view('item/adminaddaccount');

        if (!req.body.User)
            return res.badRequest("Form-data not received.");

        const hash=await sails.bcrypt.hash(req.body.password, 10);

        await User.create([{username:req.body.username,password:hash,role:"user"}]);

        return res.view('item/adminaddaccount')
    },




};


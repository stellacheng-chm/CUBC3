//isUser.js
module.exports = async function (req, res, proceed) {

    if (req.session.username=="fung") {
        return proceed();   //proceed to the next policy,
    }
    if (req.session.username=="jay") {
        return proceed();   //proceed to the next policy,
    }
    if (req.session.username=="stella") {
        return proceed();   //proceed to the next policy,
    }
    if (req.session.username=="oscar") {
        return proceed();   //proceed to the next policy,
    }
    if (req.session.username=="jeremy") {
        return proceed();   //proceed to the next policy,
    }

    //--•
    // Otherwise, this request did not come from a logged-in user.
    return res.view('item/vistornotlogin');

};
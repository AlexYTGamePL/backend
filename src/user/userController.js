var userService = require('./userService');

var registerUser = async (req, res) => {

    try{

        console.log(req.body);
        var status = await userService.registerUserService(req.body);
        console.log(status);

        if(status){
            res.send({ "status": true, "message": "Registred"});
        }else{
            res.send({ "status": false, "message": "Fail"})
        }

    }

    catch(err){

        console.log(err);

    }

}

var loginUser = async (req, res) => {
    var result = null;
    try{
        result = await userService.loginUserService(req.body);
        if(result.status) {
            res.send({"status": true, "message": result.msg});
        }
        else{
            res.send({"status": false, "message": result.msg});
        }
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {registerUser, loginUser}
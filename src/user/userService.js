var userModel = require('./userModel')

module.exports.registerUserService = (userDetails) => {
    return new Promise((resolve, reject) => {
      var userModelData = new userModel({
        nickname: userDetails.nickname,
        discordNickName: userDetails.discordNickName,
        password: userDetails.password,
        job: "none",
        permissions: []
      });
  
      userModelData
        .save()
        .then((result) => {
          resolve(true);
        })
        .catch((error) => {
            console.log(error);
          reject(false);
        });
    });
  };
  


module.exports.loginUserService = (userDetails) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({ nickname: userDetails.nickname })
        .then((result) => {
            if (result) {
                if (result.password === userDetails.password) {
                    resolve({ status: true, msg: "Logged in" });
                } else {
                    reject({ status: false, msg: "Wrong password" });
                }
            } else {
                reject({ status: false, msg: "User not found" });
            }
        })
        .catch((error) => {
            reject({ status: false, msg: "Invalid data" });
        });
    });
};
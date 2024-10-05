const { User } = require("../db/index");


async function userMiddleware(req, res, next) {

      const username = req.headers.username;
      const password = req.headers.password;
    
      const user = await User.find({
        username,
        password,
      });
    
      if (user) {
        req.user = user;
        next();
      }
      res.status(403).send({
        msg:"User Doesnt Exist"
      })
    
}

module.exports = userMiddleware;
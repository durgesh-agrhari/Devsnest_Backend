const check = (req, res, next) => {
    if (req.session.User.role === "Super-admin") {
      next();
    } else {
      res.status(401).send("Needs to be super admin");
    }
  };
  
  module.exports = check;
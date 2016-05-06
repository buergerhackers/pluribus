// check current session
module.exports = {
  checkAuthentication: function (req, res, next) {
    console.log('I am checkAuth');
    if (req.session.user) {
      next();
    } else {
      console.log('no user');
      res.redirect('http://localhost:3000/connect/google');
    }
  }
};

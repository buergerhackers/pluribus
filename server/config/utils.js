// check current session
module.exports = {
  checkAuthentication: function (req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.redirect('http://localhost:3000/connect/google');
    }
  }, 

  getGoogId: function (req, res) {
    var googId = req.session.user;
    if(googId) {
      res.status(200).json(googId);
    } else {
      res.status(200).json({googId: 0});
    }
  }
};

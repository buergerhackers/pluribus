// check current session
// module.exports = {
//   checkAuthentication: function (req, res, next) {
//     if (req.session.user) {
//       next();
//     } else {
//       res.redirect('http://localhost:3000/connect/google');
//     }
//   }, 
// };

// module.exports = {
//   checkAuthentication: function (req, res, next) {
//     if (req.session.user) {
//       res.status(200).json({authenticated: true});
//       next();
//     } else {
//       res.status(200).json({authenticated: false});
//       //res.redirect('http://localhost:3000/connect/google');
//     }
//   }, 
// };

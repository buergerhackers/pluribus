var Plurb = require('../db/dbconfig').Plurb;
var User = require('../db/dbconfig').User;
var Topic = require('../db/dbconfig').Topic;

module.exports = {

  createPlurb: function (req, res) {
    var googId = req.session.user;
    var topicId = req.body.topicId;
    //make a db call using the googid and returns user data
    User.find({where: 
      {googid: googId}
    })
    .then(function (user) {
      //set the values for first and last names, picture
      //put all data into an objected used to create plurb
      var plurbData = {
        text: req.body.text,
        lat: req.body.lat,
        long: req.body.long,
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
        picture: user.dataValues.picture
      };
      Plurb.create(plurbData)
      .then(function (plurb) {
        //sets the foreign key of googId and topicId
        plurb.setUser(googId);
        plurb.setTopic(topicId);
        res.status(201).json(plurb);
      })
      .catch(function (err) {
        console.error(err);
      });
    });
  },

  getPlurb: function (req, res) {
    var plurbId = req.params.plurbId;
    Plurb.findById(plurbId)
    .then(function (plurb) {
      res.status(200).json(plurb);
    })
    .catch(function (err) {
      console.error(err);
    });
  },

  deletePlurb: function (req, res) {
    var plurbId = req.params.plurbId;
    Plurb.destroy({where: {id: plurbId}})
    .then(function () {
      res.status(201);
    })
    .catch(function (err) {
      console.error(err);
    });
  },

  getPlurbsByGoogId: function (req, res) {
    var googId = req.params.googId;
    Plurb.findAll({where: {UserGoogid: googId}})
    .then(function (plurbs) {
      res.status(200).json(plurbs);
    })
    .catch(function (err) {
      console.error(err);
    });
  }, 

  getPlurbsByLocation: function (req, res) {
    
    // OPTIONAL PARAMS
    // search terms
    var selectedUID = req.body.googId;
    var selectedTopicId = req.body.topicId;
    var clientUID = req.session.user;
    
    // filter state
    var filter = req.body.filter;
    
    // REQUIRED PARAMS
    var minLat = req.body.mapBounds.minLat;
    var maxLat = req.body.mapBounds.maxLat;
    var minLng = req.body.mapBounds.minLng;
    var maxLng = req.body.mapBounds.maxLng;
    
    var query = {};
    
    // if filter is FRIENDS
    if (filter === 'FRIENDS') {
      // if selectedUID is undefined
      if (selectedUID === undefined) {
        // default send plurbs of user's friends
        
        // INSERT getAllFriendsPlurbs
        
      } else {
        // send plurbs of selectedUID
        
        // INSERT getPlurbsByGoogId
        
      }
    }
    
    // if filter is TOPICS
    if (filter === 'TOPICS') {
      // if selectedTopicId is undefined
      if (selectedTopicID === undefined) {
        // default send all plurbs
        
      } else {
        // send plurbs of selectedTopicId
        
      }
    }
    /////////////////// OLD CODE //////////////////////////////
    
    //builds query object based off the presences of selectedUID and/or topicID + mapBounds
    if(typeof selectedTopicId === 'number' && typeof selectedUID === 'number') {
      // filter both by selectedTopicId AND selectedUID
      query = {
        include: [Topic],
        where: {
          lat: {$between: [minLat, maxLat]},
          long: {$between: [minLng, maxLng]},
          UserGoogid: selectedUID,
          TopicId: selectedTopicId,
        }
      };
    } else if (typeof selectedUID === 'number') {
      // filter ONLY by selectedUID
      query = {
        include: [Topic],
        where: {
          lat: {$between: [minLat, maxLat]},
          long: {$between: [minLng, maxLng]},
          UserGoogid: selectedUID,
        }
      };
    } else if (typeof selectedTopicId === 'number') {
      // filter ONLY by selectedTopicId
      query = {
        include: [Topic],
        where: {
          lat: {$between: [minLat, maxLat]},
          long: {$between: [minLng, maxLng]},
          TopicId: selectedTopicId,
        }
      };      
    } else {
      // all plurbs
      query = {
        include: [Topic],
        where: {
          lat: {$between: [minLat, maxLat]},
          long: {$between: [minLng, maxLng]},
        }
      }; 
    }
    
    /////// END OF OLD CODE ///////////////////

    Plurb.findAll(query)
    .then(function (plurbs) {
      res.status(200).json(plurbs);
    })
    .catch(function (err) {
      console.error (err);
    });
  },

  getAllFriendsPlurbs: function (req, res) {
    var googId = req.session.user;
    var minLat = req.body.mapBounds.minLat;
    var maxLat = req.body.mapBounds.maxLat;
    var minLng = req.body.mapBounds.minLng;
    var maxLng = req.body.mapBounds.maxLng;
    var friendsGoogIds = [];

    // Create array of all friends googIds
    User.find({where: {googid: googId}})
    .then(function(user) {
      //this built in Sequelize method will pull all friends
      user.getFriends()
       .then(function(friends){
        friends.forEach(function(friend) {
          //push each friend googid to the array
          friendsGoogIds.push(Number(friend.dataValues.googid));
        });
       })
       .then(function(){
        var googIds = friendsGoogIds.map(function(googId) {
          return {UserGoogid: googId};
        })
        //find all plurbs that have the friend googIds as UserGoogId (meaning they authored the plurb)
          Plurb.findAll({
            include: [Topic],
            where: {
              lat: {$between: [minLat, maxLat]},
              long: {$between: [minLng, maxLng]},
              $or: googIds,
            }
          })
            .then(function (plurbs) {
              res.status(200).json(plurbs);
            })
            .catch(function (err) {
              console.error(err);
            });
       });
    })
    .catch(function (err) {
      console.error(err);
    });
  }
};

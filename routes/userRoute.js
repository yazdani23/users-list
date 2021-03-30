const express=require("express");
const router=express.Router()

const indexController=require('./../controllers/indexController')
const listUsersController=require('./../controllers/listUsersController')
const addUserController=require('./../controllers/addUserController')
const editUserController=require('./../controllers/editUserController')
const deleteUserController=require('./../controllers/deleteUserController')

router.get("/",indexController)
router.get("/home",indexController)

router.get("/user/list",listUsersController)

router.post("/user/add",addUserController)

router.get("/user/edit/:id",editUserController.editPage )
router.post("/user/edit/:id",editUserController.updateUser)
router.get("/user/delete/:id",deleteUserController )

module.exports=router;



// // Require user model in our routes module
// let User = require('./userModel');

// //  store route
// userRoutes.route('/add').post(function (req, res) {
//   let user = new User(req.body);
//   user.save()
//     .then(user => {
//       res.status(200).json({'user': 'user in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

// // list-users route
// userRoutes.route('/list').get(function (req, res) {
//     User.find(function(err, users){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(users);
//     }
//   });
// });

// // edit get route
// userRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   User.findById(id, function (err, user){
//       res.json(user);
//   });
// });

// // edit post route
// userRoutes.route('/edit/:id').post(function (req, res) {
//     User.findById(req.params.id, function(err, user) {
//     if (!user)
//       res.status(404).send("data is not found");
//     else {
//         user.first_name = req.body.first_name;
//         user.last_name = req.body.last_name;

//         user.save().then(user => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// // delete route
// userRoutes.route('/delete/:id').get(function (req, res) {
//     User.findByIdAndRemove({_id: req.params.id}, function(err, user){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

// module.exports = userRoutes;
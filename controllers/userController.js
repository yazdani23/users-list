const User=require('./../models/userModel')

class userController {

    listUsers(req, res) {

        User.find(function(err, users){
            if(err){
            console.log(err);
            }
            else {
            res.json(users);
            }
      })
    }

    showAddUserPage(req, res) {
        console.log('show add user page');
        res.send('add a new user')
    }

    addUser(req, res) {
        let user = new User(req.body);
        user.save()
        .then(user => {
            res.status(200).json({'user': 'user in added successfully'});
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
    }

    editPage(req, res) {
        let id = req.params.id;
        User.findById(id, function (err, user){
            res.json(user);
        });
      }


    updateUser (req, res) {
        User.findById(req.params.id, function(err, user) {
        if (!user)
          res.status(404).send("data is not found");
        else {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
    
            user.save().then(user => {
              res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });
    }

    deleteUser(req, res) {
        User.findByIdAndRemove({_id: req.params.id}, function(err, user){
            if(err) res.json(err);
            else res.json('Successfully removed');
        })

    }



}

module.exports=new userController();
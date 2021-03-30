
function indexController(req,res){
        res.sendfile('frontend/build/index.html');
        //res.send('Welcome')
    }

module.exports =  indexController 
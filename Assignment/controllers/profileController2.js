module.exports = function(){
  return function(req, res, next){
    req.session.theUser = "something";
    console.log(req);


    next();
  }
}

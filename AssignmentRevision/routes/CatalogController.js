var express = require('express');
var router = express.Router();

var ItemDB = require('../util/ItemDB');
var ItemClass = require('../models/Item');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Assignment', {useNewUrlParser: true});
var db = mongoose.connection;
//create variable to hold the needed information for rendering
var viewAddress;
var viewData;
var itemSchema = new mongoose.Schema({
  itemCode: Number,
  name: String,
  category: String,
  description: String,
  rating: Number,
  image: String
});

var ItemModel = db.model('Item', itemSchema);
// at the start of application load the catalog
var itemArray = [];
//console.log("items list length: "+itemArray.length);

ItemDB.getItems(ItemModel).then(function(doc){
  for(var i = 0; i < doc.length; i++){
    itemArray[i] = doc[i];
  }
});


/* GET home page. */
router.get("/*",function (request, response,next) {
    //checking session
    console.log("checking for session data");
    //console.log("itemArray[0]\n" + itemArray[0].name);
    let sessionProfile = request.session.currentProfile;

    if (typeof sessionProfile != 'undefined'){ //session data exists. Use that.
        //console.log("session profile " + sessionProfile);
        //add user to view
        response.locals.theUser = request.session.theUser;
    }
    next();
});

router.get('/', function (request, response, next) {
    //render homepage view
response.render("index");
});

router.get('/categories', function (req, res) {
    //get items list from database

    // validate request to set view address and data
    var viewData = catalogValidation(req, res);
    //console.log("view data from catalogvalidation: "+ viewData);
    //console.log("items list: "+viewData.view    );

    //console.log("in categories: "+JSON.stringify(viewData.data));

    res.render(viewData.view, {data:viewData.data});
});

router.get('/categories/:categoryName', function (req, res) {
    var categoryName = req.params.categoryName;
    //console.log("Category Name:" + categoryName);

    // this route displays catalog of items for one category

    // validate request to set view address and data
    var viewData = catalogValidation(req, res);

    res.render(viewData.address, viewData.data);
})
router.get('/categories/item/:itemCode', function (req, res) {
    // this route displays item view
    var itemCode = req.params.itemCode;
    //console.log("Item Code:" + itemCode);

    // validate request to set view address and data
    var viewData = catalogValidation(req, res);
    res.render(viewData.view, {data:viewData.data});
});
router.get('/categories*', function (req, res) {
    // handle anything else coming through to /categories
    // validate request to set view address and data
    var viewData = catalogValidation(req, res);
    viewAddress = 'catalog';
});

//for contact and about views
// router.get('/contact', function (req, res) {
//     // render contact view
//     viewAddress = 'contact';
//     res.render(viewData.address);
// });

// router.get('/about', function (req, res) {
//     //render about view
//     viewAddress = 'about';
//     res.render(viewData.address);
// });

var catalogValidation = function (req, res) {
    //create variables to hold the needed information for rendering
    var viewAddress = 'catalog';
    var viewData = itemArray;

    //Check If the catalog request parameter exists and validates (is not null and is not empty and is a valid category)
    if (req.params.categoryName != null && req.params.categoryName != "") {
        //Get the items of this category from the items list
        //console.log("req.params.categoryName: " + req.params.categoryName);
        //Set viewAddress to catalog view
        viewAddress = 'catalog';
        //Set viewData to item list (narrowed down catalog)
        viewData = itemArray;
        //return data and how to display it
        catalog = { address: viewAddress, data: viewData };
        return catalog;

        //Check if the itemCode request parameter exists and validates (is not null and is not empty)
        //Check if the itemCode exists in the items list
    } else if (req.params.itemCode != null && req.params.itemCode != "") {
        //Set viewAddress to item view
        //console.log("req.params.itemCode: " + req.params.itemCode);
        viewAddress = 'item';
        //Get item object from items list
        for(var i = 0; i < itemArray.length; i++){
          if(itemArray[i].itemCode == req.params.itemCode){
            console.log("matching item codes");
            viewData = itemArray[i];
          }
        }
        //viewData = ItemDB.getItem(req.params.itemCode);
        console.log("view Data :" + JSON.stringify(viewData));
        //Set viewData to this item object

        //return data and how to display it
        catalog = { view: viewAddress, data: viewData };
        return catalog;
    } else { // If the itemCode does not validate
        // Default - Categories view including the complete item catalog
        //return data and how to display it
        catalog = { view: viewAddress, data: itemArray };
        console.log("catalog validation before return: "+catalog.view);
        console.log("catalog validation before return: "+JSON.stringify(itemArray[0]));
        return catalog;
    }
};

module.exports = router;

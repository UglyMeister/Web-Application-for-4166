// /* @nanajjar */

const Item = require('../models/Item');
const UserItems = require('../util/UserItemDB');

module.exports.getItems = function (category) {
    return new Promise((resolve, reject) => {
        Item.find({
            category: category
        }).then(data => {
            resolve(data);
        }).catch(err => {
            return reject(err);
        })
    })
}//end findAll by category

module.exports.getItem = function (itemCode) {
    return new Promise((resolve, reject) => {
        console.log("in itemDb " + itemCode);
        Item.findOne({
            code: itemCode
        }).exec().then(data => {
            resolve(data);
        }).catch(err => {
            return reject(err);
        })
    })
}//end find item



// class ItemDB {

//     constructor() {
//     }

//     addItem(db, code, name, desc, category, user) {
//         return new Promise((resolve, reject) => {
//             db.findOneAndUpdate({ $and: [{ code: code }, { user: user }] },
//                 { $set: { code: code, name: name, desc: desc, category:category, user: user } },
//                 { new: true, upsert: true }, function (err, data) {
//                     console.log(data);
//                     resolve(data);
//                 }).catch(erro => { return reject(err); });
//         }
//         )
//     }//end addItem

//     updateItemName(db, code, name, user) {
//         return new Promise((resolve, reject) => {
//             db.findOneAndUpdate({ $and: [{ code: code }, { user: user }] },
//                 { $set: { name: name } },
//                 { new: true, upsert: true }, function (err, data) {
//                     console.log(data);
//                     resolve(data);
//                 }).catch(erro => { return reject(err); });
//         }
//         )
//     }//end updateItemName
//     getItems(db,category) {
//         return new Promise((resolve, reject) => {
//             db.find({
//                 category: category 
//             }).then(data => {
//                 resolve(data);
//             }).catch(err => {
//                 return reject(err);
//             })
//         })
//     }//end findAll

//     // getItems(db) {
//     //     return new Promise((resolve, reject) => {
//     //         db.aggregate([{$group:{_id:'$category'}}]).then(data => {
//     //             console.log("in find all " + data);
//     //             resolve(data);
//     //         }).catch(err => { return reject(err); })
//     //     })
//     // }//end findAll
//     getItemsAll(db) {
//         return new Promise((resolve, reject) => {
//             db.find({}).then(data => {
//                 console.log("in find all " + data);
//                 resolve(data);
//             }).catch(err => { return reject(err); })
//         })
//     }//end findAll

//     // finds objects for the addStudent() function
//     findByID(db, code) {
//         return new Promise((resolve, reject) => {
//             db.find({
//                 code: code 
//             }).then(data => {
//                 resolve(data);
//             }).catch(err => {
//                 return reject(err);
//             })
//         });
//     }//end findByID

//     // deletes all data the database
//     remove(db, code) {
//         return new Promise((resolve, reject) => {
//             db.find({ code: code }).remove().exec().then(function () {
//                 resolve()
//             }).catch(err => { return reject(err); })

//         });
//     } //Delete item

//     // deletes all data the database
//     remove(db) {
//         return new Promise((resolve, reject) => {
//             db.find().deleteMany().exec().then(function () {
//                 resolve()
//             }).catch(err => { return reject(err); })

//         }); 
//     }//Delete everything

// }//end class

// module.exports = ItemDB;
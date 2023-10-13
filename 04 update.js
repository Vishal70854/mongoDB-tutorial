// find a document by its title
db.inventory.find({
    item : "paper"
})

// update a single document by its item value and set its values using $set
db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
    }
 )

 
// update an array element by providing "arrayName.index" under $set
// its for understanding purpose as we dont have cast array inside our document
// ex : cast : ["abc","xyz"] then abc will be updated to Mama Store
// -------------------------------------------------------------------
// db.inventory.updateOne( { title: "The Favourite2" },
// {
//   $set: {
//     "cast.0" : "Mama Store"
//     // plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
//   }
// })
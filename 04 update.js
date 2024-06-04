// find a document by its title
db.inventory.find({
    item : "paper"
})

// update a single document by its item value and set its values using $set
db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true } // if currentDate key exists then it will update its value otherwise it will create new key
    }
 )

// ----------------------------------------------------
 // find all document by its qty
db.inventory.find(
  { "qty": { $lt: 50 } })

// update many documents based on a single condition where qty < 50 and 
// it will change all output documents to 'P' and size.uom = "in"
// also we will get currentDate as another key if not present already
db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  {
    $set: { "size.uom": "in", status: "P" },
    $currentDate: { lastModified: true }
  }
)

// ---------------------------------------------------
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
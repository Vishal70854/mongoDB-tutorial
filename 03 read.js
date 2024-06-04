db.inventory.find() // get all documents in the current database
db.inventory.find({}) // get all documents in the current database(same as above query)
db.inventory.find({qty : 100}) // get all documents whose qty is 100

// get all documents with title = The Favourite2

db.inventory.find( { status: "D" })

// if we want only one document to read then use findOne()
db.inventory.findOne( { status: "D" } )

// get all documents where status is between A or D
// $in means it will check the values within the array for current key i.e here it is checking for genres
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

// AND command in mongo db
// get all documents where status = A and qty < 30
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// OR command in mongo db
// get all documents where status = "A" and (either status = A pr qty < 30)
// $or means it will check either of the values mention within the array
db.inventory.find( {
    status : "A",
    $or: [ { status: "A" }, { qty: { $lt: 30 } } ]
} )


    

 
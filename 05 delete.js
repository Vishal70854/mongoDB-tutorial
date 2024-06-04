// delete only one document(1st found document) which matches a single condition
db.inventory.deleteOne( { status: "D" } )

// deletes all documents from inventory collection
db.inventory.deleteMany({})

// delete all documents from inventory collection where status = 'A'
db.inventory.deleteMany({ status : "A" })



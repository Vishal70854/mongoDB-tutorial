
// Building the Database by inserting many documents at once
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])

 // sort all documents by using sort({parameter : 1/-1}) // 1 means ascending order and -1 means descending order sort
db.inventory.find().sort({qty : 1}) // sort documents in ascending order by quantity
db.inventory.find().sort({qty : -1}) // sort documents in descending order by quantity 

 // find documents with limit(num) i.e if limit is 1 only 1 document will be returned
db.inventory.find().limit(2) // limits the number of document in output to 1
db.inventory.find().limit(2) // limits the number of document in output to 2

// get all documents by skipping the 1st document
db.inventory.find().skip(1)
db.inventory.find().skip(1) // get all documents by skipping the first 2 documents


// Achieving Pagination using MongoDB using find() and limit()
no = 8
db.blogs.skip((pageNo - 1)*no).limit(no) //  assume blogs is a collection of documents
pageNo = 1 db.blogs.skip(0).limit(8)
pageNo = 2 db.blogs.skip(8).limit(16)
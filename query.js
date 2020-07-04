// ------------- Working with int32 ---------------------
// persons collection
// drop persons collection

// add document with age value of 29
// what datatype is being stored here by default?
db.persons.insertOne({ age: 29 })

// get stats and check the size and take note of it
db.persons.stats();

// delete all entries in persons collection
db.persons.deleteMany({});

// add document with age value 29 but store it as an integer
db.persons.insertOne({ age: NumberInt(29) });

// check the size compare the size to the size of the previous document entry
db.persons.stats();
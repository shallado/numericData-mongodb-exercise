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

// ------------- Working with int64 ---------------------
// insert data 
// what do you notice explain?
db.companies.insertOne({ valuation: NumberInt('5000000000') });

// insert data
db.companies.insertOne({ valuation: NumberInt('2147483648') });
// insert data
db.companies.insertOne({ valuation: NumberLong('2147483648') });

// what do you notice between the 2 data values that were inserted above?

// so this is the maximum number you can store for a NumberLong
// between the document inserts which one will error out and why
db.companies.insertOne({ valuation: NumberLong(9223372036854775807) });
db.companies.insertOne({ valuation: NumberLong('9223372036854775807') });
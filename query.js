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

// ------------- Doing Maths with Floats int32s & int64s ---------------------
// run the two queries below will you get an error?
db.accounts.insertOne({
  name: 'Max',
  amount: '10'
});
db.accounts.updateOne({}, {
  $inc: {
    amount: 10
  }
});

db.accounts.deleteMany({});

// what the is the difference between the two inserts below?
// the difference is that one is a number 10 is still the default double 64bit number being passed into the NumberInt method
// while the other one is a string and we have mongodb figure how to set the number to the proper number datatype which in our case is int32
db.accounts.insertOne({
  name: 'Max',
  amount: NumberInt(10)
});
db.accounts.insertOne({
  name: 'Max',
  amount: NumberInt('10')
});

// what is the difference of running these to separate updates to a document?
// Essentially both are going to increment the amount by 10 successfully but the first update will convert the number from int32 back to double 64bit after is been updated
// the second update is the better approach because it increments the amount by 10 but it maintains the int32 datatype value
db.accounts.updateOne({}, {
  $inc: {
    amount: 10
  }
});
db.accounts.updateOne({}, {
  $inc: {
    amount: NumberInt('10')
  }
});
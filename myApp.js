require('dotenv').config();
let mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Database Connected successfully");
});

const personSchema = new mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number},
  favoriteFoods:{type:[String]}
});

let Person = mongoose.model("Person",personSchema);

const createAndSavePerson = (done) => {
  let person= new Person(
  {
    name:"Shriramu",
    age:20,
    favoriteFoods:["dosa","biriyani"]
  }
  );

  person.save(function(err,data){
    if (err) 
    return done(err);
    done(null, data);
  });

  
};
let arrayOfPeople = [{
  name:"Shriramu",
  age:20,
  favoriteFoods:["dosa","biriyani"]
},
{
  name:"Narayan",
  age:20,
  favoriteFoods:["chapathi,poori"]
}]
const createManyPeople = (arrayOfPeople, done) => {
  

  Person.create(arrayOfPeople,function(err,data){
    if (err) 
    return done(err);
    done(null, data);
  });
  
};

let personName = "shriramu";

const findPeopleByName = (personName, done) => {
  Person.find({name:personName}).exec(function(err,data){
    if (err) 
    return done(err);
    done(null, data);
  })
  
};

let food = "dosa";

const findOneByFood = (food, done) => {
  Person.findOne({"favoriteFoods":{$elemMatch:{name:food}}},function(err,data){
    if (err) 
    return done(err);
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

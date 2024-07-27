const mongoose = require('mongoose');

// Child documents or subdocuments can be embedded into a parent document
// the managerSchema defines the shape for manager subdocument
// const socialSchema = new mongoose.Schema({
//   name: { type: String, required: true },
// });

// The userScheme defines the shape for the user subdocument
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique:true, trim:true},
  email: { type: String, required:true, unique:true,match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
  thoughts: [{type: Schema.Types.ObjectId,ref :'thoughts'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'friends'}],
    toJson: {
    virtuals:true,
   },
   id:false,
});
//Creating virtual property 'friendCount' that retrieves length of the user's friends array field on query

userSchema.virtual('friendsCount').get(function(){
    return this.friends.length;
});
 
//initialize our user model

const User = model('user', userSchema);

module.exports = User;

const thoughtSchema = new mongoose.schema ({
    thoughtText:{ type: String, required:true, minLength:1, maxLength:280 },
    createdAt :{
        type:Date, default: Date.now},
        //need to ad 'getter' method to format the timestamp on query 
    username: { type:String, required: true, },
    reactions :[{reactionSchema}],
});



// socialSchema provides the shape of the parent document
const socialSchema= new mongoose.Schema({
  name: { type: String, required: true },
  // This will add a single subdocument to include the manager's information
  users: [userSchema],
  // This will include an array that holds all the employees' information
 email: email,
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const socialNetwork = mongoose.model('social', socialSchema);

// Uses model to create new instance including subdocument
const user = { name: 'Taylor', email: 'tony7@gmail.com',  };
const employeeData = [
  { name: 'Ann', salary: 40000 },
  { name: 'Liu', salary: 50000 },
];

Department
  .create({ name: 'Shoes', manager: managerData, employees: employeeData })
  .then(data => console.log(data))
  .catch(err => console.error(err));

module.exports = Department;

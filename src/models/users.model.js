const { Schema, model } = require('mongoose');
 
//schema let us define the attributes, in this case name, password and role
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Schema.Types.ObjectId,
            enum : ['user', 'admin', 'anonymous'],
            default: 'user'
        }
   },
   {
    versionKey: false,
    timestamps: true
   }
    );
 
//the model = (name, schema) -> collection
//'Book' is how it will be stored in the db and how we will reference it
const UserModel = model('user', UserSchema);
module.exports = UserModel;
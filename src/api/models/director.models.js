const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directorSchema = new Schema(
      {
        name:{type:String, required:true},
        country:{type:String, required:true},
        img:{type:String, required:false}
      },{
        timestamps:true
      }
);

const director = mongoose.model("director", directorSchema);


module.exports = director;
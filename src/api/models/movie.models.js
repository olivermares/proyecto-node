const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
      {
        title:{type:String, required:true},
        country:{type:String, required:true},
        img:{type:String, required:false},
        director: {type:Schema.Types.ObjectId, ref:"director", require:false},
        cast: [{type:Schema.Types.ObjectId, ref:"actor", requier:false}],  
      },{
        timestamps:true
      }
);

const movie = mongoose.model("movie", movieSchema);


module.exports = movie;
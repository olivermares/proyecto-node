const Director = require("../models/director.models");

const getDirectors = async (req, res) => {
  try {
    const allDirector = await Director.find();
    return res.status(200).json(allDirector);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postDirector = async (req, res) => {
  try {
    const newDirector = new Director(req.body);
    const createdDirector = await newDirector.save();

    return res.status(201).json(createdDirector);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const putDirector = new Director(req.body);
    putDirector._id = id;
    const updatedDirector = await Movie.findByIdAndUpdate(id, putDirector, {
      new: true,
    });
    if (!updatedDirector) {
      return res.status(404).json({ message: "no existe este id de actor" });
    }
    return res.status(200).json(updatedDirector);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteDirector = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedDirector = await Director.findByIdAndDelete(id)
    if (!deletedDirector) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedDirector);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getDirectors, postDirector, putDirector, deleteDirector };

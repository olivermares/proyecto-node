const Movie = require("../models/movie.models");

const getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();

    return res.status(201).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const putPelicua = new Movie(req.body);
    putPelicua._id = id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {
      new: true,
    });
    if (!updatedMovie) {
      return res.status(404).json({ message: "no existe este id de pelicula" });
    }
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteMovie = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id)
    if (!deletedMovie) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedPeliclua);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getMovies, postMovie, putMovie, deleteMovie };

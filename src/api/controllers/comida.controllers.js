const Comida = require("../models/comida.models");

const getComidas = async (req, res) => {
  try {
    const allComidas = await Comida.find();
    return res.status(200).json(allComidas);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postComidas = async (req, res) => {
  try {
    // console.log(req.body)
    const newComida = new Comida(req.body);
    const createdComida = await newComida.save();

    return res.status(201).json(createdComida);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putComida = async (req, res) => {
  try {
    const { id } = req.params;
    //  console.log(id);
    const putComida = new Comida(req.body);
    putComida._id = id;
    const updatedComida = await Comida.findByIdAndUpdate(id, putComida, {
      new: true,
    });
    // console.log(updatedComida);
    if (!updatedComida) {
      return res.status(404).json({ message: "no existe este id de comida" });
    }
    return res.status(200).json(updatedComida);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteComida = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedComida = await Comida.findByIdAndDelete(id)
    if (!deletedComida) {
        return res.status(404).json({message:"este id no existe"})
    }
    return res.status(200).json(deletedComida);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getComidas, postComidas, putComida, deleteComida };

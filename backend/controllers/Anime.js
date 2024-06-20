const Anime = require("../models/Anime");

const createAnime = async (req, res) => {
  const { name, episodes, season, description, image, aired } = req.body;
  try {
    const newAnime = new Anime({
      name,
      episodes,
      season,
      description,
      image,
      aired,
    });
    await newAnime.save();
    res.status(200).json(newAnime);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const displayAnime = async (req, res) => {
  try {
    const animeList = await Anime.find();

    res.status(200).json(animeList);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;

    const anime = await Anime.findById(id);

    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    await Anime.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

const updateAnime = async (req, res) => {
  const { id } = req.params;
  const { name, episodes, season, description, image, aired } = req.body;

  try {
    const updatedAnime = await Anime.findByIdAndUpdate(
      id,
      { name, episodes, season, description, image, aired },
      { new: true, runValidators: true }
    );

    if (!updatedAnime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    res.status(200).json(updatedAnime);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

module.exports = { createAnime, displayAnime, deleteAnime, updateAnime };

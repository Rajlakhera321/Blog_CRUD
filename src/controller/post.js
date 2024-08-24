const { postModel } = require("../model");

const addpost = async (req, res) => {
  try {
    console.log(req.userData)
    const { title, content, author } = req.body;
    const data = await postModel.create({
      title,
      content,
      author
    });
    console.log(data)
    return res.status(201).json({ message: "post created successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const editpost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const { id } = req.params;
    const data = await postModel.findByIdAndUpdate(
      { _id: id },
      { $set: { title, content, author } }
    );
    return res.status(200).json({ message: "post updated successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getpost = async (req, res) => {
  try {
    const data = await postModel.find();
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getpostById = async (req, res) => {
  try {
    const data = await postModel.findOne({ _id: req.params.id });
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletepost = async (req, res) => {
  try {
    const { id } = req.params;
    await postModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({ data: "post deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addpost,
  deletepost,
  getpost,
  getpostById,
  editpost,
};

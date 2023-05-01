const { blog } = require("../model");

const addBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const data = await blog.create({
      userId: req.userData._id,
      title,
      content,
    });
    return res.status(201).json({ message: "blog created successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const editBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    console.log(id, title, content);
    const data = await blog.findByIdAndUpdate(
      { _id: id },
      { $set: { title, content } }
    );
    return res.status(500).json({ message: "Blog updated successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBlog = async (req, res) => {
  try {
    const data = await blog.find();
    console.log("asjdfoasdjfowrj");
    return res.status(500).json({ data: data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBlogById = async (req, res) => {
  try {
    console.log(req.params);
    const data = await blog.findById({ _id: req.params.id });
    return res.status(500).json({ data: data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await blog.findByIdAndDelete({ _id: id });
    return res.status(500).json({ data: "Blog deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogById,
  editBlog,
};

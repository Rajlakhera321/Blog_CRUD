const mongoose = require("mongoose");
const { commentModel } = require("../model");

const addcomment = async (req, res) => {
    try {
        const { content } = req.body;
        const { id } = req.params;
        const data = await commentModel.create({
            post_id: id,
            author_id: req.userData._id,
            content,
        });
        return res.status(201).json({ message: "comment added successfully", data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const editcomment = async (req, res) => {
    try {
        const { content } = req.body;
        const { id } = req.params;
        const data = await commentModel.findByIdAndUpdate(
            { _id: id },
            { $set: { content } },
            { new: true }
        );
        return res.status(200).json({ message: "comment updated successfully", data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getcommentByPost = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await commentModel.find({ post_id: id });
        return res.status(200).json({ data: data });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getcommentById = async (req, res) => {
    try {
        const data = await commentModel.findOne({ _id: req.params.id });
        return res.status(200).json({ data: data });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deletecomment = async (req, res) => {
    try {
        const { id } = req.params;
        const {author_id} = await commentModel.findOne({_id: id});
        if(author_id != req.userData._id){
            return res.status(401).json({message: "You can't delete others comment"});
        }
        await commentModel.findByIdAndDelete({ _id: id });
        return res.status(200).json({ data: "comment deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    addcomment,
    deletecomment,
    getcommentByPost,
    getcommentById,
    editcomment,
};

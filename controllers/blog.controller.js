const blog = require('../models/blog.model');


//Create
exports.handleCreateBlog = async (req, res) => {
    const {userId, title, content} = req.body;

    try{
        const newBlog = new blog({
            userId: userId,
            title: title,
            content: content,
            coverImgURL: `/uploads/${req.file.filename}`
        });

        await newBlog.save();

        return res.status(201).json({msg: "success", newBlog: newBlog});
    }
    catch(err){
        throw err;
    }
};

//Read
exports.handleGetAllBlogs = async (req, res) => {
    const allBlogs = await blog.find({userId: { $ne: req.body.userId } }).populate('userId').populate('title');
    return res.json(allBlogs);
};
exports.handleGetAllBlogsByUserId = async (req, res) => {
    const allBlogs = await blog.find({userId: req.body.userId});
    if(!allBlogs) return res.status(404).json({error: "Blogs not found!"});
    return res.json(allBlogs);
};

//Update
exports.handleUpdateBlogById = async (req, res) => {
    const { blogId } = req.params;
    const updateData = req.body;

    await blog.findByIdAndUpdate(blogId, updateData);
    return res.json({msg: "Title and content of Blog changed successfully."});
};

//Delete
exports.handleDeleteBlogById = async (req, res) => {
    const { blogId } = req.params;
    await blog.findByIdAndDelete(blogId);
    return res.json({status: "Blog is deleted successfully."});
};
const model =  require('../model/product')
const Post = model.Post

exports.getAll = async (req, res) => {
    const products = await Post.find()
    res.json(products)
}
    
exports.getOne = async (req, res) => {
    const id = req.params.id
    const products = await Post.findById(id)
    res.json(products)
}

exports.append = async (req, res) => {
    const product = new Post(req.body)
    product.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.json(err)
        })    
}

exports.change = async (req, res) => {
    const id = req.params.id
    try{
        const products = await Post.findOneAndReplace({_id:id}, req.body, {new: true})
        res.status(201).json(products)
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    try{
        const products = await Post.findOneAndUpdate({_id:id}, req.body, {new: true})
        res.status(201).json(products)
    } catch (err) {
        res.status(400).json(err)
    }
}

exports.remove = async (req, res) => {
    const id = req.params.id
    try{
        const products = await Post.findOneAndDelete({_id:id})
        res.status(201).json(products)
    } catch (err) {
        res.status(400).json(err)
    }
}
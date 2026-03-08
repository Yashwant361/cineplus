const Opinion = require('../models/Opinion')

exports.createOpinion = async (req, res) => {
    try {
        const opinion = new Opinion(req.body);

        await opinion.save();

        res.status(201).json(opinion)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.getOpinions = async (req, res) => {
    try {
        const opinions = await Opinion.find({
            movieId: Number(req.params.movieId)
        })

        res.json(opinions)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.likeOpinion = async (req, res) => {
    try {
        const opinion = await Opinion.findById(req.params.id);
        opinion.likes += 1;
        await opinion.save()
        res.json(opinion)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
exports.dislikeOpinion = async (req, res) => {
    try {
        const opinion = await Opinion.findById(req.params.id);
        opinion.dislikes += 1;
        await opinion.save()
        res.json(opinion)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
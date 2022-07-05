const {
    User,
    Thought
} = require('../models');


module.exports = {
    async getAllThoughts(req, res) {
        try {
            await Thought.find({})
                .then((thought) => res.json(thought))
        } catch (err) {
            res.status(500).json(err)
        }
    },


    async getOneThought(req, res) {
        try {
            const Thought = await Thought.findOne({
                id: req.params.id
            })
            if (!Thought) res.status(404).json("No thought with that id")
            res.status(200).json(Thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
            res.status(200).json(thought)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({
                id: req.params.id,
            }, {
                ...req.body,
            }, {
                new: true
            })
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({
                id: req.params.id,
            }, )
            res.status(200).json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
}
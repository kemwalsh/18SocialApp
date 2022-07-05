const {
    User,
    Thought
} = require('../models');


module.exports = {
    async findAllUsers(req, res) {
        try {
            await User.find({})
                .then((users) => res.json(users))
        } catch (err) {
            res.status(500).json(err)
        }
    },


    async findUserById(req, res) {
        try {
            const user = await User.findOne({
                id: req.params.id
            })
            if (!user) res.status(404).json("No user with that id")
            res.status(200).json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },


    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.status(200).json(user)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({
                id: req.params.id,
            }, {
                ...req.body
            }, {
                new: true
            })
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOne({
                id: req.params.id,
            }, )
            if (user.thoughts && user.thoughts.length > 0) {
                for (let thought of user.thoughts) {
                    await Thought.findOneAndRemove({
                        id: thought.thoughtId,
                    })
                }
            }
            const deletedUser = await User.findOneAndRemove({
                id: req.params.id,
            }, )
            if (!deletedUser) {
                res.status(404).json('User not found!')
            } else {
                res.status(200).json(deletedUser)
            }
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
}
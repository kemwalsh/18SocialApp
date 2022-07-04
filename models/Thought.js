const {
    Schema,
    model
} = require('mongoose');
const reactionSchema = require('./Reaction')

// Schema to create thought model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // Use getter method to format the timestamp on query?
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamp: true,
    id: false,
});
// Reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
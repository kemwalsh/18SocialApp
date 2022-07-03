const {
    Schema,
    Types
} = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        type: Date,
        default: Date.now(),
        // Use getter method to format the timestamp on query?  
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        getters: true,
    },
    timestamp: true,
    id: false,
});

module.exports = Reaction;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    poolRewards: {
        type: String,
    },
    referralCode: {
        type: String,
        required: false
    },
    refId: {
        type: Schema.Types.ObjectId,
        ref: "referral",
    },
    parentUsers: {
        type: String,
        required: false
    },
    childrenUsers: {
        type: String,
        required: false,
    },
    balance: {
        type: String,
        required: false
    },
    projectTransaction: [{
            project: {
                type: String,
                date: new Date()
            },
            transactionAmount: {
                type: String
            }

        }

    ]
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);
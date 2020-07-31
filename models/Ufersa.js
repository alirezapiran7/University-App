const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UfersaSchema = new Schema({
    ufersaId: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('ufersa', UfersaSchema);
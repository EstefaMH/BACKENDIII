import mongoose from 'mongoose';

const collectionName = 'pets';

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' 
    }
});

const PetsModel = mongoose.model(collectionName, petSchema);

export default PetsModel;

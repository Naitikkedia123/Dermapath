const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const illnessSchema = new Schema({
  illness:{
    type: String,
    required: true,
    trim: true
  },
  patient: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Patient'
  },
  doctor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Doctor'
  },
  medication: [{
    name: {
    type: String,
    required: true,
    trim: true
  },
    dosage: {
        type: String,
        required: true,
        trim: true
    },
    frequency: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
      uuid: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  }],
},
  { timestamps: true });
module.exports = mongoose.model('Illness', illnessSchema);
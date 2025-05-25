const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  title: String,
  fileUrl: String,
  uploadedAt: Date
});

module.exports = mongoose.model('Report', reportSchema);

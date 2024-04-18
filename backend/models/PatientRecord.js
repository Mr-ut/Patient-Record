const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientRecord = new Schema({

    doctorName: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    recordingDate: {
        type: Date,
        required: true
    },
    soundFilePath: {
        type: String,
        required: true
    }

  });

  module.exports = mongoose.model('Recording', PatientRecord);
const mongoose = require('mongoose');

const anggotaSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nama: { type: String, required: true },
    id_anggota: { type: String, required: true, unique: true },
    no_telpon: { type: String, required: true },
    email: { type: String, required: true },
    alamat: { type: String, required: true },
    tanggal_registrasi: { type: Date, default: Date.now },
    status_keanggotaan: { type: String, required: true }
});

module.exports = mongoose.model('Anggota', anggotaSchema);

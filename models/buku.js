const mongoose = require('mongoose');

const bukuSchema = new mongoose.Schema({
    ISBN: { type: String, required: true, unique: true },
    judul: { type: String, required: true },
    pengarang: { type: String, required: true },
    tahun_terbit: { type: Number, required: true },
    jumlah_halaman: { type: Number, required: true }
});

module.exports = mongoose.model('Buku', bukuSchema);

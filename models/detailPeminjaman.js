const mongoose = require('mongoose');

const detailPeminjamanSchema = new mongoose.Schema({
    id_detail_pmjm: { type: Number, required: true, unique: true },
    jumlah_buku: { type: Number, required: true },
    status_peminjaman: { type: String, required: true }
});

module.exports = mongoose.model('DetailPeminjaman', detailPeminjamanSchema);

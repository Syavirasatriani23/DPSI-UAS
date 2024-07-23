const mongoose = require('mongoose');

const detailPengembalianSchema = new mongoose.Schema({
    id_detail_kmbl: { type: Number, required: true, unique: true },
    jumlah_buku: { type: Number, required: true },
    denda: { type: Number, required: true },
    status_pengembalian: { type: String, required: true }
});

module.exports = mongoose.model('DetailPengembalian', detailPengembalianSchema);

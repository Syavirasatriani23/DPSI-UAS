const mongoose = require('mongoose');

const transaksiPeminjamanSchema = new mongoose.Schema({
    id_transaksi_pmjm: { type: Number, required: true, unique: true },
    id_anggota: { type: mongoose.Schema.Types.ObjectId, ref: 'Anggota', required: true },
    ISBN: { type: mongoose.Schema.Types.String, ref: 'Buku', required: true },
    tanggal_pinjam: { type: Date, required: true },
    tanggal_hrs_kmbl: { type: Date, required: true }
});

module.exports = mongoose.model('TransaksiPeminjaman', transaksiPeminjamanSchema);
const express = require('express');
const router = express.Router();
const TransaksiPeminjaman = require('../models/transaksiPeminjaman');

// Mendapatkan semua transaksi peminjaman
router.get('/', async (req, res) => {
    try {
        const transaksi = await TransaksiPeminjaman.find().populate('id_anggota').populate('ISBN');
        res.json(transaksi);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Menambahkan transaksi peminjaman baru
router.post('/', async (req, res) => {
    const transaksi = new TransaksiPeminjaman({
        id_transaksi_pmjm: req.body.id_transaksi_pmjm,
        id_anggota: req.body.id_anggota,
        ISBN: req.body.ISBN,
        tanggal_pinjam: req.body.tanggal_pinjam,
        tanggal_hrs_kmbl: req.body.tanggal_hrs_kmbl
    });

    try {
        const newTransaksi = await transaksi.save();
        res.status(201).json(newTransaksi);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
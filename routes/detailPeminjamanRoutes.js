const express = require('express');
const router = express.Router();
const DetailPeminjaman = require('../models/detailPeminjaman');

// Mendapatkan semua detail peminjaman
router.get('/', async (req, res) => {
    try {
        const detailPeminjaman = await DetailPeminjaman.find();
        res.json(detailPeminjaman);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Menambahkan detail peminjaman baru
router.post('/', async (req, res) => {
    const detailPeminjaman = new DetailPeminjaman({
        id_detail_pmjm: req.body.id_detail_pmjm,
        jumlah_buku: req.body.jumlah_buku,
        status_peminjaman: req.body.status_peminjaman
    });

    try {
        const newDetailPeminjaman = await detailPeminjaman.save();
        res.status(201).json(newDetailPeminjaman);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

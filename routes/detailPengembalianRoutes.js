const express = require('express');
const router = express.Router();
const DetailPengembalian = require('../models/detailPengembalian');

// Mendapatkan semua detail pengembalian
router.get('/', async (req, res) => {
    try {
        const detailPengembalian = await DetailPengembalian.find();
        res.json(detailPengembalian);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Menambahkan detail pengembalian baru
router.post('/', async (req, res) => {
    const detailPengembalian = new DetailPengembalian({
        id_detail_kmbl: req.body.id_detail_kmbl,
        jumlah_buku: req.body.jumlah_buku,
        denda: req.body.denda,
        status_pengembalian: req.body.status_pengembalian
    });

    try {
        const newDetailPengembalian = await detailPengembalian.save();
        res.status(201).json(newDetailPengembalian);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
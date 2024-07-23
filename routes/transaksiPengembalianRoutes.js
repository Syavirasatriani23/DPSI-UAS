const express = require('express');
const router = express.Router();
const TransaksiPengembalian = require('../models/transaksiPengembalian');

router.get('/', async (req, res) => {
    try {
        const transaksi = await TransaksiPengembalian.find().populate('id_anggota').populate('ISBN');
        res.json(transaksi);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const transaksi = new TransaksiPengembalian({
        id_transaksi_kmbl: req.body.id_transaksi_kmbl,
        id_anggota: req.body.id_anggota,
        ISBN: req.body.ISBN,
        tanggal_hrs_kmbl: req.body.tanggal_hrs_kmbl,
        tanggal_kembali: req.body.tanggal_kembali
    });

    try {
        const newTransaksi = await transaksi.save();
        res.status(201).json(newTransaksi);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

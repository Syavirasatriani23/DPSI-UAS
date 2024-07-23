const express = require('express');
const router = express.Router();
const Buku = require('../models/buku');

router.get('/', async (req, res) => {
    try {
        const buku = await Buku.find();
        res.json(buku);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const buku = new Buku({
        ISBN: req.body.ISBN,
        judul: req.body.judul,
        pengarang: req.body.pengarang,
        tahun_terbit: req.body.tahun_terbit,
        jumlah_halaman: req.body.jumlah_halaman
    });

    try {
        const newBuku = await buku.save();
        res.status(201).json(newBuku);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

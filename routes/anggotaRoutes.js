const express = require('express');
const router = express.Router();
const Anggota = require('../models/anggota');
const authenticateToken = require('../middleware/auth');

router.get('/', authenticateToken, async (req, res) => {
    try {
        const anggota = await Anggota.find();
        res.json(anggota);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', authenticateToken, async (req, res) => {
    const anggota = new Anggota({
        username: req.body.username,
        password: req.body.password,
        nama: req.body.nama,
        id_anggota: req.body.id_anggota,
        no_telpon: req.body.no_telpon,
        email: req.body.email,
        alamat: req.body.alamat,
        status_keanggotaan: req.body.status_keanggotaan
    });

    try {
        const newAnggota = await anggota.save();
        res.status(201).json(newAnggota);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
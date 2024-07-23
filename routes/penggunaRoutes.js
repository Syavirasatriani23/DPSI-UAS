const express = require('express');
const router = express.Router();
const Pengguna = require('../models/pengguna');
const jwt = require('jsonwebtoken');

// Registrasi pengguna
router.post('/register', async (req, res) => {
    const pengguna = new Pengguna({
        username: req.body.username,
        password: req.body.password,
    });

    try {
        const newPengguna = await pengguna.save();
        res.status(201).json(newPengguna);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login pengguna
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const pengguna = await Pengguna.findOne({ username: username });
    if (!pengguna) return res.status(400).json({ message: 'Pengguna tidak ditemukan' });

    const validPassword = await pengguna.comparePassword(password);
    if (!validPassword) return res.status(400).json({ message: 'Password salah' });

    const accessToken = jwt.sign(
      { username: pengguna.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ accessToken });
});

module.exports = router;

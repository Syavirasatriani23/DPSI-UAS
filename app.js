const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authenticateToken = require('./middleware/auth');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Log the MongoDB URI for debugging
console.log('MongoDB URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const penggunaRoutes = require('./routes/penggunaRoutes');
const anggotaRoutes = require('./routes/anggotaRoutes');
const bukuRoutes = require('./routes/bukuRoutes');
const transaksiPeminjamanRoutes = require('./routes/transaksiPeminjamanRoutes');
const transaksiPengembalianRoutes = require('./routes/transaksiPengembalianRoutes');
const detailPeminjamanRoutes = require('./routes/detailPeminjamanRoutes');
const detailPengembalianRoutes = require('./routes/detailPengembalianRoutes');

app.use('/pengguna', penggunaRoutes);
app.use(authenticateToken);
app.use('/anggota', anggotaRoutes);
app.use('/buku', bukuRoutes);
app.use('/transaksiPeminjaman', transaksiPeminjamanRoutes);
app.use('/transaksiPengembalian', transaksiPengembalianRoutes);
app.use('/detailPeminjaman', detailPeminjamanRoutes);
app.use('/detailPengembalian', detailPengembalianRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

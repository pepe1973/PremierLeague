// Szüksége npm csomagok beimportálása
require('dotenv').config();
const express = require('express');

// Szerver beállítása
const app = express();
const PORT = process.env.PORT || 5000;

// Route-ok
app.get('/', (req, res) => {
    try {
        res.status = 200;
        res.send('Kezdeti beállítások!');
    } catch (error) {
        res.status = 500;
        res.send('Valami hiba történt!');
    }
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

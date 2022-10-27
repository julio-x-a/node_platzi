const sharp = require('sharp');

sharp('js.png')
    .resize(320, 240)
    .toFile('js.webp', (err, info) => console.log(err, info));

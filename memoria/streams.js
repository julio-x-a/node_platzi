const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/file.txt');
readableStream.setEncoding('utf8')
readableStream.on('data', (chunk) => {
    data += chunk
    console.log(chunk);
});
readableStream.on('end', () => {
    console.log(data);
});

process.stdout.write('Hola!')

// 
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);
Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
}

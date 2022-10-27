//Con console.time podemos verificar cuanto tarda en ejecutarse
//nuestro codigo
let count = 0;
console.time('bucle')
for (let i = 0; i < 1000000000; i++) {
    count++;
}
console.timeEnd('bucle');

function asyncr() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async function');
        }, 2000);
    });
}

console.time('async');
asyncr().then(() => console.timeEnd('async'));

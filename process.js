// const process = require('process');

//Cuando termina el programa
process.on('exit', () => {
  console.log('Bye!');
});
//Antes de terminar el programa
process.on('beforeExit', () => {
  console.log('El proceso va a terminar!');
});
//Excepcion no controlada
process.on('uncaughtException', (err, origin) => {
  console.log('Error no controlado!');
  console.log(err);
});

foo(); //Funcion no existente para provocar un error

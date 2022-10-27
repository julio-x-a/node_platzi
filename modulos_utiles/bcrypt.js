//Modulo para cifrar
const bcrypt = require('bcrypt');
const pwd = 'juju123';
bcrypt.hash(pwd, 5, (err, hash) => {
  console.log(hash);
  bcrypt.compare(pwd, hash, (err, res) => {
    console.log(res);
  });
});

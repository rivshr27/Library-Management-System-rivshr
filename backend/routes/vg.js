const bcrypt = require('bcrypt');
const password = 'mypie12';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) console.error(err);
    else console.log(hash);
});

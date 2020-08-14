const user = {
    name: 'nilton',
    lastname: 'souza'
};
console.log(user);

//user.name = 'outro nome';
//console.log(user);

console.log('\nPropriedades do objeto user:', Object.values(user));

console.log('\nChaves do objeto user:', Object.keys(user));

console.log('\nLista propriedades e valores do objeto user:', Object.entries(user));
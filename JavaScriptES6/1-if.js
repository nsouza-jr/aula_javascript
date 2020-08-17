const array = [0,1,2,3,4,5,6]

array.forEach(item =>{
    if (item % 2 == 0) { // o numero é divisivel por 2 e tem resto 0
        console.log(`o numero ${item} é par.`);       
    } else {
        console.log(`o numero ${item} é impar.`);
    }
});

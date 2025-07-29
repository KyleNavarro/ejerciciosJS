function fizzBuzz(numeros){
    for (let i = 1; i <= numeros; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzBuuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(100)

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

if(number<=0 || number >=21){
    console.log('Pilih bilangan antara 1 sampai 20')
}
else{
    if (number%2===1){
        for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        }
    }
    else{
        let fact = 1;
        for (i = 1; i <= number/2; i++) {
            fact *= i;
            console.log(fact);
        }
    }
}
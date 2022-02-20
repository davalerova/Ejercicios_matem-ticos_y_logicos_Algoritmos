function primeNaive(n){
    let is_prime = true;
    for (let i = 2; i<n; i++){
        if(n % i === 0){
            is_prime = false;
            break;
        }
    }
    return is_prime;
}

console.log(primeNaive(7));


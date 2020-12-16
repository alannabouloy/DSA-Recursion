function powerCalculator(base, exponent){
    //edge case
    if(exponent < 0){
        return 'exponent should be >= 0'
    }
    //base case
    if(exponent === 1){
        return base
    }
    //recursive case
    return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(5, 2))
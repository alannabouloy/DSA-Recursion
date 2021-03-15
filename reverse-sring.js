function reverseString(string){
    //split into array [s, t, r, i, n, g]
    console.log(string)
    string = string.split('')
    //determine middle of array
    const middle = Math.ceil(string.length / 2)
    //store left of middle and right of middle in variables
    let left = string.slice(0, middle)
    let right = string.slice(middle)
    
    if(left.length > 1){
        left = reverseString(left.join(''))
    }
    if(right.length > 1){
        right = reverseString(right.join(''))
    }
    //continue until cannot be split
    //join in reverse
   if(typeof right === 'string'){
       string = right.concat(left)
       return string
   } else {
       string = right.join('').concat(left)
       return string
   }
}

console.log(reverseString('string'))


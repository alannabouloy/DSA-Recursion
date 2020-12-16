function countingSheep(sheep){
    //base case
    if(sheep === 0){
        return 'All sheep jumped over the fence'
    }
    //recursive case
    return `${sheep}: Another sheep jumps over the fence \n` + countingSheep(sheep - 1)
}

console.log(countingSheep(3))
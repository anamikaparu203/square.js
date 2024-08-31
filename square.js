function sumOfSquares(arr) {
    // Use the reduce method to iterate through the array and sum up the squares
    return arr.reduce((sum, num) => sum + num * num, 0);
}

// Example usage:
const arr = [5,6,7,8];
console.log(sumOfSquares(arr)); 
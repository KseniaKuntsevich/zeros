module.exports = function zeros(expression) {
  // your solution

    let sum = expression.split('*').map(numberCoded => {
        numberCoded = numberCoded.split(/(!+)/);
        return interpreter(numberCoded[1])(+numberCoded[0]);
    }).reduce((sum, num) => sum * num)
     
    let splitedByZeros = sum.toString().split(/(.*)[1-9]/)   

    return splitedByZeros[splitedByZeros.length - 1].length;

}


function fact(num) {
    num = BigInt(num)
    return num <= 1n ? num : num * fact(num - 1n)
}

function multiplying(num) {
    num = BigInt(num)
    return num < 2n ? 1n : num * multiplying(num - 2n)
}

let interpreter = (code) => (code === "!" ?  fact :  multiplying);
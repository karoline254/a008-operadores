const num1 = prompt("Digite um número")
const num2 = prompt("Digite outro número")

console.log(`O primeiro número é maior que o segundo?  ${num1 > num2}`)
console.log(`O primeiro número é igual ao segundo? ${num1 === num2}`)
console.log(`O primeiro número é divisivél pelo segundo? ${(num1 % num2) === 0}`)
console.log(`O segundo número é divisivél pelo primeiro? ${(num2 % num1) === 0}`)
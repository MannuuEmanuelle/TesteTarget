let numero = 5
let a = 0, b = 1

console.log(a)
console.log(b)

for (let i = 2; i <= numero; i++) {
    let proximoNumero = a + b

    a = b
    b = proximoNumero
    console.log(b)
}

if (b === numero) {
    console.log('O número pertence a sequência!')
} else {
    console.log('O número não pertence a sequência!')
}

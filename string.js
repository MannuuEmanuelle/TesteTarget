let palavra = 'casa'.toLowerCase()

let condicao = palavra.includes('a')
let contador = 0

if (condicao) {
    for (let i = 0; i <= palavra.length; i++) {
        if (palavra[i] === 'a') {
            contador += 1
            
        }
    }


} else {
    console.log(`A letra 'a' não existe na palavra ${palavra}!`)
}

console.log(`Existe(m) ${contador} 'a' na palavra ${palavra}!`)

const camposTxt = document.querySelectorAll('[convert]') 
const genero = document.getElementsByName('sexo')
const resultado = document.querySelector('#resultado')
const h1 = document.querySelector('h1')

const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const p4 = document.createElement('p')

botaoCalc = document.querySelector('#calc')

botaoCalc.onclick = e => {
    e.preventDefault()
        const campos = converterCampos(camposTxt)
        
        if(camposTxt[0].value == 0 || camposTxt[1].value == 0 || camposTxt[2].value == 0){
            alert('Verifique se todos os campos estão preenchidos.')
        } else {
            const multiplicadores = verificarMultiplicadores(genero)
            const taxaBase = multiplicadores.xTmb + (multiplicadores.xPeso * campos.peso) + (multiplicadores.xAltura * campos.altura) - (multiplicadores.xIdade * campos.idade)
            const taxaDiaria = taxaBase * campos.nivelFisico
            const superavit = taxaDiaria + 200
            const deficit = taxaDiaria - 200
            
            h1.style.display = 'none'
            
            p1.textContent =  `Taxa Metabólica Basal: ${taxaBase.toFixed(2).replace('.', ',')}kcal`  
            p2.textContent = `Gasto diário: ${taxaDiaria.toFixed(2).replace('.', ',')}kcal`  
            p3.textContent = `Calorias para subir de peso: ${superavit.toFixed(2).replace('.', ',')}kcal`  
            p4.textContent = `Calorias para perda de peso: ${deficit.toFixed(2).replace('.', ',')}kcal`  
            
            resultado.appendChild(p1) 
            resultado.appendChild(p2) 
            resultado.appendChild(p3) 
            resultado.appendChild(p4) 
        }
    }


function verificarMultiplicadores (genero) {
    const xTmb = genero[0].checked ? 655 : 66
    const xIdade = genero[0].checked ? 4.7 : 6.8
    const xAltura = genero[0].checked ? 1.8 : 5
    const xPeso = genero[0].checked ? 9.6 : 13.7
    
    return {xTmb, xIdade, xAltura, xPeso}
}


function converterCampos(campos){
    const peso = Number(campos[0].value)
    const altura = Number(campos[1].value)
    const idade = Number(campos[2].value)
    const nivelFisico = Number(campos[3].value)

    return {peso, altura, idade, nivelFisico}
}


botaoTema = document.querySelector('#tema')
botaoTema.onclick = e => {
    const body = document.querySelector('body').classList
    const flexcontain = document.querySelector('section').classList
    const footer = document.querySelector('footer').classList
    const inputs = document.querySelectorAll('input')
    const select = document.querySelector('#nivelFisico').classList

    body.toggle('lightBody')
    flexcontain.toggle('lightSection')
    footer.toggle('lightFooter')
    select.toggle('lightSelect')

    inputs.forEach(inputAtual => {
        inputAtual.classList.toggle('lightInput')
    })
}

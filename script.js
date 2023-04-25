let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
let weightLabel = document.querySelector('label[for="weight"]')
let heightLabel = document.querySelector('label[for="height"]')
let result = document.querySelector('.result')
let inputs = document.querySelectorAll('input')

result.innerText = '20'
inputs.forEach((input) => {
    input.addEventListener('input',()=>{
        weightValue = weight.value
        weightLabel.innerHTML = `${weightValue} KG`
        heightValue = height.value
        heightLabel.innerHTML = `${heightValue} CM`
        toMeter = heightValue/100
        toSquar = toMeter*toMeter
        bmi = Math.floor(weightValue/toSquar)
        result.innerHTML = `${bmi}`
        
    })
})

// weight.addEventListener('input',()=>{
//     weightValue = weight.value
//     weightLabel.innerHTML = `${weightValue}KG`
// })
// height.addEventListener('input',()=>{
//     heightValue = height.value
//     heightLabel.innerHTML = `${heightValue}CM`
// })
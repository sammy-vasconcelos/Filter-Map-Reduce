const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'glub',
        type: 'fish',
        age: 1
    }
]

// O Filter *não* modifica o array anterior
// a arrow function vai passar por cada um dos elementos do array, e para cada vez que ela for chamada ela vai passar todo o elemento pra 
// dentro da função.
const newPets = pets.filter((pet) => {
    return pet.age < 5
})

console.log(newPets)

// ****************************************************************************************************************************************
// Outra maneira de fazer o mesmo filter acima:

const menorQueCinco = (numero) => {
    return numero < 5
}

const idadePets = pets.filter(({ age }) => menorQueCinco(age))

console.log(idadePets)
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 5
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 2
    },
    {
        name: 'glub',
        type: 'fish',
        age: 1,
        weight: 4
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 4
    },
    {
        name: 'mingau',
        type: 'cat',
        age: 1,
        weight: 2
    },
    {
        name: 'bolinha',
        type: 'dog',
        age: 1,
        weight: 30
    },
    {
        name: 'gatonho',
        type: 'cat',
        age: 1,
        weight: 1
    }
]

// O reduce retorna um resultado só para o array inteiro

const totalWeight = pets.reduce((total, pet) => {
   return total + pet.weight
}, 0 /*valor inicial da var total*/)

console.log(`Total:  ${totalWeight}`)
   
//***************************************************************************************************************************************** 
// Retornando um obj 
const totalAgeWeight = pets.reduce((total, pet) => {
   
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
 }, { totalAge: 0, totalWeight: 0} /*valor inicial da var total*/)
 
  console.log(totalAgeWeight)

//******************************************************************************************************************************************

// If

const totalWeightDog = pets.reduce((total, pet) => {
   if (pet.type !== 'dog') return total

   return total + pet.weight
 }, 0 /*valor inicial da var total*/)
 
  console.log(totalWeightDog)


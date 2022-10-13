// o map faz uma tranformação dos dados

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
        weight: 0.01
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 0.01
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

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)
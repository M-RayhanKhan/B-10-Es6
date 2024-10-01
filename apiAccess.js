const people =[
    {
        id: 1,
        name: "Mark",
        age: 40,
        occupation: 'Marketing Manager',
        contact:{
            email: 'mark@gmail.com',
            phone: '13-456-789'
        },
        address:{
            street:"789 oak St",
            city:"Chicago",
            state: "IL"
        },
        bobbies: ["Running", "Golf" ]
    },
    {
        id: 2,
        name: "chink",
        age: 30,
        occupation: 'Web Developer',
        contact:{
            email: 'chiko@gmail.com',
            phone: '123-456-78'
        },
        bobbies: ["Running", "Golf" ]
    },
    {
        id: 3,
        name: "Jane",
        age: 25,
        occupation: 'JA owner',
        contact:{
            email: 'jane@gmail.com',
            phone: '123-46-789'
        },
        address:{
            street:"789 oak St",
            city:"Dhaka",
            state: "IL"
        },
        bobbies: ["Drawing", "Golf" ]
    }
]

// people.map((person) => {
//     const sentence = `Person's name: ${person.name}. City: ${person?.address?.city || "N/A"}`
//     console.log(sentence);
// })

const x = people.find(person => person.age === 25);
console.log(x);
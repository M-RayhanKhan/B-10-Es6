const people = [
    {
        id: 1,
        name: "John Doe",
        age: 40,
        occupation: 'Software Engineer',
        contact: {
            email: 'mark@gmail.com',
        },
        address: {
            street: "123 Main St",
            city: "San Francisco",
            state: "CA",
            zip: "97585"
        },
        social: {
            twitter: "@johndoe"
        },
        bobbies: ["Coding", "Hiking", "Photography"]
    },
    {
        id: 2,
        name: "chink",
        age: 30,
        occupation: 'Web Developer',
        contact: {
            email: 'chiko@gmail.com',
            phone: '123-456-78'
        },
        bobbies: ["Running", "Golf"]
    },
    {
        id: 3,
        name: "Jane",
        age: 25,
        occupation: 'JA owner',
        contact: {
            email: 'jane@gmail.com',
            phone: '123-46-789'
        },
        address: {
            street: "789 oak St",
            city: "Dhaka",
            state: "IL"
        },
        bobbies: ["Drawing", "Golf"]
    }
]

const peopleList = document.getElementById('people-list');
const personInfo = document.getElementById('person-info');
const renderPeopleList = (people) => {
    people.map((person) => {
        const li = document.createElement('li');
        li.classList = 'font-semibold text-blue-500'
        li.textContent = person.name;
        li.addEventListener('click', () => {
            handlerPersonClick(person.id)
        })
        peopleList.appendChild(li)
    })
}

const displayItemsShow = (person) => {
    personInfo.classList.remove('hidden')
    document.getElementById('no-selection').classList.add('hidden')
    personInfo.innerHTML = `
    <h2 class = "text-xl font-bold">Name: ${person?.name}</h2>
    <p class = 'text-gray-800 font-bold'>occupation: ${person?.occupation}</p>
    <p class = 'text-gray-800 font-bold'>address: ${person?.address?.city || "N/A"}</p>
    `
    console.log(person);
}

const handlerPersonClick = (id) => {

    const person = people.find((p) => p.id == id)
    displayItemsShow(person)
}

renderPeopleList(people)

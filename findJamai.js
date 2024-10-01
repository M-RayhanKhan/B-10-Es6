const jamaiCategory = [
    {Name: "Monirul", job: "probasi", salary: 40000},
    {Name: "Babul", job: "sorkari", salary: 37000},
    {Name: "Hasibul", job: "probasi", salary: 21000},
    {Name: "Sihab", job: "sorkari", salary: 27000},
    {Name: "Forhad", job: "sorkari", salary: 100000},
    {Name: "Tapzzul", job: "protasis", salary: 57000},
];

const findJamai = jamaiCategory.filter((pola) => 
    (pola.job === 'probasi' && pola.salary >= 30000) ||
    (pola.job === 'sorkari' && pola.salary >= 20000)
)
const lottery = Math.floor(Math.random()*findJamai.length)
console.log(findJamai[lottery].Name, "Tumi Jitso");
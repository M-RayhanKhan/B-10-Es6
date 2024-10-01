const arr = [20, 30, 40, 50, 60];

// function show(a) {
//     console.log(a);
// }
// arr.forEach(show)

// let sum = 0;
// arr.forEach((item) => {
//     sum += item;
// })
// console.log(sum);

// callback parameter (item array whole array)
arr.forEach((item, index) =>{
    console.log('item', item, 'index', index);
})
let arr = [
    { gender: 'male', name: 'john'},
    { gender: 'female', name: 'john2'},
    { gender: 'male', name: 'john3'},
]


let result = arr.filter( item => {
    if(item.gender === 'female'){
        return item;
    }
});

console.log(result);    
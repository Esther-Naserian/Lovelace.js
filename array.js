let fruits = ["Mango","Apple","Banana","Orange"];

let array = new Array(20,30,6,7);
console.log({fruits});
console.log({array});

fruits[1]=3;
console.log({fruits});
console.log('length',fruits.length);
console.log(fruits[20]);

//Array methods
let addLast = fruits.push('Kiwi')
console.log({fruits});
let addFirst = fruits.unshift('Pawpaw')
console.log({fruits});
let removeLast= fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let items = [20,30,40,50,60];

let add = items.reduce((acc, curr) => acc + curr);
console.log({add});

let multiply = items.map(item => item* 2);
console.log({multiply});


let addEach= [];
let total=0;

 items.forEach(items=> {
    const add = items + 2;
console.log({add});
addEach.push(add);
total+= items

});
console.log({addEach});
console.log({total});

let multiplyAll =1;

items.map(items => {
    multiplyAll *=items;
    return items
})
console.log({multiplyAll});


//Destructuring

let [num1, num2, num3,...rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});
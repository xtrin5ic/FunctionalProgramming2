// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// But, rather, implement the functionality from scratch using pure functions and higher level functions.
// Do the implimentation in order as given. 
// We have linked to info at MDN, this is just to give a sence of how the reduce,forEach,map and filter functions should work.
//
// 🛠️ Prerequisite:
// You must create an array persons that will contain the data from https://raw.githubusercontent.com/MM-203/misc/main/data/data.json
// This must be done before the first task
//
// ----------------------------------------------------------------------------------------------------------------------------------
// Bonus challenge 🎉 (a bit hard), the functions forEach, filter and map can all be created using the function reduce. 
// If you feel up for a challenge, try doing so. NB! The bonus challenge is optional. 
// ----------------------------------------------------------------------------------------------------------------------------------


const persons = [
    {"name":"Paula Key", "age":23},
     {"name":"Riya Dickerson" , "age":99},
     {"name":"Layne Colon" , "age":53},
     {"name":"Pranav Giles" , "age":51},
     {"name":"Kamryn Davis" , "age":27},
     {"name":"Taniyah Yu" , "age":17},
     {"name":"Brendon Porter" , "age":23},
     {"name":"Jordin Hancock" , "age":86},
     {"name":"Shawn Vargas" , "age":88},
     {"name":"Sawyer Copeland" , "age":14},
     {"name":"Gustavo Baldwin" , "age":7},
     {"name":"Renee Wilson" , "age":29}
];

//test of array entry
//console.log(persons);


// 1
// Implement your own reduce function and count the number of people above the age of 50
// You can read about a reduce function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 


function reduce(array, reducer, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i], i, array);
  }
  return accumulator;
}

const countOver50 = reduce(persons, (count, person) => {
  if (person.age > 50) {
    return count + 1;
  }
  return count;
}, 0);

console.log('People over 50:', countOver50);


// 2
// Implement your own forEach function and use it to greet all the people in the persons array (say Hi, persons name).
// Read about forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function forEach(array, retrive) {
  for (let i = 0; i < array.length; i++) {
    retrive(array[i], i, array);
  }
}

forEach(persons, (person) => {
  console.log(`Hi, ${person.name}`);
});



// 3
// Implement your own map function and make everyone a year older.
// You can read about what the map function should do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

const addYearPersons = map(persons, (person) => {
  return { ...person, age: person.age + 1 };
});

console.log('Everyone a year older:', addYearPersons);


// 4
// Implement your own filter function, and use it to find evryone under the drinking age.
// Read about filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function filter(array, search) {
  const peopleFinder = [];
  for (let i = 0; i < array.length; i++) {
    if (search(array[i], i, array)) {
      peopleFinder.push(array[i]);
    }
  }
  return peopleFinder;
}

const underAge = filter(persons, (person) => {
  return person.age < 18;
});

console.log('Everyone under drinking age:', underAge);


// 5
// Now create a function sum, that takes a list of numbers and returns the sum
// Try to use your previously created functions to make this function 
// Sum the total age of persons using this new function 
// NB! Do not manualy create the age listing

function sum(numbers) {
  return reduce(numbers, (total, number) => total + number, 0);
}

const totalAge = sum(map(persons, (person) => person.age));
console.log('The total age of everyone is:', totalAge);


// 6
// Now create a function average, that returns the average of a list of numbers
// Try to use your previously created functions to make this function 
// calculate the average age of the persons using this function
// NB! Do not manualy create the age listing

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sumOfAges = sum(numbers);
  return sumOfAges / numbers.length;
}

const averageAge = average(map(persons, (person) => person.age));
console.log('The average age of everyone is:', averageAge);


// 7
// Finaly create a max and a min function that respectivly returns the maximum value and the minimum value
// Only use previously created functions to acchive this.
// Then find the min and max age of ther persons.

//ran out of time
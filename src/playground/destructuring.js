//console.log("desctructuring");

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 99
//     }
// };

// const {name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published


const address = ['1299 s Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

//const [street, city, state, zip] = address;
const [street, city, state = 'New York'] = address;

//console.log(`YOu are in ${address[1]} ${address[2]}.`);
console.log(`YOu are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '2.50', '$2.75'];

const [drink, ,medium ] = item;

console.log(`A medium ${drink} costs ${medium}`);
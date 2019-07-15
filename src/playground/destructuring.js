// const person = {
//     name: 'ANkit',
//     age: '26',
//     location: {
//         city: 'B-lore',
//         temp: 26
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp:temparature} = person.location;



// if(city && temparature) {
//     console.log(`It's ${temparature} in ${city}`);
// } 


// const book = {
//     title: 'Ego is enemy',
//     author: 'Ryan holiday',
//     publisher: {
        
//     }
// };

// const {title: bookName, author: authorName = 'Anonymous'} = book;

// const {name: publisherName = 'Anonymous'} = book.publisher;


// if(publisherName) {
//     console.log(`${publisherName}`);
// }


const address = ['4th B Cros', 'mahadevpura', 'Bengaluru'];

const [street,locality, city, state = 'Bihar'] = address;

console.log(`I live in ${street}, ${locality} ${city}, ${state}`);


const items = ['Coffee (hot)' , 2.0, 2.5, 2.75];

const [coffeeName, small, medium, large] = items;

console.log(`A medium ${coffeeName} cost is $${medium}`);


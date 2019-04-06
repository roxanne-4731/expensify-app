/*const person = {
    name: 'Andrew',
    age: 22,
    location: {
        city: 'tehran',
        temp: 10
    }
};

const {name:firstName = 'Roxanne', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`it's ${temperature} in ${city}`);
}*/

/*
const book = {
    title : 'Ego is the Enemy',
    author : 'Ryan Holiday',
    publisher : {
        name : 'penguin'
    }
};

const {name: publisherName = 'Self-Published' } = book.publisher

console.log(`${publisherName}`);*/

const address = ['1299 S Juniper Street', 'Iran', 'Tehran', '19147'];

const [, city, state = 'New York'] = address;

console.log(`you are in ${city} ${state}`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
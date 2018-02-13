////////////////////////////////////////////////////////////////////////////////
//                             forEach

var colors = ['red','blue','green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color)
});


//Create an array of numbers
var numbers = [1,2,3,4,5,6];
//Create a variable to hold the sum
var sum = 0;
//Loop over the array, increment the sum of the variable
numbers.forEach(function(number){
  sum += number
});
//print the sum variable
sum;

//Example 1
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];


     posts.forEach(function(post){
        savePost(post);
    })
}

//Example 2


var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
    areas.push(image.height * image.width)
})

////////////////////////////////////////////////////////////////////////////////
//                                map method

var numbers = [1,2,3];

var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
  return number * 2;
})

doubled;
doubledNumbers;

var cars = [
  {model: 'Buick', price: 'Cheap'},
  {model: 'Camaro', price: 'expensive'},
];

var prices = cars.map(function(car){
  return car.price;
});

prices;

//Example 1
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];


var heights =[];

heights = images.map(function(image){
    return image.height;
})

heights;


//Example 2
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
});

speeds;


//Example 3
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    var colors = array.map(function(color){
        return color[property]
    })
    return colors
}
////////////////////////////////////////////////////////////////////////////////
//                            Filter Method

var products = [
  {name:'cucumber', type: 'vegtable',quantity: 0, price: 1},
  {name:'banana', type: 'fruit',quantity: 10, price: 15},
  {name:'celery', type: 'vegtable',quantity: 10, price: 9},
  {name:'orange', type: 'fruit',quantity: 3, price: 5},
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if(products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

products.filter(function(product) {
  return product.type === 'vegtable';
});


//Type is 'vegtable', quantity is greater than 0, price is less than 10

products.filter(function(product) {
  return product.type === 'vegtable'
    && product.quantity > 0
    && product.price < 10
});


var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'wow' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post,comments){
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

//Example 1

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

filteredNumbers(numbers);

//Example 2

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});



//Example 3

// Reject should work in the opposite way of 'filter' - if
//a function returns 'true', the item should *not* be included
//in the new array.

function reject(array, iteratorFunction) {
    return array.filter(function(arr){
        return !iteratorFunction(arr);
    });
}

////////////////////////////////////////////////////////////////////////////////
//                              Find Method

var users = [
  {name: 'Jill'},
  {name: 'Aj', id: 4},
  {name: 'Aj'},
  {name: 'Ben'},
];

var user;

for (var i = 0; i < users.length; i++) {
if (users[i].name === 'Aj') {
user = users[i];
break;
}
}

user;

users.find(function(user) {
  return user.name === 'Ben';
});

function Car(model) {
this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
];

cars.find(function(car) {
  return car.model === 'Focus';
});

var posts = [
  {id: 1, title: 'New Post' },
  {id: 2, title: 'Old Post' },
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

//Example 1
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true;
});

//Example 2
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
});

//Example 3

function findWhere(array, criteria) {
  return array.find(function(arr){
      var critKey = Object.keys(criteria);
      return arr[critKey] === criteria[critKey];
  });
}

////////////////////////////////////////////////////////////////////////////////
//                    Every and Some method helpers

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

var allComputersCanRun = true;
var onlySomeCanRun = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if(computer.ram < 16) {
    allComputersCanRun = false;
  }
  else {
    onlySomeCanRun = true;
  }
}
"---"
allComputersCanRun;
onlySomeCanRun;

"+++"

computers.every(function(computer) {
  return computer.ram > 16;
});

computers.some(function(computer) {
  return computer.ram > 16;
});

"---"

var names = [
	"Alexandria",
  "Matthew",
  "Joe"
];

names.every(function(name) {
  return name.length > 4;
})

names.some(function(name) {
  return name.length > 4;
})

////////////////////////////////////////////////

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");


var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
})

username.validate()

//Example 1
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
});

//Example 2

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending';
});


////////////////////////////////////////////////////////////////////////////////
//                          Reduce helper method

var numbers = [10,20,30];
var sum = 0;

for(var i = 0; i < numbers.length; i++) {
  sum+=numbers[i];
}

"--"

numbers.reduce(function(sum, number){
  return sum + number;
}, 0);

"--"

var primaryColors = [
  {color: "red" },
  {color: "yellow" },
  {color: "blue" }
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color)

  return previous;
}, []);

"---"

function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    if(previous < 0) {return previous;}
    if(char === '(')  {return ++previous;}
    if(char === ')') {return --previous;}
    return previous;
  }, 0);
}

balancedParens('(((()');
balancedParens('()');
balancedParens(')(');

//Example 1
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip){
 return previous + trip.distance;
}, 0);

//Example 2
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if(desk.type === 'sitting') {++acc.sitting;}
    if(desk.type === 'standing') { ++acc.standing;}

    return acc;
}, { sitting: 0, standing: 0 });

//Example 3
// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]
// Hint: Use the 'reduce' and 'find' helpers.


function unique(array) {
    return array.reduce(function(reducedArray, element) {
        var duplicate = reducedArray.find(function(reducedArrayElement) {
            return reducedArrayElement === element;
        });
        if (!duplicate) reducedArray.push(element);
        return reducedArray;
    }, []);
}

////////////////////////////////////////////////////////////////////////////////
//                          const and let

//var name = 'Aj';

//var title = 'Software Engineer';

//var hourlyWage = 40;

//ES6

const name = 'Aj';
let title = 'Software Engineer';
let hourlyWage = 40;

title = 'Senior Software Developer';
hourlyWage = 45;

//Example 1
const name = 'Aj';
let age  = 21;
const dateOfBirth ='06/25/96';

//Example 2
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

////////////////////////////////////////////////////////////////////////////////
//                            Template strings
const device_id = 4;
const guid = 20;
const username = 'HELLO';

const data = `{"device_id":"${device_id}","guild":"${guid}","username":"${username}","}`;

data;


const year = 2016;
const yearMessage = `The year is ${year}`;

yearMessage;

//Example 1
function doubleMessage(number) {
    const doubled = number * 2;
  return `Your number doubled is ${doubled}`;
}

//Example 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}


////////////////////////////////////////////////////////////////////////////////
//                           Arrow functions

const add = function(a,b) {
	return a + b;
}
add(1,2)

const sub = (a,b) => {
	return b - a;
}
sub(1,2)

const mult = (a,b) => a * b;
mult(1,2)

const div = a => a / 2;
div(4)

const numbers = [1,2,3];

numbers.map(number => 2 * number);


const team = {
members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
  	return this.members.map((member) => {
  		return  `${member} is on team ${this.teamName}`;
		});
	}
};

team.teamSummary();

//Example 1
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Example 2
const profile = {
    name: 'Alex',
    getName: () => {
        return profile.name;
    }
};



////////////////////////////////////////////////////////////////////////////////
//                       Enhanced object literals

function createBookShop(inventory){
  return {
  //inventory: inventory,
    inventory,
  //inventoryValue: function
    inventoryValue() {
    return this.inventory.reduce((total, book) => total + book.price, 0);
  },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10 },
  {title: 'Eloquent Javscript', price: 15 }
  ];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

function saveFile() {
//$.ajax({method: 'POST', url, data });
  $.ajax({method: 'POST', url: url, data: data });

}

const url = 'http://ajwietecha.com';
const data = {color: 'red');

saveFile(url, data);

//Example 1
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

//Example 2
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

//Example 3
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
     width,
     height
  };
}

//example 4
const color = 'red';

const Car = {
  color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

////////////////////////////////////////////////////////////////////////////////
//                      Default function Arguments


function makeAjaxRequest(url, method = 'GET') {
  return method;
//logic to make request

}

makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', 'POST');


function User(id) {
 this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}


function createAdminUser(user = new User(generateId())) {
	user.admin = true;

  return user;
}

createAdminUser();
const user = new User(generateId());




////////////////////////////////////////////////////////////////////////////////

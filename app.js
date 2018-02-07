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

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

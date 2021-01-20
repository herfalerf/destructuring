//OBJ 1******
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

//OBJ 2******
// let planetFacts = {
// 	numPlanets: 8,
// 	yearNeptuneDiscovered: 1846,
// 	yearMarsDiscovered: 1659
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//OBJ 3******
// function getUserData({ firstName, favoriteColor = 'green' }) {
// 	return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // "Your name is Alejandro and you like purple"
// getUserData({ firstName: 'Melissa' }); // "Your name is Melissa and you like green"
// getUserData({}); //  "Your name is undefined and you like green"

//ARR 1*******
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // "Maya"
// console.log(second); // "Marisa"
// console.log(third); // "Chi"

//ARR 2*******
// let [ raindrops, whiskers, ...aFewOfMyFavoriteThings ] = [
// 	'Raindrops on roses',
// 	'whiskers on kittens',
// 	'Bright copper kettles',
// 	'warm woolen mittens',
// 	'Brown paper packages tied up with strings'
// ];

// console.log(raindrops); // "Raindrops on roses"
// console.log(whiskers); // "whiskers on kitten"
// console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles, warm woolen mitten, Brown paper packages tied up with string"]

//ARR 3*********
// let numbers = [ 10, 20, 30 ];
// [ numbers[1], numbers[2] ] = [ numbers[2], numbers[1] ];

// console.log(numbers); // [10, 30, 20]

//ES5 Assign variable to object properties
var obj = {
	numbers: {
		a: 1,
		b: 2
	}
};

//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

const { numbers: { a, b } } = obj;

//ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
//prettier-ignore
let arr = [1,2];

[ arr[0], arr[1] ] = [ arr[1], arr[0] ];

let raceResults = ([ first, second, third, ...rest ]) => ({ first, second, third, rest });

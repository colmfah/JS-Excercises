let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']


//20101

const listNumbers = (arr) => arr.forEach(n => console.log(n))



//20102
const listNames = (arr) => arr.forEach(n => console.log(n.name))


//20103 Create a function that adds 1 to each number and returns a new array



const mapArrayFunction = (arr) => arr.map(n => n+1)


//20104 Create a function that returns an array of all the students' names


const studentsarrfunc = (arr) => arr.map(x => x.name)


//20105 Create a function that returns an array with only numbers equal to or greater than 22

const greaterThan22 = (arr) => arr.filter(x => x >= 22)


//20106 Create a function that returns an array with only numbers greater than the parameter passed onto the function

const greaterThanNumber = (arr, keyvalue) => arr.filter(x => x > keyvalue)



//20107 Create a function that returns an array with only students whose name is more than 6 characters long


const longNames = (arr) => arr.filter(s => s.name.length > 6)



//20108 Create a function that returns an array with only strings from mix
// let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

const mixNames = (arr) => arr.filter(x => typeof x === 'string')


// 20109 Create a function that returns the first number greater than 100
const firstGreaterThan100 = (num) => num.find(x => x >100)



//20110 Create a function that returns the first student whose name is Bob
// let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]

const findBob = (arr) => arr.find(x => x.name === 'Bob')

//20111

const sumReduce = (num) => num.reduce((a, b) => a + b)



//20112 reducing without using reduce

//let numbers = [1, 90, 78, 3, 22, 187, 21]


const sumWithoutReduce = (num) => {

	let sum = 0

	for (let i = 0; i < num.length; i++){
		sum = sum + num[i]

	}

	return sum

}

//should I have done this using a forEach?


//20113 Create a function that returns the difference of all numbers, using reduce()

const diffReduce = (num) => num.reduce((a, b) => a - b)

//20114
const prodReduce = (num) => num.reduce((a, b) => a*b)



//20115 Create a function that returns an array with numbers sorted in descending order

const sortDecend = (num) => num.sort((a, b) => b - a)


//20116 Create a function that returns an array with students sorted by ascending length of their names

//let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]

const namesDecend = (arr) => arr.sort((a, b) => a.name.length - b.name.length)


//20117

//let numbers = [1, 90, 78, 3, 22, 187, 21]
//let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]



let combine = (users, nums) => {return users.map(	(u,i) => {return {name: u.name, age: nums[i]}}	)}

//why is there two return statements here?
//what does u represent? Is it just users or is it both users & nums?
//why do i call users using u but I call nums calling nums?
//why won't the code work when I space it out like below?

// const combine2 = (users, nums) => {return users.map(	(u, i) => {return
// 	{
// 		name: u.name,
// 		age: nums[i]
// 	}
// }	)}





// In the following array, number 6 is missing. Create a function that returns the missing number. [1, 2, 3, 4, 5, 7, 8, 9, 10]




//20119
arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]

const testArray = (a) => {

	for (i = 1; i <a.length; i++){
		if (a[i] - a[i-1] != 1){
			return (i+1)
		}
	}
}





const testArrayf = (a) => {let temp = a.filter( (e,i) => {return (a[i+1] != a[i]+1)} )

temp.pop()

return temp.map(x => x + 1)

}

//what is the difference between a and e in the filter?


//could (should) I have done this using a forEach. If so, why does following code not work?

// const testArray2 = (a) => {
//
// a.forEach(
// 	if (a[i] - a[i-1] != 1){
// 		return i+1
// 	}
// )
//
// }



//20120
// Given the following currency denominations
// [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]
// create a function that returns an array with separate denominations needed to reach the amount passed into the function. Optimize for higher denominations.
//
// 	27.58 => [10, 10, 5, 1, 1, 0.5, 0.05, 0.01, 0.01]


let denominationFunction = (arr,num) => {
	let total = num
	let newArray = []
	arr.forEach((e,i) => {
		while (num.toFixed(2) >= e) {
			newArray.push(e)
			num = num -= e
		}
		console.log('num', num)
	}
	)
	return newArray
}

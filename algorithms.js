let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

// 20301 Flip each word in phrase and return a single string

let flip = (str) => {

	let phraseArray = phrase.split(' ')

	let revphraseArray = phraseArray.map(e => e.split('').reverse().join(''))

	return revphraseArray.join(' ')

}
// 20302 Convert the array of prices into the following array of objects. Make sure that the value property is of type number.

// [
// 	{
// 		currency: '$',
// 		value: 22
// 	}
// ]


let newPrices = (arr) => {

return arr.map(e => {return {currency: e.split('')[0], value: Number(e.split('').splice(1, arr.length).join(''))}})

}


//20303 From the array names return only the palindromes (a palindrome is a word that reads exactly the same from left to right and backwards).
//['anna', 'bob']

const palTester = (arr) => arr.filter(e => e == e.split('').reverse('').join(''))

	//	return arr.filter(e => e.split('') == e.split('').reverse('')) didn't work and I don't understand why


//20304
// Create a function that, given any number (positive integer) returns the number in Roman numerals.

let romanNumerals = [
	{v:1000, s:'M'},
	{v:900, s:'CM'},
	{v:500, s:'D'},
	{v:400, s:'CD'},
	{v:100, s:'C'},
	{v:90, s:'XC'},
	{v:50, s:'L'},
	{v:40, s:'XL'},
	{v:10, s:'X'},
	{v:9, s:'IX'},
	{v:5, s:'V'},
	{v:4, s:'IV'},
	{v:1, s:'I'}]

	const getRomans = (x, arr) => {
		let output = ''
		let i = 0
		while (i < arr.length) {
			if (x >= arr[i].v) {
				x -= arr[i].v
				output += arr[i].s
			} else {
				i++
			}
		}
		return output
	}


// 20305 Create a function that loops numbers from 0 to 20. For each number, if the number is a multiple of 3, log fizz; if the number is a multiple of 5, log buzz; if the number is a multiple of both 3 and 5, log fizzbuzz; for all other numbers, log the number itself.

const loopy = () => {

let number = 0
while (number <=20){
	if(number % 3 === 0 && number % 5 === 0){
		console.log('fizzbuzz')
	}
	else if (number % 5 !== 0 && number % 3 === 0){
		console.log('fizz');
	}
	else {
		console.log(number);
	}
	number++
}

}

//works but has an undefined at the end. I don't know why



// 20306 Create a function a that takes 2 numbers as parameters and returns their sum. Create a function b that takes 4 parameters, the first is a function that takes itself 2 parameters, the other 3 are numbers. Call function b and pass as parameters function a and 3 numbers. function b should trigger function a passing as parameters the first 2 numbers, therefore getting their sum, then subtract the last number and return the result.


const a = (n1, n2) => n1 + n2

const b = (	func, num1, num2, num3) => {
	return func(num1, num2) - num3

}





// 1 => I
// 2 => II
// 3 => III
// 4 => IV
// 5 => V
// 6 => VI
// 7 => VII
// 8 => VIII
// 9 => IX
// 10 => X
// 11 => XI
// 20 => XX
// 40 => XL
// 50 => L
// 100 => C
// 500 => D
// 1000 => M


const roman = (num) => {

	let remainder = num
	let answer = []
	let romanValues = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'C', 'D', 'M']
	let modernValues = [1, 4, 5, 9, 10, 40, 50, 100, 500, 1000]

	let romanRev = romanValues.reverse()
	let modernRev = modernValues.reverse()

modernRev.forEach((e,i) => {while (remainder > e){
	answer.push(romanRev[i])
	remainder = remainder - e

}}

)


return answer

}

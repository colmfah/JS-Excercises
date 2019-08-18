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

const palTester = (arr) =>{

	return arr.filter(e => e == e.split('').reverse('').join(''))

	//	return arr.filter(e => e.split('') == e.split('').reverse('')) didn't work and I don't understand why
}

//20304
// Create a function that, given any number (positive integer) returns the number in Roman numerals.

const romanMeUp = (num) => {
	let arrayAnswer = []
	let remainder = num

while (remainder >= 1000){
	arrayAnswer.push('M')
	remainder = remainder - 1000
}

while (remainder >= 900){
	arrayAnswer.push('CM')
	remainder = remainder - 900
}

while (remainder >= 800){
	arrayAnswer.push('DCCC')
	remainder = remainder - 800
}

while (remainder >= 700){
	arrayAnswer.push('DCC')
	remainder = remainder - 700
}

while (remainder >= 600){
	arrayAnswer.push('DC')
	remainder = remainder - 600
}

while (remainder >= 500){
	arrayAnswer.push('D')
	remainder = remainder - 500
}

while (remainder >= 400){
	arrayAnswer.push('CD')
	remainder = remainder - 400
}

while (remainder >= 300){
	arrayAnswer.push('CCC')
	remainder = remainder - 300
}

while (remainder >= 200){
	arrayAnswer.push('CC')
	remainder = remainder - 200
}

while (remainder >= 100){
	arrayAnswer.push('C')
	remainder = remainder - 100
}

while (remainder >= 90){
	arrayAnswer.push('XC')
	remainder = remainder - 90
}

while (remainder >= 80){
	arrayAnswer.push('LXXX')
	remainder = remainder - 80
}

while (remainder >= 70){
	arrayAnswer.push('LXX')
	remainder = remainder - 70
}


while (remainder >= 60){
	arrayAnswer.push('LX')
	remainder = remainder - 60
}

while (remainder >= 50){
	arrayAnswer.push('L')
	remainder = remainder - 50
}

while (remainder >= 40){
	arrayAnswer.push('XL')
	remainder = remainder - 40
}

while (remainder >= 30){
	arrayAnswer.push('XXX')
	remainder = remainder - 30
}

while (remainder >= 20){
	arrayAnswer.push('XX')
	remainder = remainder - 20
}

while (remainder >= 10){
	arrayAnswer.push('X')
	remainder = remainder - 10
}

while (remainder >= 9){
	arrayAnswer.push('IX')
	remainder = remainder - 9
}

while (remainder >= 8){
	arrayAnswer.push('VIII')
	remainder = remainder - 8
}

while (remainder >= 7){
	arrayAnswer.push('VII')
	remainder = remainder - 7
}

while (remainder >= 6){
	arrayAnswer.push('VI')
	remainder = remainder - 6
}

while (remainder >= 5){
	arrayAnswer.push('V')
	remainder = remainder - 5
}

while (remainder >= 4){
	arrayAnswer.push('IV')
	remainder = remainder - 4
}

while (remainder >= 3){
	arrayAnswer.push('III')
	remainder = remainder - 3
}

while (remainder >= 2){
	arrayAnswer.push('II')
	remainder = remainder - 2
}

while (remainder >= 1){
	arrayAnswer.push('I')
	remainder = remainder - 1
}

	return arrayAnswer.join('')
}



// 20305 Create a function that loops numbers from 0 to 20. For each number, if the number is a multiple of 3, log fizz; if the number is a multiple of 5, log buzz; if the number is a multiple of both 3 and 5, log fizzbuzz; for all other numbers, log the number itself.

const loopy = () => {

let number = 0
while (number <=20){
	if(number % 3 === 0 && number % 5 === 0){
		console.log('fizzbuzz')
	}
	else if (number % 5 === 0 && number % 3 !== 0){
		console.log('buzz');
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

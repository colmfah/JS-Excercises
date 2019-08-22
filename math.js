let products = [{name:'bread',price:3.5},{name:'orange',price:1.3},{name:'gum',price:2.8}]


//20201 Create a function that rounds any given number passed to the function, removing any decimals
	// 3.14 => 3
	// 15.9 => 16


const roundy = (num) => Math.round(num)



//20202 Create a function that returns all products with their prices rounded
// [{name:'bread',price:4},{name:'orange',price:1},{name:'gum',price:3}]

const roundyProds = (arr, func) => {

// const roundy = (num) => Math.round(num) //should I declare within function or use as parameter in roundyProds function. Which is better? why?


	return arr.map(e => {
		return {name: e.name, price: func(e.price)}
	} )

}

roundyProds(products, roundy)


// 20203 Create a function that takes 2 numbers as parameters and returns the first number rounded to the number of decimals defined by the second parameter.


const roundyParameter = (n1, n2) => n1.toFixed(n2)



// 20204 Create a function that that takes 2 numbers as parameters and returns the first number to the power of the second number.


const powerOf = (n1, n2) => Math.pow(n1, n2)



// 20205 Create a function that returns a random number between 1 and 10.

const randomNum = () => Math.floor(Math.random()*10) + 1

// 20206 Create a function that takes a number as parameter and returns a random number between 1 and the parameter.



limitedRandom = (max) => Math.round(Math.random() * (max - 1) + 1)

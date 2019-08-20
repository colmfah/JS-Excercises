// 20501 Create a class Car
// Create a buildCar function that takes make, model and color and returns a new instance of Car


class Car {
	constructor(make, model, color){
		this.make = make
		this.model = model
		this.color = color
		this.wheels = 4
		this.airbag = true
	}
}


const buildCar = (make, model, color) => new Car(make, model, color)

// console.log(buildCar('skoda', 'octavia', 'silver'));

// console.log(buildCar('skoda', 'octavia', 'silver'));

// #020502//
// Create a class Employee with properties name and job
// Create a makeEmployees function that takes the 2 arrays of matching names and jobs as parameters and, using the Employee class, returns an array of objects
// [
//   {name:'Alice', job:'Accountant'},
//   {name:'Bernard', job:'Biz Manager'},
//   {name:'Catherine', job:'Cleaner'},
//   {name:'David', job:'Director'}
// ]

let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

class Employee {
	constructor(name, job){
		this.name = name
		this.job = job
	}
}


// const makeEmployees = (nameArr, jobArr) => {return nameArr.map((e, i) => {return {name: e, job: jobs[i]}})}

const makeEmployees5 = (nameArr, jobArr) => {return nameArr.map((e, i) => {return new Employee(e, jobArr[i])})}

// think this is right. It console logs with Employee before it though
//
// [ Employee { name: 'Alice', job: 'Accountant' },
//   Employee { name: 'Bernard', job: 'Biz Manager' },
//   Employee { name: 'Catherine', job: 'Cleaner' },
//   Employee { name: 'David', job: 'Director' } ]


//#020503

let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

class Karateka {
	constructor(name){
		this.name = name
		this.beltNo = [0, 1, 2, 3, 4, 5, 6]
		this.belt = belts[this.beltNo[0]]
	}
increaseRank(){
	this.beltNo.shift()
	this.belt = belts[this.beltNo[0]]

	// I tried to include beltNo array here and change value of this.belt from here but it wouldn't work and I don't understand why
}
}

let colm = new Karateka('colm')

const fight = (inst) => {
	let count = 1
	let tempValue = 0
	let overEight = 0
	let counter = () => {

		if (overEight == 6){
			clearInterval(m)
		} //stopping execution after one more run. Why?

		// if (this.belt = 'black'){
		// 	return 'Game Over'
		// } this causes an infinite loop. Why?
	tempValue = Math.floor(Math.random()*10) + 1
	if (tempValue <= 8){
		console.log('score:', tempValue, inst)
	}
		if (tempValue > 8){
			overEight++ //this var gives the rank of the beltNo that I want but I don't how how to export it
			console.log('triggered', overEight)
			// if (overEight > 7){
			// 	return 'GAME OVER'
			// } causes infinite loop. Why?
			inst.increaseRank()
			console.log('INCREASE')
			console.log('score:', tempValue, inst);
		}
		count++

		if (count == 20){
			clearInterval(m)
		}

	}

let m = setInterval(counter, 1000)
}

// fight(colm)

//could be improved by removing beltNo var from display and make it stop running at right point if there is a black belt

//#020504

let names2 = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]


class Product {
	constructor(name, price){
		this.name = name
		this.price = price
	}
	applyDiscount(discount){
		this. price = this.price.map((e, i) => e*(1 - discount[i]/100))
		return this.name.map(	(e , i) =>	[{name: e, price: this.price[i]}]	)
	}
}


class Receipt {
	constructor(products){
		this.products = products
	}
	calcTotal(products){
		let priceArray = products.price
		return priceArray.reduce(	(a , b) => a + b	)
	}
}


getReceipt = (names, prices, discounts) => {
	let myPurchases = new Product(names, prices)
	myPurchases.applyDiscount(discounts)

let newFormat = myPurchases.name.map((e,i) => {return{name: e, price: myPurchases.price[i]}})

	let myReceipt = new Receipt(newFormat)

console.log(myReceipt.products.map(e => {return {name: e.name, price: e.price} }));

console.log('Total:',myReceipt.calcTotal(myPurchases));

}

getReceipt(names2, prices, discounts)

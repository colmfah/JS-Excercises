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

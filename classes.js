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




// #020502

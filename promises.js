// #020601 Create a function brushTeeth that resolves with ready after 1 second.

const brushTeeth = () => {
	return new Promise(	(resolve) => {
		return setTimeout(	() => {
			resolve('ready')
		}, 1000	)
	}	)
}



//Create a function getUp that resolves with awake after 1 second.

const getUp = () => {
	return new Promise(	(resolve) => {
		return setTimeout(	() =>{
			resolve('awake')
		}, 1000	)
	}		)
}

//format is different to what I took in my notes. It calls correctly when I use format from my notes however the final part of Q1 doesn't work when I use that format

// getUp()

//Create a function haveBreakfast that resolves with eaten after 2 seconds.

const haveBreakfast = () => {
	return new Promise (	(resolve) => {
		return setTimeout(	() => {
			resolve('eaten')
		}, 2000	)
	}	)
}

// haveBreakfast()

//Create a function haveShower that resolves with showered after 2 seconds.

const haveShower = () => {
	return new Promise (	(resolve) => {
		return setTimeout(	() => {
			resolve('showered')
		}, 2000	)
	}	)
}

// haveShower()

// Call the functions in the following order:
// getUp
// haveShower
// haveBreakfast
// brushTeeth

// getUp()
// haveShower()
// haveBreakfast()
// brushTeeth()

// Make sure one doesn't start before the previous one is finished and logs its result
// awake // after 1 second
// showered // after 3 seconds
// eaten // after 5 seconds
// ready // after 6 seconds
//

let goodMorning = () => {
	getUp().then(res => {
		console.log(res)
		haveShower().then(res => {
			console.log(res)
			haveBreakfast().then(res =>{
				console.log(res)
				brushTeeth().then(res => {
					console.log(res);
				})
			})
		})
	})
}

// goodMorning()



//20602 Create a function makeCoffee that resolves with coffee after 10 seconds.

// let a = new Promise((res, rej) => {
//   res('a')
// })


const makeCoffee = () => {
	return new Promise(	(resolve, reject) => {
		return setTimeout(	() => {resolve('coffee')}, 10000			)
	}			)
}

//Create a function makeEggs that resolves with eggs after 5 seconds.

const makeEggs = () => {
	return new Promise(	(resolve, reject) => {
		return setTimeout(	() => {resolve('eggs')}, 5000			)
	}	)
}

//Create a function makeToast that resolves with toast after 6 seconds.

const makeToast = () => {
	return new Promise (	(resolve, reject) => {
		return setTimeout(	() => {resolve('toast')}, 6000		)
	}	)
}

//Create a function makeBacon that resolves with bacon after 8 seconds.

const makeBacon = () => {
	return new Promise(	(resolve, reject) => {
		return setTimeout(	() => {resolve('bacon')}, 8000		)
	}		)
}

Promise.all([makeCoffee(), makeEggs(), makeToast(), makeBacon()]).then(res => {console.log(res)})













// const brushTeeth = () => {
// 	return new Promise(	(resolve) => {
// 		return setTimeout(	() => {
// 			resolve('ready')
// 		}, 1000	)
// 	}	)
// }

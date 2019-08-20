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




// promise1
//   .then((data) => {
//     console.log(data);  // Promise1 resolved
//     return promise2;
//   })
//   .then((data) => {
//     console.log(data);  // Promise2 resolved
//     return promise3;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);  // Promise3 rejected
//   });

// #020601 Create a function brushTeeth that resolves with ready after 1 second.

const brushTeeth = () => {
	return new Promise(	(resolve) => {
		setTimeout(	() => {
			resolve(console.log("ready"))
		}, 1000	)
	}	)
}

// brushTeeth()

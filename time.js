// 20401 Create a function a that logs 'Hello'. Create a function b that takes 2 parameters: function a and a number in seconds, then triggers function a after the number of seconds passed as parameter.



let a = () => console.log('Hello');

let b = (func, time) => setTimeout(func, time)


// 20402 Create a function that logs 'Hello' and the number of seconds elapsed, every second, then stops after 5 seconds.


const repeatHellos = () => {

let count = 1

let counter = () => {
	console.log('Hello', count)
	if (count == 5){
		clearInterval(m)
	}
	count++
}

let m = setInterval(counter, 1000)
	//a variable just runs?? why?

}

repeatHellos()

//***********************************
//  Use chucknorris API
//
//   19/Sep/2021  Kazuhisa Kondo (Kazukd)
//***********************************

//auto run after load html  file
Window.addEventListener("load", getJoke());   

function getJoke() {
fetch('https://api.chucknorris.io/jokes/random')
  	.then((response) => {
    		return response.json()
  	})
  	.then((data) => {
    		// Set image
    		let conta = document.querySelector('.ChuckImg');
    		conta.innerHTML = "<img src=" + data.icon_url + ">"
  	})
  	.catch((err) => {
    		// error message
		let html = 'error';
    		let container = document.querySelector('.ChuckImg');
    		container.innerHTML = html;
  	})
	
	//get joke in random category
	fetch('https://api.chucknorris.io/jokes/random')
  	.then((response) => {
    		return response.json()
  	})
  	.then((data) => {
    		// Show joke
    		let conta = document.querySelector('.joke');
    		conta.innerHTML = data.value
  	})
	.catch((err) => {
    		// error message
		let html = 'error';
    		let container = document.querySelector('.joke');
    		container.innerHTML = html;
  	})
	
}

function getAnimalJoke(){
	//get joke in animal category
	fetch('https://api.chucknorris.io/jokes/random?category=animal')
  	.then((response) => {
    		return response.json()
  	})
  	.then((data) => {
    		// Show joke
			  let conta = document.getElementById("AnimalJoke");
				conta.innerHTML = data.value
    		
  	})
	.catch((err) => {
    		// error message
		let html = 'error';
    		let container = document.getElementById("AnimalJoke");
    		container.innerHTML = html;
  	})
}
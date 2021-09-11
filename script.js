
// https://joeschmoe.io/api/v1/random

let img = document.querySelector('img')
let btn = document.querySelector('button')
btn.addEventListener('click',()=>{
	let a = document.querySelector('input').value
	console.log(a);
	img.src = `https://joeschmoe.io/api/v1/${a}`

});

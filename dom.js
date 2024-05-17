const container =document.getElementById('container');
console.log('parent',container.parentElement);
console.log('previous Sibling...' ,container.previousElementSibling);
console.log('Next Siblings...' ,container.nextElementSibling);
console.log('Children',container.children);
//Editing dom
const containerText = document.getElementById('container-text')
containerText.innerHTML ='Am I really a child ?'

//creating DOM element
const newHeading = document.createElement('h1')
container.appendChild(newHeading);
newHeading.innerHTML ='Introduction'
newHeading.style.color ='red'
const button  = document.getElementById('button');
button.style.border='none';
button.style.background="blue"
button.style.padding = "10px 15px";
button.style.borderRadius="5px";
button.style.cursor="pointer"
button.addEventListener('click',function(){
button.innerHTML='Clicked'
button.style.background="green";
button.style.color="black"

})


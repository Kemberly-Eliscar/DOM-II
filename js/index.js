// Your code goes here

// 1. Change color of nav links when moused over
let navLinks = document.querySelectorAll('.nav a');

console.log(navLinks);

navLinks.forEach(anchor => {
    anchor.addEventListener('mouseover', event => {
        event.target.style.color = 'red';
    })
})

// 2. Set nav links back to black after hover
navLinks.forEach(navLinks =>{
    navLinks.addEventListener('mouseleave', event => {
        event.target.style.color = '';
    })
})

// 3. Change color of buttons at the bottom when click
 let signUpButton = document.querySelectorAll('.btn');
 console.log(signUpButton);

 signUpButton.forEach(anchor => {
 
anchor.addEventListener('click', event => {
     event.target.style.backgroundColor = 'red';
    } )
 })

 // 4. img 
 const bottomPhoto = document.querySelector('.content-destination img')
 bottomPhoto.addEventListener('dblclick', event => {
    event.stopPropagation(); 
    event.target.style.transform = 'scale(1.1)'
 })

// 5. enlarge bottom image on a double click
const intro = document.querySelector('.intro h2')
 intro.addEventListener('mouseover', event => {
     event.target.style.color = 'pink'
 })

// 6. Div background color
 const parent = document.querySelector('.content-destination')
 parent.addEventListener('dblclick', event => {
     event.target.style.backgroundColor = 'purple'
 })

 // 7. img 
 const photo = document.querySelectorAll('.img-content')
console.log(photo)
photo[0].addEventListener('mouseover', event => {
    event.target.style.color = 'yellow'
})

// 8. 
const subtitle = document.querySelector('.text-content h2')
subtitle.addEventListener('focus', event => {
    event.target.style.background = 'orange';
});
//9
subtitle.addEventListener('blur', event => {
    event.target.style.background = '';
});

//10
const h2 = document.querySelector('.intro h2');
h2.draggable = 'true';
h2.addEventListener('dragstart', (event) =>{
  event.target.style.color = 'orange';
  });
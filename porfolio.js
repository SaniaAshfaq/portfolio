

let responsive = document.querySelector('.responsive');
let newdiv;
responsive.addEventListener('click' ,function(){
    responsive.style.display = 'none';
    console.log('clicked');
  newdiv = document.createElement('div');
  newdiv.classList.add('jsClass');
  newdiv.innerHTML = ` <ion-icon name="reorder-three" class="responsive jsresponsive"></ion-icon>
  <a href="#mycontent" class="home jslink" >Home</a>
  <a href="#about" class='jslink'>About</a>
  <a href="#services" class='jslink'>services</a>
  <a href="#projects" class='jslink'>projects</a>
  
  `;
   document.body.appendChild(newdiv);

   newdiv.offsetHeight;
   newdiv.style.left = '0';

   let jsDiv = newdiv.querySelector('.responsive');
jsDiv.addEventListener('click',function(){
    newdiv.style.left = '-100%';
    // newdiv.style.display = 'none';
    responsive.style.display = 'block';
    
});
let link = newdiv.querySelectorAll('.jslink');
link.forEach((event)=>{
   event.addEventListener('click',function(){
    newdiv.style.left = '-100%';
    // newdiv.style.display='none';
    responsive.style.display = 'block';
   })
})
    
})


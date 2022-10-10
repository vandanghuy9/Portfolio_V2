// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
const message = ["University Student","Web Developer"];
let index =0;
let characterIndex =0;
const getList = document.querySelector('#menu-list');
const elements = getList.querySelectorAll('.nav-link');
console.log(elements[0]);
for (let i=0;i<elements.length;i++){
  elements[i].addEventListener("click",()=>{
    const current = document.getElementsByClassName("active");
    console.log(current.length);
    if (current.length > 0){
      current[0].className = current[0].className.replace(" active","");
    }
    elements[i].className += " active";
  });
}

function delay(){
  characterIndex =0;
  index++;
  document.querySelector('.is-visible').innerHTML = '';
  setTimeout(setPushElement,100); //run 2st message
}
function setPushElement(){
  if (index < message.length){
    if (characterIndex < message[index].length){
      document.querySelector('.is-visible').innerHTML += message[index].charAt(characterIndex);
      characterIndex++;
      setTimeout(setPushElement,200); // read the 1st message
    }
    else{ // if finish 1st message 
      setTimeout(delay,1000); // wait for 2st message
    }
  }
  else{ // after finish 2 messages
    index = 0;
    characterIndex =0; //restore initiated value
    setTimeout(setPushElement,200);
  }
}


setInterval(setPushElement(),5000);



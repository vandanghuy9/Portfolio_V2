// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

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

const setPushElement=setInterval(function(){
  const getJob = document.getElementsByClassName("job");
  const isHidden = "is-hidden";
  
  if (getJob[0].className==="job is-hidden"){
    getJob[0].className=getJob[0].className.replace(" is-hidden"," is-visible");
    getJob[1].className=getJob[1].className.replace(" is-visible"," is-hidden");
  }
  else if (getJob[0].className==="job is-visible"){
    getJob[0].className=getJob[0].className.replace(" is-visible"," is-hidden");
    getJob[1].className=getJob[1].className.replace(" is-hidden"," is-visible");
  }
},3000);
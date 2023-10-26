const picsElement = document.querySelector(".move");
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.05,
  });

observer.observe(picsElement);
  
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("initiate");  
      observer.unobserve(entry.target);
    }
  });
}
var state = 0;

function expand(){
  var navbar = document.getElementsByClassName("nav");
  var contactus = document.getElementById("contactus");
    
  let response = expansion().then(result => {
    if(state==1){
      contactus.classList.add("expansion");
    }
    else{
      contactus.classList.remove("expansion");
      // retraction().then(result1 => {
      //   contactus.style.display = "none";
      // });
      // contactus.style.transform = "translateY(100%)"
    }
  });
}

function expansion(){
  return new Promise(function(resolve, reject) {
    var navbar = document.getElementsByClassName("nav");
    nav = navbar[0];
    if(!nav.classList.contains("expanded") && state == 0){
      nav.classList.add("expanded");
      state = 1;
    }
    else{
      nav.classList.remove("expanded");
      state = 0;
    }
    setTimeout(function() {
      console.log('Task is complete.');
      resolve();
    }, 1000);
  });
}

function retraction(){
  return new Promise(function(resolve, reject){
    var contactus = document.getElementById("contactus");
    contactus.style.transform = "translateY(100%)"
    setTimeout(function(){
      console.log("Retracted");
      resolve();
    }, 1000);

  });
}



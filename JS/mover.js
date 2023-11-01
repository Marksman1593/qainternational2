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
  var black = document.getElementById("black");
  var contactus = document.getElementById("contactus");
    
  let response = expansion().then(result => {
    if(state==1){
      contactus.classList.add("expansion");
      black.style.background = "rgba(0, 0, 0, 0.5)";
    }
    else{
      contactus.classList.remove("expansion");
      black.style.display = "";
      contact.innerHTML = "Contact Us";
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
    var black = document.getElementById("black");
    var contact = document.getElementById("contact");
    var nav2 = document.getElementById("nav2");

    nav = navbar[0];
    if(!nav.classList.contains("expanded") && state == 0){
      nav.classList.add("expanded");
      black.style.display = "block";
      nav2.style.width = "5%";
      contact.innerHTML = "X";
      state = 1;
    }
    else{
      nav.classList.remove("expanded");
      black.style.background = "";
      nav2.style.width = "19%";
      state = 0;
    }
    setTimeout(function() {
      console.log('Task is complete.');
      resolve();
    }, 500);
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

const img1Element = document.querySelector("#imgs1");
const observer1 = new IntersectionObserver(handleIntersection1, {
    threshold: 0.5,
  });

observer1.observe(img1Element);
  
function handleIntersection1(entries, observer1) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      var img1 = document.getElementById("img-1");
      img1.style.transform = "translateX(0%)";
      var img2 = document.getElementById("img-2");
      img2.style.transform = "translateX(-7%)";
      var line = document.getElementById("blue-line1");
      line.style.transform = "translate(-50%, -100%)"
      setTimeout(function(){
        line.style.transform = "translate(-50%, 0%)"
      }, 1000);
      observer1.unobserve(entry.target);
    }
  });
}

const img2Element = document.querySelector("#imgs2");
const observer2 = new IntersectionObserver(handleIntersection2, {
    threshold: 0.5,
  });

observer2.observe(img2Element);
  
function handleIntersection2(entries, observer1) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      
      var img1 = document.getElementById("img-3");
      img1.style.transform = "translateX(0%)";
      // console.log(img1);
      var line = document.getElementById("blue-line2");
      line.style.transform = "translate(-50%, 100%)"
      setTimeout(function(){
        line.style.transform = "translate(-50%, 0%)"
      }, 1000);
      observer2.unobserve(entry.target);
    }
  });
}



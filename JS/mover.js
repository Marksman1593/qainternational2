const picsElement = document.querySelector(".move");
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.05,
  });

observer.observe(picsElement);
  
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("initiate");
  
        // setTimeout(() => {
        //   entry.target.classList.remove("initiate");
        // }, 1000);
  
        observer.unobserve(entry.target);
      }
    });
  }
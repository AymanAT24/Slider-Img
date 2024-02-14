
// get Image
let sliderImage = Array.from(document.querySelectorAll(".slide-image img"));

// get Number of Slides
let slidercount = sliderImage.length;

// Set Current Slide
let currentSlide = 1;

// Get Slide Number Element
let slideNum = document.getElementById("slide-number");


// Get Previous And Next Buttons
let prevButton = document.getElementById("prev")

let nextButton = document.getElementById("next")

// Handle On click Function

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;


// Create Ul List 

let paginationUl = document.createElement("ul")

paginationUl.setAttribute("id", "pagination-ul")


// Loop To Create Li Element 

for (let i = 1; i <= sliderImage.length; i++) {

  let paginationLi = document.createElement("li")

  paginationLi.setAttribute("data-index", i)

  paginationLi.appendChild(document.createTextNode(i))

  paginationUl.appendChild(paginationLi)



}

  document.getElementById("indicators").appendChild(paginationUl);



// function For Next And Prev Button
function nextSlide() {

  if (nextButton.classList.contains("disabled")) {

    return false;

  } else {
    currentSlide++

  }
    theChecker()
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {

    return false;

  } else {
    currentSlide--
  }
      theChecker()
};



// Get Created Pagination Ul 
let ulBullets = document.getElementById("pagination-ul")

//Array From Created Paginatin lis
let paginationCreatedLi = Array.from(document.querySelectorAll("#pagination-ul li"));

// for (let i = 0; i < paginationCreatedLi.length; i++) {


//   paginationCreatedLi[i].onclick = function(){

//     currentSlide = parseInt(this.getAttribute("data-index"))
//       theChecker()

//   }

// }


paginationCreatedLi.forEach(li=> {


  li.addEventListener("click", (e) => {

    currentSlide = parseInt(e.target.getAttribute("data-index"));
    theChecker();
    
  });
});


  //Create The Checker Function For Dynamic Web Site

function theChecker(){

  removeAllActive()


  slideNum.textContent = 'Slide #' + (currentSlide);

  sliderImage[currentSlide - 1].classList.add("active");

  ulBullets.children[currentSlide - 1].classList.add("active")



// Check If The Current Slide Is The First
  if (currentSlide == 1 ) {

    prevButton.classList.add("disabled")

  } else {

    prevButton.classList.remove("disabled")

    
  }

// Check If The Current Slide Is The Last
  if (currentSlide == slidercount ) {

    nextButton.classList.add("disabled")

  } else {

    nextButton.classList.remove("disabled")

    
  }
};

theChecker()


function removeAllActive(){

  sliderImage.forEach(Img => {

    Img.classList.remove("active")

  });

  paginationCreatedLi.forEach(li => {

    li.classList.remove("active")

  })

};

// let spanUp = document.querySelector(".up")


// window.onscroll = function(){

//   if (this.scrollY >= 1000 ) {
//   spanUp.classList.add("show")
//   }else{
//     spanUp.classList.remove("show")
//   };
// };


// spanUp.onclick = function(){

//   window.scrollTo({
//     top:0,
//     behavior: "smooth",
//   })

// };
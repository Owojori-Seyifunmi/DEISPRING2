// TOGGLE NAVBAR

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const clicks = document.querySelectorAll(".click");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



clicks.forEach(function(click){
  click.addEventListener("click", function () {
    links.classList.remove("show-links");
  });
})

// TESTIMONIAL SECTION 

let slides = document.querySelectorAll('.testimony-slide');
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let currentSlide = 0;

function showSlide(index){
  slides.forEach(function(slide, i){
    slide.classList.remove('active');

    if(i===index){
      slide.classList.add('active');
    }
  })
}

nextBtn.addEventListener('click', function(){
  currentSlide = (currentSlide +1)% slides.length;
  showSlide(currentSlide)
})


prevBtn.addEventListener('click', function(){
  currentSlide = (currentSlide - 1 + slides.length)% slides.length;
  showSlide(currentSlide)
})



// FORM VALIDATION

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format WhatsApp message
    const whatsappMessage = `Hello Deispring College,\n\nMy name is ${name}. ${message}\n\nYou can contact me via email at: ${email}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your actual WhatsApp number in international format
    const whatsappNumber = "+2347041001960";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
});
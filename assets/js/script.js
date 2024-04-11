// Form Validation
function submitForm() {
  // Get the input values
  var name = document.getElementById("name").value.trim();
  var mobile = document.getElementById("mobile").value.trim();

  // Regular expression to match 10-digit mobile number
  var mobileRegex = /^\d{10}$/;

  // Check if name is empty
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Check if mobile number is empty
  if (mobile === "") {
    alert("Please enter your mobile number.");
    return false;
  }

  // Check if mobile number matches the format
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  // If all validations pass, submit the form
  alert("Form submitted successfully!");
  return true;
}

// Smooth Scroll
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll(".nav__links a");

  // Add click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // Function to implement smooth scrolling
  function smoothScroll(e) {
    // Prevent default behavior (jumping to section)
    e.preventDefault();

    // Get the ID of the target section from the href attribute of the clicked link
    const targetId = this.getAttribute("href").substring(1);

    // Find the target section element by its ID
    const targetSection = document.getElementById(targetId);

    // If the target section exists
    if (targetSection) {
      // Calculate the offset top position of the target section
      const offsetTop = targetSection.offsetTop;

      // Scroll smoothly to the target section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Use smooth scrolling behavior
      });
    }
  }
});

// Testimonial Crousel
document.addEventListener("DOMContentLoaded", function () {
  const testimonialCarousel = document.querySelector('.review__container');
  const prevBtn = document.querySelector('.carousel__prev');
  const nextBtn = document.querySelector('.carousel__next');
  let currentIndex = 0;
  let intervalId;

  // Function to show the current testimonial
  const showTestimonial = () => {
      const testimonials = testimonialCarousel.querySelectorAll('.testimonial__content');
      testimonials.forEach((testimonial, index) => {
          if (index === currentIndex) {
              testimonial.style.display = 'block';
          } else {
              testimonial.style.display = 'none';
          }
      });
  };

  // Function to move to the next testimonial
  const nextTestimonial = () => {
      currentIndex = (currentIndex === testimonialCarousel.children.length - 1) ? 0 : currentIndex + 1;
      showTestimonial();
  };

  // Function to start autoplay
  const startAutoplay = () => {
      intervalId = setInterval(nextTestimonial, 5000); // Change the delay as needed (5000 milliseconds = 5 seconds)
  };

  // Function to stop autoplay
  const stopAutoplay = () => {
      clearInterval(intervalId);
  };

  // Initialize the carousel and start autoplay
  showTestimonial();
  startAutoplay();

  // Event listener for previous button
  prevBtn.addEventListener('click', () => {
      stopAutoplay();
      currentIndex = (currentIndex === 0) ? testimonialCarousel.children.length - 1 : currentIndex - 1;
      showTestimonial();
      startAutoplay();
  });

  // Event listener for next button
  nextBtn.addEventListener('click', () => {
      stopAutoplay();
      nextTestimonial();
      startAutoplay();
  });
});

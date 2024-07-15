//nav bar
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", handleNavClick);
});
function handleNavClick(event) {
  event.preventDefault();

  //first removing the active class from all links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  //adding the active class to the clicked link
  event.target.classList.add("active");

  //scroll to the section
  const targetSection = document.querySelector(
    event.target.getAttribute("href")
  );
  targetSection.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const contentItems = document.querySelectorAll(".project .content-item");
  const projectImage = document.getElementById("projectImage");
  let currentIndex = 0;

  // Function to show the next image
  function showNextImage() {
    // Remove active class from all content items
    contentItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active class from all content items
        contentItems.forEach((i) => i.classList.remove("active"));

        // Add active class to the clicked item
        this.classList.add("active");

        // Change the image
        const newImage = this.getAttribute("data-image");
        projectImage.src = newImage;
      });
    });
    contentItems.forEach((i) => i.classList.remove("active"));

    // Add active class to the next content item
    contentItems[currentIndex].classList.add("active");

    // Change the image
    const newImage = contentItems[currentIndex].getAttribute("data-image");
    projectImage.src = newImage;

    // Move to the next content item
    currentIndex = (currentIndex + 1) % contentItems.length;
  }

  // Automatically show the next image every 5 seconds (adjust as needed)
  setInterval(showNextImage, 3000); // 5 seconds

  // Initial setup
  showNextImage();
});

const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");
const totalDots = dots.length;
const slidesPerDot = 1; // Number of slides per dot
let currentGroup = 0; // Initialize the current group

// Function to update dot images
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentGroup % totalDots) {
      dot.classList.add("active");
      dot.src = "./images/rdot.svg"; // Change to red dot
    } else {
      dot.classList.remove("active");
      dot.src = "./images/bdot.svg"; // Change to black dot
    }
  });
}

// Automatically scroll the slider
function autoScroll() {
  currentGroup++; // Move to the next group
  const targetSlide = currentGroup * slidesPerDot;
  const slideWidth = slider.clientWidth; // Adjust if needed

  // Scroll to the target slide
  slider.scrollTo({
    left: targetSlide * slideWidth,
    behavior: "smooth", // Add smooth scrolling effect
  });

  // Update dot images
  updateDots();
}

// Set an interval for automatic scrolling (adjust the duration as needed)
const slideInterval = 5000; // 5 seconds
setInterval(autoScroll, slideInterval);

// Initial update of dot images
updateDots();

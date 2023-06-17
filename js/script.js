// const overlay = document.querySelector('.overlay');

// overlay.addEventListener('click', () => {
//     overlay.classList.toggle('overlay-hidden');
// });

// For animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // is you only want animation to show once you can stop here
            entry.target.classList.add('stagger-show'); // is you only want animation to show once you can stop here
        } else {
            entry.target.classList.remove('show'); // add this if you van to reboot the class when it's not intersecting
            entry.target.classList.remove('stagger-show'); // add this if you van to reboot the class when it's not intersecting
        }
    });
});

// close window onclick
function close_window() {
    if (confirm("Close Window?")) {
      close();
    }
  }

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// curtain reveal animation & play audio when clicked
const cover = document.querySelector(".cover");
const myAudio = document.getElementById("myaudio");

cover.addEventListener("click", () => {
    cover.classList.add("hide-cover");
    myAudio.play();
});
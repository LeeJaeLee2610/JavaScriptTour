var images = document.querySelectorAll(".wrapper .image img");
var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector(".gallery-inner img");
var close = document.querySelector(".gallery .close");

const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");

let curr = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    curr = index;
    showGallery();
  });
});

function showGallery() {
  curr == images.length - 1
    ? next.classList.add("hide")
    : next.classList.remove("hide");
  curr == 0 ? prev.classList.add("hide") : prev.classList.remove("hide");

  gallery.classList.add("show");
  galleryImg.src = images[curr].src;
}

close.addEventListener("click", () => {
  gallery.classList.remove("show");
});

prev.addEventListener("click", () => {
  curr != images.length - 1 ? curr++ : undefined;
  showGallery();
});
next.addEventListener("click", () => {
  curr != images.length - 1 ? curr++ : undefined;
  showGallery();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) gallery.classList.remove("show");
});

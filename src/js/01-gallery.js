import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const markup = galleryItems.map((item) => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
   </a>
</li>`).join("");
galleryList.insertAdjacentHTML("beforeend", markup);
const lightbox = new SimpleLightbox('.gallery a', {
   animationSpeed: 250
   });
console.log(galleryItems);

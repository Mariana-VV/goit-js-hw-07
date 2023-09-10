
import { galleryItems } from './gallery-items.js';

// Change code below this line

function markUp(galleryItems) {
    return galleryItems.map((item) =>{
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="Image description" />
        </a>
     </li>`
    })
    .join(' ');            
}

const galleryEl = document.querySelector('.gallery',);
const markup = markUp(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox(('.gallery a') ,{ 
    captionsData: document.querySelector('.gallery a').description,
    captionPosition	:'bottom',
    captionDelay	: 250,
})



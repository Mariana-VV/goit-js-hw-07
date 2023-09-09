
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

const galleryEl = document.querySelector('.gallery');
const markup = markUp(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

    
let gallery = new SimpleLightbox('.gallery a');
let event = 'show.simplelightbox' ;
gallery.on(event, function () {
//     gallery.captionsData = "jhcghgcihcgk";
//    captionDelay = 250;
//     captionPosition = 'bottom';

	gallery.next();
});


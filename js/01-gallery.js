
import { galleryItems } from './gallery-items.js';

// Change code below this line

function markUp(galleryItems) {
    return galleryItems.map((item) =>{
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="#!">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`
    })
    .join(' ');            
}

const galleryEl = document.querySelector('.gallery');
const markup = markUp(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', func);

let instance = null;

function func(event) {
    if(event.target.nodeName !== 'IMG'){
        return;
    }
   const currentEl = event.target;
   instance = basicLightbox.create(`
   <img src="${currentEl.dataset.source}">   
`)
instance.show()
}

galleryEl.addEventListener("keyup", keyPress);

function keyPress (e) {
    if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27)){
        instance.close(() => console.log('lightbox not visible anymore'))
    }
}
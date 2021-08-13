const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const list = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.js-lightbox');
const buttonClose = document.querySelector('[data-action="close-lightbox"]');
const backdop = document.querySelector('.lightbox__overlay');
const img = document.querySelector('.lightbox__image');
const arrayOriginalImj = [];

list.addEventListener('click', operationOpeningModalWindow);
backdop.addEventListener('click', clickOnBackdrop);
buttonClose.addEventListener('click', onCloseModal);



function createGalleryItemsCard(items) {
   
    return items.map(({preview,  original, description}) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const image = document.createElement('img');

      item.appendChild(link);
      link.appendChild(image);
      
      link.classList.add('gallery__link')
      link.setAttribute('href', original);

      image.classList.add('gallery__link');
      image.setAttribute('src', preview);
      image.setAttribute('data-source', original);
      image.setAttribute('alt', description);

      arrayOriginalImj.push(image)
      list.appendChild(item)
    });
};

createGalleryItemsCard(galleryItems);

function operationOpeningModalWindow(e) {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') return;
  img.src = e.target.dataset.source;
  img.alt = e.target.alt;
  
  onOpenModal();
};

function onOpenModal() {
  lightbox.classList.add('is-open');
  window.addEventListener('keydown', press);
};

function onCloseModal() {
  window.removeEventListener('keydown', press);
  lightbox.classList.remove('is-open');
  img.src = " ";
  img.alt = " ";
};

const press = ({ code }) => {
  if (code === 'Escape') {
    onCloseModal();
  } else if (code === 'ArrowLeft') {
    slider.sliderBackward()
  } else if (code === 'ArrowRight') {
    slider.sliderForward()
  } else {
    return;
  }
};

function clickOnBackdrop(e) {
  if (e.target === e.currentTarget) {
    return onCloseModal()
  }
};

const slider = {
  currentIndex: 0,
  
  sliderForward() {

    if([this.currentIndex += 1] == arrayOriginalImj.length){
      this.currentIndex = 0;
    }else{
     this.currentIndex + 1
    }
     img.src = arrayOriginalImj[this.currentIndex].dataset.source;
  },

  sliderBackward() {

    if([this.currentIndex -1] < 0 ){
      this.currentIndex = 0;
    }else{
      this.currentIndex -= 1;
    }
    img.src = arrayOriginalImj[this.currentIndex].dataset.source;
  },
  
}



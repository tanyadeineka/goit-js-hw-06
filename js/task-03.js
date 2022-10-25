const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = ({ url, alt }) => 
  `<li class="item"><img class="image" src="${url}" alt="${alt}" width="250" height="170"></li>`;

const galleryImages = images.map(createGallery).join(" ");

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", galleryImages);
galleryList.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-between");
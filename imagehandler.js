const gallery = document.getElementById('gallery');

var modalImg;
var currentIndex;

var original_images = [
    "./img/original/1.jpg",
    "./img/original/2.jpg",
    "./img/original/3.jpg",
    "./img/original/4.jpg",
    "./img/original/5.jpg",
    "./img/original/6.jpg",
    "./img/original/7.jpg",
    "./img/original/8.jpg",
    "./img/original/9.jpg",
    "./img/original/10.jpg",
    "./img/original/11.jpg",
    "./img/original/12.jpg",
    "./img/original/13.jpg",
    "./img/original/14.jpg",
    "./img/original/15.jpg",
    "./img/original/16.jpg",
    "./img/original/17.jpg",
    "./img/original/18.jpg",
    "./img/original/19.jpg",
    "./img/original/20.jpg",
    "./img/original/21.jpg",
    "./img/original/22.jpg",
    "./img/original/23.jpg",
    "./img/original/24.jpg",
];

const my_images = [
    "./img/prev/1.jpg",
    "./img/prev/2.jpg",
    "./img/prev/3.jpg",
    "./img/prev/4.jpg",
    "./img/prev/5.jpg",
    "./img/prev/6.jpg",
    "./img/prev/7.jpg",
    "./img/prev/8.jpg",
    "./img/prev/9.jpg",
    "./img/prev/10.jpg",
    "./img/prev/11.jpg",
    "./img/prev/12.jpg",
    "./img/prev/13.jpg",
    "./img/prev/14.jpg",
    "./img/prev/15.jpg",
    "./img/prev/16.jpg",
    "./img/prev/17.jpg",
    "./img/prev/18.jpg",
    "./img/prev/19.jpg",
    "./img/prev/20.jpg",
    "./img/prev/21.jpg",
    "./img/prev/22.jpg",
    "./img/prev/23.jpg",
    "./img/prev/24.jpg",
];

loadImages();

function openModal(index) {
    document.getElementById('myModal').style.display = "block";
    modalImg = document.getElementById('modalImg');
    // images = document.querySelectorAll('.gallery img');
    // modalImg.src = images[index].src;
    modalImg.src = my_images[index];
    currentIndex = index;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = my_images.length - 1;
    } else if (currentIndex >= my_images.length) {
        currentIndex = 0;
    }
    modalImg.src = my_images[currentIndex];

    // currentIndex += direction;
    // if (currentIndex < 0) {
    //     currentIndex = original_images.length - 1;
    // } else if (currentIndex >= original_images.length) {
    //     currentIndex = 0;
    // }
    // modalImg.src = original_images[currentIndex];
}

document.addEventListener('keydown', function(event) {
    if (document.getElementById('myModal').style.display === "block") {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});
        
function createGalleryItem(src, index) {
    const div = document.createElement('div');
    div.className = 'image-container';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `이미지 ${index + 1}`;
    img.loading="lazy";
    img.onclick = () => openModal(index);
    div.appendChild(img);
    return div;
}

function loadImages() {
    const button = document.getElementById('show_btn');
    const displayStyle = window.getComputedStyle(button).display;

    let show_all = false;
    if (displayStyle === 'none') {
        show_all = true;
    }
    
    my_images.forEach((src, index) => {
        if(show_all || index < 9) {
            const galleryItem = createGalleryItem(src, index);
            gallery.appendChild(galleryItem);
        } 
    });
}      

function show_more_img() {
    const button = document.getElementById('show_btn');
    button.style.display = "none";
    loadImages();
}
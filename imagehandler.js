var modalImg;
var currentIndex;
// var images;

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

function openModal(index) {
    document.getElementById('myModal').style.display = "block";
    modalImg = document.getElementById('modalImg');
    // images = document.querySelectorAll('.gallery img');
    // modalImg.src = images[index].src;
    modalImg.src = original_images[index];
    currentIndex = index;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = original_images.length - 1;
    } else if (currentIndex >= original_images.length) {
        currentIndex = 0;
    }
    modalImg.src = original_images[currentIndex];
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


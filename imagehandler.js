var modalImg;
var currentIndex;
var images;

function openModal(index) {
    document.getElementById('myModal').style.display = "block";
    modalImg = document.getElementById('modalImg');
    images = document.querySelectorAll('.gallery img');
    modalImg.src = images[index].src;
    currentIndex = index;
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.src = images[currentIndex].src;
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


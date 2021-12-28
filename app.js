
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
const links = document.getElementById('links');

toggleBtn.addEventListener('click', () => {
    navbarlinks.classList.toggle('active');
})



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


const thumbImgCont = document.getElementById('thumbnail-section');
const thumbnails = document.getElementsByClassName('thumbnail');
const fullSizeImgs = document.getElementsByClassName('mySlides');
const captionCont = document.querySelector('.caption-container');
const caption = document.getElementById('caption');
let currentImage = 0;



function reset() {
    for (let img of fullSizeImgs) {
        img.classList.remove('show');
    }
    for (let thumbs of thumbnails) {
        thumbs.firstElementChild.classList.remove('active');
    }
}
thumbImgCont.addEventListener('click', (e) => {
    reset();
    const index = [...thumbnails].indexOf(e.target.parentNode);
    fullSizeImgs[index].classList.add('show');
    caption.textContent = e.target.getAttribute('alt');
    currentImage = index;
    hiLiteThumbnail();
})

function hiLiteThumbnail() {
    let thumbnail = thumbnails[currentImage].firstElementChild;
    thumbnail.classList.add('active');
}
function goBack(e) {
    reset();
    if (e.target.classList.contains("prev") && currentImage > 0) {
        currentImage -= 1;
        fullSizeImgs[currentImage].classList.add('show');
        caption.textContent = thumbnails[currentImage].firstElementChild.getAttribute('alt');
        hiLiteThumbnail();
    } else if (e.target.classList.contains("prev") && currentImage === 0) {
        currentImage = thumbnails.length - 1;
        fullSizeImgs[currentImage].classList.add('show');
        caption.textContent = thumbnails[currentImage].firstElementChild.getAttribute('alt');
        hiLiteThumbnail();
    }
}

function goFwd(e) {
    reset();
    if (e.target.classList.contains("next") && currentImage < thumbnails.length - 1) {
        currentImage += 1;
        fullSizeImgs[currentImage].classList.add('show');
        caption.textContent = thumbnails[currentImage].firstElementChild.getAttribute('alt');
        hiLiteThumbnail();
    } else if (e.target.classList.contains("next") && currentImage === thumbnails.length - 1) {
        currentImage = 0;
        fullSizeImgs[currentImage].classList.add('show');
        caption.textContent = thumbnails[currentImage].firstElementChild.getAttribute('alt');
        hiLiteThumbnail();
    }
}

captionCont.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'A') return false;
    e.target.classList.contains("next") ? goFwd(e) : goBack(e);
});
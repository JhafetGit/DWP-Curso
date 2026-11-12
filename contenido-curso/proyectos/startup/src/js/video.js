const btnVideo = document.querySelector('#btn-video')
const overlayVideo = document.querySelector('#overlay-video ')

btnVideo.addEventListener('click', () => {
    overlayVideo.classList.add('active')
})


overlayVideo.addEventListener('click', () => {
    overlayVideo.classList.remove('active')
})
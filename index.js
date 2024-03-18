document.getElementById('generate-image').addEventListener('click', function () {
    var imageContainer = document.getElementById('image');
    var lastImage = imageContainer.lastElementChild;
    var lastImageUrl = lastImage ? lastImage.src : '';
    var lastImageIndex = lastImageUrl ? parseInt(lastImageUrl.substring(lastImageUrl.lastIndexOf('/') + 1)) : 200;
    var newImageIndex = lastImageIndex + 1;
    var newImageUrl = 'https://picsum.photos/' + newImageIndex;

    var newImage = new Image();
    newImage.src = newImageUrl;
    newImage.onload = function () {
        imageContainer.appendChild(newImage);
        window.scrollTo(0, 0);
    };
});
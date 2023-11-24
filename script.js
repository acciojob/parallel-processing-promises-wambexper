// Sample array of image URLs
const imageUrls = [
    { url: 'url1.jpg' },
    { url: 'url2.jpg' },
    { url: 'url3.jpg' },
    // Add more image URLs as needed
];

// Function to download an image given its URL
const downloadImage = (image) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
        img.src = image.url;
    });
};

// Function to download all images in parallel using Promise.all
const downloadAllImages = (imageUrls) => {
    const promises = imageUrls.map(downloadImage);
    return Promise.all(promises);
};

// Function to display the downloaded images in the output div
const displayImages = (images) => {
    const outputDiv = document.getElementById('output');
    images.forEach((img) => {
        outputDiv.appendChild(img);
    });
};

// Event listener for the download button
document.getElementById('download-images-button').addEventListener('click', () => {
    downloadAllImages(imageUrls)
        .then((images) => {
            displayImages(images);
        })
        .catch((error) => {
            console.error(error);
        });
});

//your JS code here. If required.
const imageUrls = [
  {url: 'https://via.placeholder.com/150', alt: 'Image 1'},
  {url: 'https://via.placeholder.com/150', alt: 'Image 2'},
  {url: 'https://via.placeholder.com/150', alt: 'Image 3'},
  {url: 'https://via.placeholder.com/150', alt: 'Image 4'},
  {url: 'https://via.placeholder.com/150', alt: 'Image 5'},
];

const downloadImages = async () => {
  try {
    const promises = imageUrls.map(async (image) => {
      const response = await fetch(image.url);
      if (!response.ok) {
        throw new Error(`Failed to load image's URL: ${image.url}`);
      }
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      return {objectUrl, alt: image.alt};
    });
    const imageObjects = await Promise.all(promises);
    const imagesHtml = imageObjects.map((image) => `<img src="${image.objectUrl}" alt="${image.alt}" />`).join('');
    document.getElementById('output').innerHTML = imagesHtml;
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('download-images-button').addEventListener('click', downloadImages);

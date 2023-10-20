// Helper function to apply median filtering to an image
function medianFilter(imageData, width, height) {
  const outputImageData = new ImageData(width, height);
  const radius = 1; // Adjust the radius based on the amount of noise you want to remove

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const r = [];
      const g = [];
      const b = [];

      // Gather pixel values within the specified radius
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const nx = x + dx;
          const ny = y + dy;

          if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
            const index = (ny * width + nx) * 4;
            r.push(imageData.data[index]);
            g.push(imageData.data[index + 1]);
            b.push(imageData.data[index + 2]);
          }
        }
      }

      // Sort the gathered values and select the median value
      r.sort();
      g.sort();
      b.sort();

      const index = (y * width + x) * 4;
      outputImageData.data[index] = r[Math.floor(r.length / 2)];
      outputImageData.data[index + 1] = g[Math.floor(g.length / 2)];
      outputImageData.data[index + 2] = b[Math.floor(b.length / 2)];
      outputImageData.data[index + 3] = imageData.data[index + 3]; // Alpha channel
    }
  }

  return outputImageData;
}

// function to apply preprocessImage to an image
const preprocessImage = async (imageData) => {
  // Create a canvas element and obtain a 2D rendering context
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();

  // Set the image source to the provided image data and wait for it to decode
  img.src = imageData;
  await img.decode();

  // Image Scaling: Resize the image to a width of 3000 pixels while maintaining the aspect ratio
  canvas.width = 3000;
  canvas.height = (canvas.width / img.width) * img.height;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Grayscale effect: Convert the image to grayscale
  const imageDataGrey = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < imageDataGrey.data.length; i += 4) {
    const avg =
      (imageDataGrey.data[i] +
        imageDataGrey.data[i + 1] +
        imageDataGrey.data[i + 2]) /
      3;
    imageDataGrey.data[i] = avg;
    imageDataGrey.data[i + 1] = avg;
    imageDataGrey.data[i + 2] = avg;
  }

  // Binarization: Convert the grayscale image into a binary image using a simple threshold
  for (let i = 0; i < imageDataGrey.data.length; i += 4) {
    imageDataGrey.data[i] = 255 - imageDataGrey.data[i];
    imageDataGrey.data[i + 1] = 255 - imageDataGrey.data[i + 1];
    imageDataGrey.data[i + 2] = 255 - imageDataGrey.data[i + 2];
  }

  // Noise Removal (Median Filtering): Apply a median filter to remove noise
  const filteredImageData = medianFilter(
    imageDataGrey,
    canvas.width,
    canvas.height
  );

  // Put the filtered data back on the canvas
  ctx.putImageData(filteredImageData, 0, 0);

  // Return the preprocessed image as a data URL in PNG format with 80% quality
  return canvas.toDataURL("image/png", 0.99);
};

export default preprocessImage;

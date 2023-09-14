const preprocessImage = async (imageData) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();

  img.src = imageData;
  await img.decode();

  //  Image Scaling(Resize the image)
  // To achieve a better performance of OCR, the image should have more than 300 PPI (pixel per inch).
  canvas.width = 2500;
  canvas.height = (2500 / img.width) * img.height;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Apply grayscale effect(grayscale conversion)
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

  // Binarization (simple thresholding)
  // Apply color inversion
  for (let i = 0; i < imageDataGrey.data.length; i += 4) {
    imageDataGrey.data[i] = 255 - imageDataGrey.data[i];
    imageDataGrey.data[i + 1] = 255 - imageDataGrey.data[i + 1];
    imageDataGrey.data[i + 2] = 255 - imageDataGrey.data[i + 2];
  }

  //   Noise Removal(optional)
  const DenoisingColored = 0.8;

  ctx.putImageData(imageDataGrey, 0, 0);
  return canvas.toDataURL("image/png'", DenoisingColored);
};

export default preprocessImage;

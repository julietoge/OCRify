const preprocessImage = async (imageData) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = imageData;
    await img.decode();

    // Resize the image
    canvas.width = 2500;
    canvas.height = (2500 / img.width) * img.height;

    // Apply grayscale effect
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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

    // Apply color inversion
    for (let i = 0; i < imageDataGrey.data.length; i += 4) {
      imageDataGrey.data[i] = 255 - imageDataGrey.data[i];
      imageDataGrey.data[i + 1] = 255 - imageDataGrey.data[i + 1];
      imageDataGrey.data[i + 2] = 255 - imageDataGrey.data[i + 2];
    }

    // Apply Gaussian blur (optional)
    // You can use a library like 'stackblur-canvas' for better blur effects
    // stackBlurCanvasRGBA(canvas, 0, 0, canvas.width, canvas.height, 10);

    ctx.putImageData(imageDataGrey, 0, 0);
    return canvas.toDataURL("image/*", 0.8);
     // blurARGB(image.data, canvas, 1);
    // dilate(image.data, canvas);
    // invertColors(image.data);
    // thresholdFilter(image.data, 0.4);
  };

  export default preprocessImage;
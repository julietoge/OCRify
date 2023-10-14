function ApplyGaussianFilter(imageData, width, height, radius) {
  const kernelSize = radius * 2 + 1;
  const kernel = new Array(kernelSize);
  const sigma = radius / 3.0; // Adjust the standard deviation as needed

  // Create a 1D Gaussian kernel
  for (let i = -radius; i <= radius; i++) {
    kernel[i + radius] = Math.exp(-(i * i) / (2 * sigma * sigma));
  }

  // Normalize the kernel
  const kernelSum = kernel.reduce((a, b) => a + b, 0);
  for (let i = 0; i < kernelSize; i++) {
    kernel[i] /= kernelSum;
  }

  // Clone the input image data
  const outputImageData = new Uint8ClampedArray(imageData);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0;
      let g = 0;
      let b = 0;

      for (let i = -radius; i <= radius; i++) {
        for (let j = -radius; j <= radius; j++) {
          const pixelIndex = (y + i) * width + (x + j);
          const kernelIndex = (i + radius) * kernelSize + (j + radius);
          if (pixelIndex >= 0 && pixelIndex < width * height) {
            r += imageData[pixelIndex * 4] * kernel[kernelIndex];
            g += imageData[pixelIndex * 4 + 1] * kernel[kernelIndex];
            b += imageData[pixelIndex * 4 + 2] * kernel[kernelIndex];
          }
        }
      }

      const pixelIndex = y * width + x;
      outputImageData[pixelIndex * 4] = r;
      outputImageData[pixelIndex * 4 + 1] = g;
      outputImageData[pixelIndex * 4 + 2] = b;
    }
  }

  return outputImageData;
}

export default ApplyGaussianFilter;

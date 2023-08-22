import React from "react";
{/* <script src="https://gist.github.com/codingnninja/346773f3db379796e5407a825497dc19.js"></script> */}
const preprocessImage = (canvas) => {
    const level = 0.4;
    const radius = 1;
    const ctx = canvas.getContext('2d');
    const image = ctx.getImageData(0,0,canvas.width, canvas.height);
    blurARGB(image.data, canvas, radius);
    dilate(image.data, canvas);
    invertColors(image.data);
    thresholdFilter(image.data, level);
    return image;
};

export default preprocessImage;

var imagemin = require("imagemin"),    // The imagemin module.
webp = require("imagemin-webp"),   // imagemin's WebP plugin.
outputFolder = "./img",            // Output folder
PNGImages = "./img/*.png",         // PNG images
JPGImages = "./img/*.jpg";        // JPEG images
JPEGImages = "./img/*.jpeg";        // JPEG images

module.exports  = function() {
    
    imagemin([PNGImages], outputFolder, {
        plugins: [webp({
            lossless: true // Losslessly encode images
        })]
    });
    
    imagemin([JPEGImages], outputFolder, {
        plugins: [webp({
            quality: 65 // Quality setting from 0 to 100
        })]
    });
    
    imagemin([JPGImages], outputFolder, {
        plugins: [webp({
            quality: 65 // Quality setting from 0 to 100
        })]
    });
};


module.exports.dependencies  = [ ];
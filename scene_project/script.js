// Get canvas element
const canvas = document.getElementById('myCanvas');
// Get canvas context
const ctx = canvas.getContext('2d');

// Load and draw background image
const backgroundImage = new Image();
backgroundImage.src = 'images/background_pink.png';
backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Load and draw foreground images
    const foregroundImage1 = new Image();
    foregroundImage1.src = 'images/foreground_moon.png';//moon
    foregroundImage1.onload = function () {
        ctx.drawImage(foregroundImage1, 0, 0, 150, 150);

        const foregroundImage2 = new Image();
        foregroundImage2.src = 'images/foreground_cat.png';//cat
        foregroundImage2.onload = function () {
            ctx.drawImage(foregroundImage2, 300, 405, 200, 200);

            const foregroundImage3 = new Image();
            foregroundImage3.src = 'images/foreground_plant.png';//plant
            foregroundImage3.onload = function () {
                ctx.drawImage(foregroundImage3, 400, 200, 450, 450);

                // Add text to canvas 
                ctx.font = '16px Times New Roman';
                ctx.fillStyle = 'Black';
                ctx.fillText('Zilong Li', 720, 590);
                ctx.font = '32px Times New Roman';
                ctx.fillText('Happy Cat', 300, 40);
            };
        };
    };
};
let img;

function preload() {
    // Update the path as necessary
    img = loadImage("/links/Creative Coding/andy_campbells_p5/andywarholcampbells.jpeg");
}

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(255);
    // Number of images in the grid
    let num_images_x = 8;
    let num_images_y = 4;
    // Calculate the size of each cell
    let cell_width = width / num_images_x;
    let cell_height = height / num_images_y;

    for (let i = 0; i < num_images_x; i++) {
        for (let j = 0; j < num_images_y; j++) {
            // Calculate the position of the center of each image
            let x = i * cell_width + cell_width / 2;
            let y = j * cell_height + cell_height / 2;
            
            // Mouse Y position affects image size
            let image_size = map(mouseY, 0, height, 10, 200);
            drawImage(x, y, image_size);
        }
    }
}

function drawImage(x, y, image_size) {
    image(img, x - image_size / 2, y - image_size / 2, image_size, image_size);
}

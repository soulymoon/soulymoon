let data = {
    "Germany": 170.518,
    "Italy": 24.534,
    "China": 23.256,
    "Switzerland, Liechtenstein": 17.063,
    "United States": 13.800,
    "United Kingdom": 12.414,
    "Netherlands": 11.409,
    "France": 10.984,
    "Czech Republic": 10.749,
    "Hungary": 9.240,
};

let center_x = 300, center_y = 300;  // Center of the display
let circle_radius = 180;            // Radius of the main circles
let hover_circle_radius = 40;       // Radius of the hover circles
let display_distance = 30;

function setup() {
    createCanvas(600, 600);
    noLoop();
    background("#C2DEBC");
}

function draw() {
    background("#C2DEBC");

    // Convert object keys to array and sort by the number of stays
    let sortedCountries = Object.keys(data).sort((a, b) => data[b] - data[a]);

    sortedCountries.forEach((country, i) => {
        let stays = data[country];
        let angle = map(i, 0, sortedCountries.length, 0, TWO_PI);

        // Position based on angle
        let x = center_x + cos(angle) * circle_radius;
        let y = center_y + sin(angle) * circle_radius;

        // Distance between the mouse and the circle
        let distance_to_mouse = dist(mouseX, mouseY, x, y);

        // Map the stays to a reasonable range for circle size
        let size_factor = map(stays, Math.min(...Object.values(data)), Math.max(...Object.values(data)), 20, 150);

        // Display country name and stays count when the mouse is close
        if (distance_to_mouse < display_distance) {
            fill("#D0FF03");  // Hover circle color
            noStroke();
            ellipse(x, y, hover_circle_radius, hover_circle_radius);

            fill("#A6CB00");  // Main circle color
            noStroke();
            ellipse(x, y, size_factor, size_factor);

            fill("#FF8E03");  // Text color
            noStroke();
            textSize(30);
            textAlign(CENTER, CENTER);
            text(country, x, y - 25);
            textSize(25);
            text(stays, x, y + 10);
        } else {
            fill("#FFF703");  // Main circle color when not hovered
            noStroke();
            ellipse(x, y, size_factor, size_factor);
        }
    });
}

function mouseMoved() {
    redraw();
}

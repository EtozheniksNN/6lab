var x = 0, y = 0, sx, sy, img = new Image();
img.src = "m/html5.png";

function init() {
    let cvs = document.getElementById("cvs");
    if (!cvs.getContext) alert("Ваш браузер не поддерживает тег <canvas>!");
}

function move(ev) {
    let rect = document.getElementById("cvs").getBoundingClientRect();
    x = ev.clientX - rect.left;
    y = ev.clientY - rect.top;
}

function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 256) +
        "," + Math.floor(Math.random() * 256) +
        "," + Math.floor(Math.random() * 256) + ")";
}

function press(ev) {
    let ctx = document.getElementById("cvs").getContext("2d");
    switch (ev.button) {
        case 0:
            ctx.fillStyle = randomColor();
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
            ctx.fill();
            break;
        case 1:
            ctx.drawImage(img, x - 64, y - 64, 128, 128);
            break;
        case 2:
            ctx.fillStyle = randomColor();
            ctx.fillRect(x - 20, y - 20, 40, 40);
            break;
    }
}

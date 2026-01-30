let svg = document.getElementById("canvas");
let colorPicker = document.getElementById("colorPicker");
let countDisplay = document.getElementById("dotCount");

let shapes = [];

svg.addEventListener("mousedown", drawDot);

function drawDot(event) {
    let pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;

    let svgPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    circle.setAttribute("cx", svgPoint.x);
    circle.setAttribute("cy", svgPoint.y);
    circle.setAttribute("r", 6);
    circle.setAttribute("fill", colorPicker.value);

    svg.appendChild(circle);
    shapes.push(circle);

    countDisplay.innerText = shapes.length;
}

function undo() {
    if (shapes.length > 0) {
        let last = shapes.pop();
        svg.removeChild(last);
        countDisplay.innerText = shapes.length;
    }
}
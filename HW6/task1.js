function calcArea1(width, height) {
    return width * height;
}
console.log("Area (declaration):", calcArea1(5, 10));

const calcArea2 = function(width, height) {
    return width * height;
};
console.log("Area (expression):", calcArea2(5, 10));

const calcArea3 = (width, height) => width * height;
console.log("Area (arrow):", calcArea3(5, 10));
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("black", 10, 300, 220, 10);
dibujarLinea("black", 10, 300, 420, 300);
dibujarLinea("black", 220, 10, 420, 300);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
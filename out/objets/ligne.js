///<reference path="idessinable.ts"/>
var Ligne = (function () {
    function Ligne(dessin, x, y, x2, y2) {
        this.dessin = dessin;
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
    }
    Ligne.prototype.dessiner = function () {
        $(this.dessin.NomDessin).drawLine({
            strokeStyle: '#000',
            strokeWidth: 10,
            x1: this.x,
            y1: this.y,
            x2: this.x2,
            y2: this.y2
        });
    };
    return Ligne;
}());

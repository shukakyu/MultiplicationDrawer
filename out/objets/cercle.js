var Cercle = (function () {
    function Cercle(dessin, rayon, x, y) {
        this.dessin = dessin;
        this.rayon = rayon;
        this.x = x;
        this.y = y;
    }
    Cercle.prototype.dessiner = function () {
        $(this.dessin.NomDessin).drawEllipse({
            strokeStyle: '#000',
            strokeWitdh: 5,
            x: this.x,
            y: this.y,
            width: this.rayon,
            height: this.rayon
        });
    };
    Object.defineProperty(Cercle.prototype, "Centre", {
        //Retourne le centre du cercle sous forme de tableau
        get: function () {
            var coordonnees = [" ", 0];
            coordonnees["y"] = this.y;
            coordonnees["x"] = this.x;
            return coordonnees;
        },
        enumerable: true,
        configurable: true
    });
    return Cercle;
}());

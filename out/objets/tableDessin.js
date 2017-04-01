var TableDessin = (function () {
    function TableDessin(id, largeur, hauteur) {
        this.id = id;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.initTable();
    }
    Object.defineProperty(TableDessin.prototype, "NomDessin", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    TableDessin.prototype.initTable = function () {
        $(this.id).attr("width", this.largeur);
        $(this.id).attr("height", this.hauteur);
    };
    TableDessin.prototype.ajouterForme = function (forme) {
        forme.dessiner();
    };
    return TableDessin;
}());

$(window)
    .ready(function () {
    var dessin = new TableDessin("#dessin", 500, 500);
    var ligne = new Ligne(dessin, 50, 50, 100, 150);
    var cercle = new Cercle(dessin, 100, 50, 50);
    var ligne2 = new Ligne(dessin, cercle.Centre['x'], cercle.Centre['y'], cercle.Centre['x'] + 100, cercle.Centre['y'] + 100);
    dessin.ajouterForme(ligne);
    dessin.ajouterForme(cercle);
    dessin.ajouterForme(ligne2);
    console.log(cercle.Centre);
});

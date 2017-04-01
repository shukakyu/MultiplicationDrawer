$(window)
  .ready(() => {
    let dessin: TableDessin = new TableDessin("#dessin", 500, 500);
    let ligne: Ligne = new Ligne(dessin, 50, 50, 100, 150);
    let cercle: Cercle = new Cercle(dessin, 100, 50, 50);
    let ligne2: Ligne = new Ligne(dessin, cercle.Centre['x'], cercle.Centre['y'], cercle.Centre['x']+100, cercle.Centre['y']+100);
    dessin.ajouterForme(ligne);
    dessin.ajouterForme(cercle);
    dessin.ajouterForme(ligne2);

    console.log(cercle.Centre);
		});
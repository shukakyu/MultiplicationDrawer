$(window)
  .ready(() => {
    let dessin: TableDessin = new TableDessin("#dessin", 500, 500);
    let cercle: Cercle = new Cercle(dessin, 500, 250, 250);
    let ligne2: Ligne = new Ligne(dessin, cercle.Centre['x'], cercle.Centre['y'], cercle.Centre['x'], cercle.Centre['y']+250);
    dessin.ajouterForme(cercle);
    dessin.ajouterForme(ligne2);

    console.log(cercle.Centre);
		});
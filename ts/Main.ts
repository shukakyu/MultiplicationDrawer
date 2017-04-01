$(window)
  .ready(() => {
    let listePoint: Point[] = [];
    let dessin: TableDessin = new TableDessin("#dessin", 500, 500);
    let cercle: Cercle = new Cercle(dessin, 500, 250, 250);
    let ligne2: Ligne = new Ligne(dessin, cercle.Centre['x'], cercle.Centre['y'], 40, 113);
    dessin.ajouterForme(cercle);
    dessin.ajouterForme(ligne2);
    console.log(cercle.Centre);

    let pas: number = Math.floor(cercle.Perimetre/10);

    console.log("pas : "+ pas);

    for(let i: number = 0; i < 10; i++)
    {
      let x:number = Math.floor(cercle.Centre["x"] + cercle.Rayon * Math.cos(i*pas));
      let y: number = Math.floor(cercle.Centre["y"] + cercle.Rayon * Math.sin(i*pas));
      let point: Point = new Point(x, y);
      listePoint.push(point);
    }

    for(let i: number=0; i < listePoint.length-1; i++)
    {
      let point1: Point = listePoint[i]
      let point2: Point = listePoint[i+1];

      let x : number = point1.X;
      let y: number = point1.Y;

      let x2: number = point2.X;
      let y2: number = point2.Y;

      let l1: Ligne = new Ligne(dessin, x, y, x2, y2);
      dessin.ajouterForme(l1);


    }

    console.log(listePoint);

		});
class Cercle implements IDessinable
{
	constructor(private dessin: TableDessin, private rayon: number, private x: number, private y: number)
	{
	}

	dessiner(): void
	{
		$(this.dessin.NomDessin).drawEllipse({
			strokeStyle: '#000'	,
			strokeWitdh: 5,
			x : this.x,
			y : this.y,
			width: this.rayon,
			height: this.rayon
		});
	}

	//Retourne le centre du cercle sous forme de tableau
	get Centre() : [string, number]
	{
		let coordonnees:[string, number] =[];
        coordonnees["y"] =this.y;
        coordonnees["x"] =this.x;
		return coordonnees;
	}

}
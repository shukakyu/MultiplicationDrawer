class Cercle implements IDessinable
{
    /**
	 * 
	 * @param dessin Permet de dessiner un cercle
	 * @param diametre le diametre du cercle
	 * @param x la position en y
	 * @param y la position en y
	 */
	constructor(private dessin: TableDessin, private diametre: number, private x: number, private y: number)
	{
	}

	dessiner(): void
	{
		$(this.dessin.NomDessin).drawEllipse({
			strokeStyle: '#000'	,
			strokeWitdh: 5,
			x : this.x,
			y : this.y,
			width: this.diametre,
			height: this.diametre
		});
	}

    /**
	 * Retourne le centre du cercle sous la forme d'un tableau
	 * indexé avec x et y
	 */
	get Centre() : number[]
	{
		let coordonnees: number[] = [];
        coordonnees ["y"] =this.y;
        coordonnees["x"] =this.x;
		return coordonnees;
	}

	get Diametre() : number
	{
		return this.diametre;
	}

	get Rayon() : number
	{
		return Math.floor(this.Diametre/2);
	}

	get Perimetre() : number
	{
		let res: number = this.Diametre*Math.PI;
		return Math.round(res);
	}


}
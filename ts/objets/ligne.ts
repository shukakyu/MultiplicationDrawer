///<reference path="idessinable.ts"/>

class Ligne implements IDessinable
{
    /**
	 * 
	 * @param dessin Permet de construire une ligne
	 * @param x la coordonnée x de départ
	 * @param y la coordonnée y de départ
	 * @param x2 la coordonée x de fin
	 * @param y2 la coordonnée y de fin
	 */
	constructor(private dessin: TableDessin, private x: number, private y: number,
	private x2: number, private y2: number)
	{

	}

	dessiner(): void
	{
		$(this.dessin.NomDessin).drawLine({
			strokeStyle: '#000',
			strokeWidth: 1,
			x1: this.x,
			y1: this.y,
			x2: this.x2,
			y2: this.y2
		})
	}
}
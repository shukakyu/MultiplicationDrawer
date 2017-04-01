///<reference path="idessinable.ts"/>

class Ligne implements IDessinable
{
	constructor(private dessin: TableDessin, private x: number, private y: number,
	private x2: number, private y2: number)
	{

	}

	dessiner(): void
	{
		$(this.dessin.NomDessin).drawLine({
			strokeStyle: '#000',
			strokeWidth: 10,
			x1: this.x,
			y1: this.y,
			x2: this.x2,
			y2: this.y2
		})
	}
}
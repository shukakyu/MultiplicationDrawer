class Vue 
{
    /**
	 * Permet de définir la taille de la vue et du dessin
	 * @param dessin Le canvas dans lequel le cercle sera dessiné
	 */
	constructor (private dessin: TableDessin)
	{

	}

	AjouterForme(forme: IDessinable) : void
	{
		forme.dessiner();
	}

	get Dessin() : TableDessin
	{
		return this.dessin;
	}

	get Largeur(): number
	{
		return this.Dessin.Largeur;
	}

	get Hauteur(): number
	{
		return this.Dessin.Hauteur;
	}

	Nettoyer()
	{
		$(this.Dessin.NomDessin).clearCanvas();
	}
}
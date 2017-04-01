class TableDessin
{

    /**
	 * Retourne le nom du dessin
	 */
	get NomDessin() : String
	{
		return this.id;
	}

    /**
	 *permert de construire un dessin à partir d'un canvas
	 * @param id l'id de la balise canvas
	 * @param largeur la largeur qu'on veut lui donner
	 * @param hauteur la hauteur qu'on veut lui donner
	 */
	constructor(private id: string, private largeur: number, private hauteur: number)
	{
		this.initTable();
	}

    /**
	 * Initialise la table de dessin
	 */
	initTable() : void
	{
		$(this.id).attr("width", this.largeur);
		$(this.id).attr("height", this.hauteur);
	}

    /**
	 * Permet d'ajouter une forme au dessin
	 * @param La nouvelle forme à dessiner
	 */
	ajouterForme(forme: IDessinable)
	{
		forme.dessiner();
	}
}
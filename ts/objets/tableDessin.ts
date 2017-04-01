class TableDessin
{

	get NomDessin() : String
	{
		return this.id;
	}

	constructor(private id: string, private largeur: number, private hauteur: number)
	{
		this.initTable();
	}

	initTable() : void
	{
		$(this.id).attr("width", this.largeur);
		$(this.id).attr("height", this.hauteur);
	}

	ajouterForme(forme: IDessinable)
	{
		forme.dessiner();
	}
}
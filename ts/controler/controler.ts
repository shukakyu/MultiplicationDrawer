///<reference path="../vue/vue.ts"/>

class Controler {

	private nbPoint: number;

    /**
	 * On garde le cercle dans une variable pour pouvoir
	 * accéder facilement à ses caractèristiques
	 */
	private cercle: Cercle;

	/**
	 * Cette liste permet d'indexer les points modélisés
	 * de sorte à associer un chiffre à un Point.
	 * Ca facilite le tracé pour le developpeur :)
	 */
	private listePoints: Point[] = [];

	set NbPoint(value: number) {
		this.nbPoint = value;
	}

	get NbPoint() : number
	{
		return this.nbPoint;
	}

	initCercle() {
		//Permet d'initialiser le cercle du programme
		let cercle: Cercle = new Cercle(this.vue.Dessin, this.vue.Largeur, this.vue.Largeur / 2, this.vue.Hauteur / 2);
		this.cercle = cercle;
		this.AjouterForme(cercle);
	}

	initEvenement() : void
	{
		$('#valider').click(() => {
            this.vue.Nettoyer();
			this.initCercle();
			let nb: number = $('#nbPoints').val();
			this.NbPoint = nb;
			this.genererPoint();
			this.tracerDroites();
		})
	}

	constructor(private vue: Vue) {
		this.initCercle();
		this.initEvenement();
	}

	AjouterForme(forme: IDessinable): void {
			this.vue.AjouterForme(forme);
	}

	AjouterFormeAvecDelai(forme: IDessinable)
	{
		setTimeout(() =>{
			this.AjouterForme(forme);
		}, 1000)
	}

	genererPoint() {
		for (let i: number = 0; i < this.NbPoint; i++) {
			let x: number = Math.floor(this.cercle.Centre["x"] + this.cercle.Rayon * Math.sin(2 * Math.PI / this.NbPoint * i));
			let y: number = Math.floor(this.cercle.Centre["y"] + this.cercle.Rayon * -1 * Math.cos(2 * Math.PI / this.NbPoint * i));
			let point: Point = new Point(x, y);
			this.listePoints.push(point);
		}
	}

	tracerDroites() {
		for (let i: number = 0; i < this.NbPoint; i++) {
			let point1: Point = this.listePoints[i]
			let point2: Point = this.listePoints[(i * 2) % this.NbPoint];

			//Coordonnées des deux points de la droite
			let x: number = point1.X;
			let y: number = point1.Y;

			let x2: number = point2.X;
			let y2: number = point2.Y;

            //création de la droite
			let ligne: Ligne = new Ligne(this.vue.Dessin, x, y, x2, y2);
			this.AjouterFormeAvecDelai(ligne);
		}


	}


}
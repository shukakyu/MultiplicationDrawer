///<reference path="../vue/vue.ts"/>

class Controler
{
	constructor(private vue: Vue)
	{

	}

	AjouterForme(forme : IDessinable) : void
	{
		this.vue.AjouterForme(forme);
	}
}
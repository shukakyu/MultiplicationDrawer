$(window)
  .ready(() => {
   let dessin: TableDessin= new TableDessin('#dessin', 480, 600);
   let vue: Vue = new Vue(dessin);
   let ctrl: Controler = new Controler(vue);
  });
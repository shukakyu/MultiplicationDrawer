$(window)
  .ready(() => {
   let dessin: TableDessin= new TableDessin('#dessin', 500, 500);
   let vue: Vue = new Vue(dessin);
   let ctrl: Controler = new Controler(vue);
  });
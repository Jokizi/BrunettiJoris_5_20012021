/* RÉCUPÈRE L'ENSEMBLE DES PRODUITS DE L'API:TEDDIES
===================================================*/
const myFunction = () => {
  const produits = request("http://localhost:3000/api/teddies");

  produits.then((teddies) => {
    if (teddies === "server down") {
      afficheErrorServer(); /* appel fonction de view.js */
    } else {
      teddies.forEach((teddie) => {
        load(); /* appel fonction load dans le view.js */
        afficheProduit(teddie);
      });
    }
  });
  putNumberButton(); /* appel la foncion affiche nombre produit dans le bouton panier */
};
myFunction();

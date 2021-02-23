/* RÉCUPÈRE L'ENSEMBLE DES PRODUITS DU LOCALSTORAGE
==================================================*/
const getData = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  oldData?.length &&
    oldData.forEach((pan, index) => {
      panier(pan, index);
    });
  putNumberButton(); /* appel la foncion affiche nombre produit dans le bouton panier */
  howMuch(); /* appel de la fonction création structure total prix */
  totalBasket(); /* appel de la fonction calcul prix total du panier */
  emptyBasket();
};
getData();

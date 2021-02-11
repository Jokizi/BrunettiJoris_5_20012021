const myFunction = () => {
  const produits = request("http://localhost:3000/api/teddies");
  produits.then((teddies) => {
    if (teddies === "server down") {
      afficheErrorServer(); /* appel fonction de view.js */
    } else {
      teddies.forEach((teddie) => {
        afficheProduit(teddie);
      });
    }
  });
};
myFunction();

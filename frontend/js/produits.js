/* RÉCUPÉRATION D'UN TEDDIE VIA SON "id" SUR LE SERVEUR
======================================================*/
// TEST 1 & 2
const getTeddie = () => {
  let id = new URLSearchParams(window.location.search);
  id = id.get("id");

  const oneTeddie = request(`http://localhost:3000/api/teddies/${id}`);
  oneTeddie.then((myTeddie) => {
    if (myTeddie === "server down") {
      afficheErrorServer();
    } else if (!myTeddie._id) {
      alert(
        "Ce Produit Est Indisponible"
      ); /* message alert si id pas correct */
    } else {
      load(); /* appel fonction load dans le view.js */
      ficheProduit(myTeddie); /* nom de la fonction dans le view.js */
    }
  });
  putNumberButton(); /* appel la foncion affiche nombre produit dans le bouton panier */
};
getTeddie();

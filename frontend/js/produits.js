/*const { url } = require("inspector");

const myTeddie = () => {
   // const teddieId = ._id;
    const produit = request('http://localhost:3000/api/teddies/' + url._id)
    console.log('------------------------------------');
    console.log(produit);
    console.log('------------------------------------');
}

myTeddie()*/

/* RÉCUPÉRATION D'UN TEDDIE VIA SON "id" SUR LE SERVEUR
======================================================*/
const getTeddie = () => {
    let id = new URLSearchParams(window.location.search)
    id = id.get('id')

    const oneTeddie = request(`http://localhost:3000/api/teddies/${id}`);
    oneTeddie.then((myTeddie) => {
    ficheProduit(myTeddie); /* nom de la fonction dans le view.js */
})
}
getTeddie()
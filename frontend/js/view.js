const afficheProduit = (produit) => {
    //console.log(produit.name);
    //console.log(produit.imageUrl);
    //console.log(produit.description);

    //lien avec index html
    let teddiesList = document.getElementById("teddies_list");

    // créer l'architecture html
    let teddie = document.createElement("article");
    teddie.setAttribute("class", "teddie");

    let linkProduits = document.createElement("a");
    linkProduits.setAttribute("href", "produit.html?id=" + produit._id);
    let teddieName = document.createElement("h2");

    let teddiePicture = document.createElement("img");
    teddiePicture.setAttribute("src", produit.imageUrl);
    teddiePicture.setAttribute("alt", "photo d'ours en peluche");

    let teddiePrice = document.createElement("span");
    teddiePrice.setAttribute("class", "teddie_price");

    // implémenter dans le html
    teddiesList.appendChild(teddie);
    teddie.appendChild(linkProduits);
    linkProduits.appendChild(teddieName);
    linkProduits.appendChild(teddiePicture);
    linkProduits.appendChild(teddiePrice);

    //appel des produits dans la structure
    teddieName.textContent = produit.name;
    teddiePrice.textContent = "Prix : " + produit.price / 100 + ",00" + " €";
    


}

const afficheProduit = (produit) => {
    //console.log(produit.name);
    //console.log(produit.imageUrl);
    //console.log(produit.description);

    // lien avec index.html
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

    // appel des produits dans la structure
    teddieName.textContent = produit.name;
    teddiePrice.textContent = "Prix : " + produit.price / 100 + ",00" + " €";
    


}

const ficheProduit = (myTeddie) => {
    // lien avec produit.html
    let teddieFile = document.getElementById("teddie_file");
    
    // créer l'architecture html
    let productFile = document.createElement("article");
    productFile.setAttribute("class", "product_file");
    let productName = document.createElement("h2");
    productName.setAttribute("class", "product_name");

    let productBoxPicture = document.createElement("div");
    productBoxPicture.setAttribute("class", "box_picture");
    let productPicture = document.createElement("img");
    productPicture.setAttribute("src", myTeddie.imageUrl);
    productPicture.setAttribute("alt", "photo d'ours en peluche");

    let productBoxText = document.createElement("div");
    productBoxText.setAttribute("class", "box_text");
    let productText = document.createElement("p");
    productText.setAttribute("class", "product_text");
    let productLabelColor = document.createElement("label");
    productLabelColor.setAttribute("class", "product_colors");
    productLabelColor.setAttribute("for", "color-select");
    let productSelectColor = document.createElement("select");
    productSelectColor.setAttribute("id", "select_color");
    let productLabelQuantity = document.createElement("label");
    productLabelQuantity.setAttribute("class", "product_quantity");
    productLabelQuantity.setAttribute("for", "quantity-select");
    let productSelectQuantity = document.createElement("select");
    productSelectQuantity.setAttribute("id", "select_quantity");
    let productPrice = document.createElement("span");
    productPrice.setAttribute("class", "product_price");
    let productPutBasket = document.createElement("button");
    productPutBasket.setAttribute("class", "product_basket");


    // implémenter dans le html
    teddieFile.appendChild(productFile);
    productFile.appendChild(productName);
    productFile.appendChild(productBoxPicture);
    productBoxPicture.appendChild(productPicture);
    productFile.appendChild(productBoxText);
    productBoxText.appendChild(productText);
    productBoxText.appendChild(productLabelColor);
    productBoxText.appendChild(productSelectColor);
    productBoxText.appendChild(productLabelQuantity);
    productBoxText.appendChild(productSelectQuantity);
    productBoxText.appendChild(productPrice);
    productBoxText.appendChild(productPutBasket);

    // appel des éléments dans la structure
    productName.textContent = myTeddie.name;
    productText.textContent = myTeddie.description;
    productLabelColor.textContent = "Couleurs disponibles : ";
    productSelectColor.textContent = myTeddie.colors;
    productLabelQuantity.textContent = "Quantité : ";
    //productSelectColor.textContent = myTeddie.
    productPrice.textContent = myTeddie.price;
    productPutBasket.textContent = "Ajouter au panier";
    
    myTeddie.colors.forEach((colors) => {
        let colorChoice = document.createElement("option");
        document
            .getElementById("select_color")
            .appendChild(colorChoice).innerHTML = colors;
    });

}

let quantiter = [...Array(25).keys()].map(i => i + 1); 
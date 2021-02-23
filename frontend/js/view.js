/* AFFICHER ERREUR SERVEUR SUR LES '.html'
-----------------------------------------*/
const afficheErrorServer = () => {
  alert("Serveur indisponible, site en maintenance");
};

/* RAJOUTER LA CLASSE "hidden" QUI COUPE L'AFFICHAGE DU LOADING SPINNER
----------------------------------------------------------------------*/
const load = () => {
  let spinner = document.querySelector(".loading_spinner");
  spinner.className += " hidden"; /* rajoute la classe à l'élément */
};

/* FORMATER LES PRIX DANS LA DEVISE QUE L'ON SOUHAITE
----------------------------------------------------*/
const numberFormatter = (teddiePrice) => {
  let formate = teddiePrice / 100;
  formate = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(formate);
  return formate;
};

/* AFFICHER TOUS LES PRODUITS SUR 'index.html'
=============================================*/
const afficheProduit = (produit) => {
  //console.log(produit.name);
  //console.log(produit.imageUrl);
  //console.log(produit.description);

  /* Lien avec index.html */
  let teddiesList = document.getElementById("teddies_list");

  /* Créer l'architecture html */
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

  let linkDetailsProduits = document.createElement("button");
  linkDetailsProduits.setAttribute("class", "teddie_details");

  /* Implémenter dans le html */
  teddiesList.appendChild(teddie);
  teddie.appendChild(linkProduits);
  linkProduits.appendChild(teddieName);
  linkProduits.appendChild(teddiePicture);
  linkProduits.appendChild(teddiePrice);
  linkProduits.appendChild(linkDetailsProduits);

  /* Appel des éléments dans la structure */
  teddieName.textContent = produit.name;
  teddiePrice.innerHTML = "<h3>Prix : </h3>" + numberFormatter(produit.price);
  linkDetailsProduits.innerHTML = "<p>Détails</p>";
};

/* AFFICHER UN PRODUIT SUR 'produit.html' GRÂCE À SON "id"
=========================================================*/
const ficheProduit = (myTeddie) => {
  /* Lien avec produit.html */
  let title = document.getElementById("title_product_file");

  let teddieFile = document.getElementById("teddie_file");

  /* Créer l'architecture html */
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
  productLabelColor.setAttribute("for", "select_color");
  let productSelectColor = document.createElement("select");
  productSelectColor.setAttribute("id", "select_color");

  let productBoxQuantity = document.createElement("div");
  productBoxQuantity.setAttribute("class", "box_quantity");
  let productLabelQuantity = document.createElement("label");
  productLabelQuantity.setAttribute("class", "product_quantity");
  productLabelQuantity.setAttribute("for", "quantity-select");
  let productQuantityMinus = document.createElement("input");
  productQuantityMinus.setAttribute("id", "minus");
  productQuantityMinus.setAttribute("type", "button");
  productQuantityMinus.setAttribute("value", "-");
  let productQuantityNumber = document.createElement("input");
  productQuantityNumber.setAttribute("id", "quantity-select");
  productQuantityNumber.setAttribute("type", "number");
  productQuantityNumber.setAttribute("min", 1);
  productQuantityNumber.setAttribute("max", 100);
  //productQuantityNumber.setAttribute("step", 10);
  productQuantityNumber.setAttribute("value", 1);
  let productQuantityPlus = document.createElement("input");
  productQuantityPlus.setAttribute("id", "plus");
  productQuantityPlus.setAttribute("type", "button");
  productQuantityPlus.setAttribute("value", "+");

  let productPrice = document.createElement("span");
  productPrice.setAttribute("class", "product_price");
  let productPutBasket = document.createElement("button");
  productPutBasket.setAttribute("class", "product_basket");
  productPutBasket.setAttribute("id", "ajout");
  productPutBasket.addEventListener("click", () => {
    sendLocal(myTeddie, productSelectColor);
    putNumberButton();
  });

  /* Implémenter dans le html */
  teddieFile.appendChild(productFile);
  productFile.appendChild(productName);
  productFile.appendChild(productBoxPicture);
  productBoxPicture.appendChild(productPicture);
  productFile.appendChild(productBoxText);
  productBoxText.appendChild(productText);
  productBoxText.appendChild(productLabelColor);
  productBoxText.appendChild(productSelectColor);
  productBoxText.appendChild(productBoxQuantity);
  productBoxQuantity.appendChild(productLabelQuantity);
  productBoxQuantity.appendChild(productQuantityMinus);
  productBoxQuantity.appendChild(productQuantityNumber);
  productBoxQuantity.appendChild(productQuantityPlus);
  productBoxText.appendChild(productPrice);
  productBoxText.appendChild(productPutBasket);

  /* Appel des éléments dans la structure */
  title.textContent = "Fiche Produit : " + myTeddie.name;
  productName.textContent = myTeddie.name;
  productText.innerHTML = "<h3>Description :</h3>" + myTeddie.description;
  productLabelColor.innerHTML = "<h3>Couleurs disponibles :</h3>";
  productSelectColor.textContent = myTeddie.colors;
  productLabelQuantity.innerHTML = "<h3>Quantité :</h3>";
  productPrice.innerHTML = "<h3>Prix :</h3>" + numberFormatter(myTeddie.price);
  productPutBasket.innerHTML = "Ajouter au panier";

  /* AFFICHER LES COULEURS QUI CORRESPONDENT AUX PRODUITS
    ------------------------------------------------------*/
  myTeddie.colors.forEach((colors) => {
    let colorChoice = document.createElement("option");
    document
      .getElementById("select_color")
      .appendChild(colorChoice).innerHTML = colors;
  });

  /* + ET - POUR LES INPUTS QUANTITÉ (Min: 1; Max: 100;)
  -----------------------------------------------------*/
  const productPlus = document.getElementById("plus");
  productPlus.addEventListener("click", function () {
    if (productQuantityNumber.value < 100) productQuantityNumber.value++;
  });

  const productMinus = document.getElementById("minus");
  productMinus.addEventListener("click", function () {
    if (productQuantityNumber.value > 1) productQuantityNumber.value--;
  });
};

/* ENVOYER DANS LE LOCALSTORAGE LE PRODUIT SELECTIONNÉ
-----------------------------------------------------*/
const sendLocal = (myTeddie, productSelectColor) => {
  // définir les data à récupérer
  let newData = {
    ref: myTeddie,
    couleur: productSelectColor.value,
  };

  // si rien n'est affiché au début, affiche un array vide
  if (localStorage.getItem("selection") == null) {
    localStorage.setItem("selection", "[]");
  }

  // changer les anciennes data et les remplacer par les nouvelles
  let oldData = JSON.parse(localStorage.getItem("selection"));
  oldData.push(newData);

  // sauvegarder les anciennes et les nouvelles data dans localstorage
  localStorage.setItem("selection", JSON.stringify(oldData));
};

/* AFFICHER LE PANIER SUR 'panier.html' EN LIEN AVEC LOCALSTORAGE
================================================================*/
const panier = (pan, index) => {
  /* Lien avec panier.html */
  let basket = document.getElementById("array_basket");

  /* Créer l'architecture html */
  let arrayBody = document.createElement("tbody");

  let lineBody = document.createElement("tr");
  lineBody.setAttribute("id", index);

  let elementPicture = document.createElement("td");
  let picturePlace = document.createElement("img");
  picturePlace.setAttribute("src", pan.ref.imageUrl);
  picturePlace.setAttribute("class", "picture_basket");

  let elementName = document.createElement("td");
  let namePlace = document.createElement("h2");
  namePlace.textContent = pan.ref.name;

  let elementColor = document.createElement("td");
  let colorPlace = document.createElement("span");
  colorPlace.textContent = pan.couleur;

  let elementPrice = document.createElement("td");
  let pricePlace = document.createElement("span");
  pricePlace.textContent = numberFormatter(pan.ref.price);

  let elementRemove = document.createElement("td");
  let removePlace = document.createElement("button");
  removePlace.innerHTML = "Supprimer";
  removePlace.addEventListener("click", (e) => {
    deleteOneProduct(index);
    let productLine = document.getElementById(index);
    productLine.parentNode.removeChild(productLine);
    totalBasket(); /* affiche la soustraction prix du produit supprimé */
    putNumberButton(); /* affiche le nombre de produits restant */
    emptyBasket();
  });

  /* Implémenter dans le html */
  basket.appendChild(arrayBody);
  arrayBody.appendChild(lineBody);

  lineBody.appendChild(elementPicture);
  elementPicture.appendChild(picturePlace);

  lineBody.appendChild(elementName);
  elementName.appendChild(namePlace);

  lineBody.appendChild(elementColor);
  elementColor.appendChild(colorPlace);

  lineBody.appendChild(elementPrice);
  elementPrice.appendChild(pricePlace);

  lineBody.appendChild(elementRemove);
  elementRemove.appendChild(removePlace);
};

/* SUPPRIMER UN PRODUIT DU PANIER
--------------------------------*/
const deleteOneProduct = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  oldData.splice(0, 1); /* supprime un élément du array à partir de l'index 0 */
  /*localStorage.clear();*/
  localStorage.setItem("selection", JSON.stringify(oldData));
};

/* CREER LA DIV QUI ACCUEIL LE PRIX TOTAL DU PANIER
==================================================*/
const howMuch = () => {
  let totalPrice = document.getElementById("your_basket");

  let divTotalPrice = document.createElement("div");
  divTotalPrice.setAttribute("id", "div_total");

  let titleTotalPrice = document.createElement("span");
  titleTotalPrice.textContent = "Total: ";

  let numberTotalPrice = document.createElement("span");
  numberTotalPrice.setAttribute("id", "result_price");

  totalPrice.appendChild(divTotalPrice);
  totalPrice.appendChild(titleTotalPrice);
  totalPrice.appendChild(numberTotalPrice);
};

/* CALCULER LE PRIX TOTAL DU PANIER 
----------------------------------*/
const totalBasket = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  let sommeTotal = 0;
  let result = document.getElementById("result_price");

  oldData?.length &&
    oldData.forEach((pan) => {
      sommeTotal += pan.ref.price;
    });
  result.innerHTML = numberFormatter(sommeTotal);
};

/* ENVOIE LE NOMBRE DE PRODUITS AFFICHÉ DANS LE PANIER
-----------------------------------------------------*/
const putNumberButton = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  let numberButton = document.getElementById("number_button");
  numberButton.innerHTML = oldData?.length ? oldData.length : 0;
  /* affiche le 0 si le array vide du localstorage existe */
};

/* AFFICHER PANIER VIDE SI LOCALSTORAGE EST VIDE OU INEXISTANT */
const emptyBasket = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  if (oldData?.length == 0 || oldData?.length == null) {
    let mainBasket = document.getElementById("main_basket");
    let articleBasket = document.getElementById("your_basket");
    articleBasket.style.display = "none";
    let titleEmptyBasket = document.createElement("h1");
    titleEmptyBasket.textContent = "Votre panier est vide";
    mainBasket.appendChild(titleEmptyBasket);
  }
};

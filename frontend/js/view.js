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
// TEST 1 & 2
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
    alert("Ce produit a été ajouté à votre panier");
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
// TEST 3
const sendLocal = (myTeddie, productSelectColor) => {
  // création id pour chaque produit du local storage
  let id = Math.floor((1 + Math.random()) * 0x1000)
    .toString(16) // hexadecimal
    .substring(1);
  // définir les data à récupérer
  let newData = {
    ref: myTeddie,
    couleur: productSelectColor.value,
    uniqueId: id,
  };

  // si rien n'est affiché au début, affiche un array vide
  console.log("--------------selection----------------------");
  console.log(localStorage.getItem("selection"));
  console.log("------------------------------------");
  if (localStorage.getItem("selection") === null) {
    localStorage.setItem("selection", "[]");
  }

  // changer les anciennes data et les remplacer par les nouvelles
  let oldData = JSON.parse(localStorage.getItem("selection"));
  console.log("--------------olddata----------------------");
  console.log(oldData);
  console.log("------------------------------------");
  oldData.push(newData);

  // sauvegarder les anciennes et les nouvelles data dans localstorage
  localStorage.setItem("selection", JSON.stringify(oldData));
};

/* AFFICHER LE PANIER SUR 'panier.html' EN LIEN AVEC LOCALSTORAGE
================================================================*/
// TEST 4
const panier = (pan) => {
  // création d'une constante qui récupère l'unique id
  const idLine = pan.uniqueId;
  /* Lien avec panier.html */
  let basket = document.getElementById("array_basket");

  /* Créer l'architecture html */
  let arrayBody = document.createElement("tbody");

  let lineBody = document.createElement("tr");
  lineBody.setAttribute("id", idLine);
  lineBody.setAttribute("class", "line_array");

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
  removePlace.setAttribute("class", "remove_one");
  removePlace.innerHTML = "Supprimer";
  removePlace.addEventListener("click", () => {
    deleteOneProduct(pan.uniqueId);
    console.log("------------------------------------");
    console.log(pan.uniqueId);
    console.log("------------------------------------");
    let productLine = document.getElementById(idLine);
    productLine.parentNode.removeChild(productLine);
    totalBasket(); /* affiche la soustraction prix du produit supprimé */
    putNumberButton(); /* affiche le nombre de produits restant */
    emptyBasket(); /* affiche le panier est vide si c'est le cas */
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
const deleteOneProduct = (uniqueId) => {
  let oldData = JSON.parse(localStorage.getItem("selection"));

  let newOlData = oldData.filter((search) => search.uniqueId !== uniqueId);
  console.log("------------------------------------");
  console.log(uniqueId);
  console.log("------------------------------------");

  /* oldData.splice(index, 1); */

  localStorage.setItem("selection", JSON.stringify(newOlData));
};

/* CREER LA DIV QUI ACCUEIL LE PRIX TOTAL DU PANIER ET LA SUPPRESSION DU PANIER
==============================================================================*/
// TEST 5
const howMuch = () => {
  let totalPrice = document.getElementById("your_basket");

  let divTotalPrice = document.createElement("div");
  divTotalPrice.setAttribute("id", "div_total");

  let titleTotalPrice = document.createElement("span");
  titleTotalPrice.textContent = "Total: ";

  let numberTotalPrice = document.createElement("span");
  numberTotalPrice.setAttribute("id", "result_price");

  /* BOUTON SUPPRIMER PANIER */
  let deleteAll = document.createElement("button");
  deleteAll.setAttribute("class", "remove_all");
  deleteAll.innerHTML = "Supprimer Panier";
  deleteAll.addEventListener("click", () => {
    localStorage.clear(); /* supprime le localstorage au moment du click */
    putNumberButton(); /* affiche le nombre de produits restant */
    emptyBasket(); /* affiche votre panier est vide */
  });

  totalPrice.appendChild(divTotalPrice);
  divTotalPrice.appendChild(titleTotalPrice);
  divTotalPrice.appendChild(numberTotalPrice);
  divTotalPrice.appendChild(deleteAll);
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

/* ENVOIE DANS LE BOUTON PANIER LE NOMBRE DE PRODUITS SELECTIONNÉ DANS LE PANIER
-------------------------------------------------------------------------------*/
// TEST 10
const putNumberButton = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  let numberButton = document.getElementById("number_button");
  numberButton.innerHTML = oldData?.length ? oldData.length : 0;
  /* affiche 0 dans le bouton si le array vide du localstorage existe */
};

/* AFFICHER LE PANIER EST VIDE SI LOCALSTORAGE EST VIDE OU INEXISTANT
--------------------------------------------------------------------*/
// TEST 8
const emptyBasket = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  /* si la longueur du array est = à 0 ou null */
  if (oldData?.length == 0 || oldData?.length == null) {
    let mainBasket = document.getElementById("main_basket");
    let articleBasket = document.getElementById("your_basket");
    articleBasket.style.display = "none";
    let sectionForms = document.getElementById("section_forms");
    sectionForms.style.display = "none";
    let titleEmptyBasket = document.createElement("h1");
    titleEmptyBasket.textContent = "Votre panier est vide";
    mainBasket.appendChild(titleEmptyBasket);
  }
};

/*==================FORMULAIRE===========================*/

/* RÉGEX INPUTS FORMULAIRE
-------------------------*/
let checkName = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
let checkAdress = /^([a-zA-Z0-9 _-]+)$/;
let checkCity = /^[a-zA-Z\u0080-\u024F.]+((?:[ -.|'])[a-zA-Z\u0080-\u024F]+)*$/;
let checkEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

/* INPUT SUBMIT "VALIDER LA COMMANDE"
------------------------------------*/
// TEST 7
const orderForms = document.forms["order_forms"]; // lien avec le formulaire
console.log("------------------------------------");
console.log(orderForms);
console.log("------------------------------------");

if (orderForms) {
  orderForms.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = this.document.getElementsByTagName("input");
    let bigErrorInput = document.getElementById("big_error");

    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        bigErrorInput.innerHTML = "Veuillez renseigner tous les champs";
        bigErrorInput.style.color = "red";
        return false;
      } else {
        bigErrorInput.innerHTML = "";
        alert("Vos informations sont envoyés");
        let contact = {
          firstName: inputs["firstName"].value,
          lastName: inputs["lastName"].value,
          address: inputs["adress"].value,
          city: inputs["city"].value,
          email: inputs["email"].value,
        };
        send(contact);
        return true;
      }
    }
  });
}

const send = (contact) => {
  let oldData = JSON.parse(localStorage.getItem("selection"));

  console.log("-------------oldDAAAAA406-----------------------");
  console.log(oldData);
  console.log("------------------------------------");
  let products = [];
  oldData.forEach((product) => {
    products.push(product.ref._id);
  });
  let data = {
    contact,
    products,
  };
  methodPost(data);
};

/* CHECK REGEX DE TOUS LES INPUTS VIA LA FACTORISATION
-----------------------------------------------------*/
// TEST 6
const everyInputsCheck = (
  event,
  element,
  errorElement,
  errorMessage,
  checkedElement
) => {
  event.preventDefault();
  let elementInput = this.document.getElementById(element);
  let errorInput = document.getElementById(errorElement);

  //let resultCheckLastName = checkName.test(lastNameInput.value);
  if (!checkedElement.test(elementInput.value.trim())) {
    errorInput.innerHTML = errorMessage;
    errorInput.style.color = "blue";
  } else {
    errorInput.innerHTML = "";
  }
};

/* ASSIGNATION DE LA FONCTION CHECK REGEX À L'INPUT CONCERNÉ
-----------------------------------------------------------*/
if (orderForms) {
  orderForms["lastName"].addEventListener("input", (e) => {
    everyInputsCheck(
      e,
      "last_name",
      "error_last_name",
      "Renseigner le nom correctement",
      checkName
    );
  });
  /* ASSIGNATION DE LA FONCTION CHECK REGEX À L'INPUT CONCERNÉ
-----------------------------------------------------------*/
  orderForms["firstName"].addEventListener("input", (e) => {
    everyInputsCheck(
      e,
      "first_name",
      "error_first_name",
      "Renseigner le prénom correctement",
      checkName
    );
  });

  /* ASSIGNATION DE LA FONCTION CHECK REGEX À L'INPUT CONCERNÉ
-----------------------------------------------------------*/
  orderForms["adress"].addEventListener("input", (e) => {
    everyInputsCheck(
      e,
      "adress",
      "error_adress",
      "Renseigner l'adresse correctement",
      checkAdress
    );
  });

  /* ASSIGNATION DE LA FONCTION CHECK REGEX À L'INPUT CONCERNÉ
-----------------------------------------------------------*/
  orderForms["city"].addEventListener("input", (e) => {
    everyInputsCheck(
      e,
      "city",
      "error_city",
      "Renseigner la ville correctement",
      checkCity
    );
  });

  /* ASSIGNATION DE LA FONCTION CHECK REGEX À L'INPUT CONCERNÉ
-----------------------------------------------------------*/
  orderForms["email"].addEventListener("input", (e) => {
    everyInputsCheck(
      e,
      "email",
      "error_email",
      "Renseigner une adresse mail valide",
      checkEmail
    );
  });
}

const yourOrder = (product) => {
  /* Lien avec confirmation.html */

  let orderTable = document.getElementById("array_order");

  /* Créer l'architecture html */

  let orderLineBody = document.createElement("tr");
  orderLineBody.setAttribute("class", "line_array");

  let elementOrderPicture = document.createElement("td");
  let orderPicturePlace = document.createElement("img");
  orderPicturePlace.setAttribute("src", product.imageUrl);
  orderPicturePlace.setAttribute("class", "order_picture");

  let elementOrderName = document.createElement("td");
  let orderNamePlace = document.createElement("h2");
  orderNamePlace.textContent = product.name;

  let elementOrderColor = document.createElement("td");
  let orderColorPlace = document.createElement("span");
  orderColorPlace.textContent = product.couleur;

  let elementOrderPrice = document.createElement("td");
  let orderPricePlace = document.createElement("span");
  orderPricePlace.textContent = numberFormatter(product.price);

  /* Implémenter dans le html */
  orderTable.appendChild(orderLineBody);

  orderLineBody.appendChild(elementOrderPicture);
  elementOrderPicture.appendChild(orderPicturePlace);

  orderLineBody.appendChild(elementOrderName);
  elementOrderName.appendChild(orderNamePlace);

  orderLineBody.appendChild(elementOrderColor);
  elementOrderColor.appendChild(orderColorPlace);

  orderLineBody.appendChild(elementOrderPrice);
  elementOrderPrice.appendChild(orderPricePlace);
};

/* Injecter l'order Id dans le span pour la confirmation de commande
-------------------------------------------------------------------*/
const orderId = (newLocalStorage) => {
  const orderReference = document.getElementById("order_reference");
  orderReference.textContent = newLocalStorage.orderId;
  orderReference.style.color = "blue";
};

const howMuchOrder = () => {
  let totalPriceOrder = document.getElementById("order_products");

  let divTotalPriceOrder = document.createElement("div");
  divTotalPriceOrder.setAttribute("id", "div_total_order");

  let titleTotalPriceOrder = document.createElement("span");
  titleTotalPriceOrder.textContent = "Total: ";

  let numberTotalPriceOrder = document.createElement("span");
  numberTotalPriceOrder.setAttribute("id", "result_price_order");

  totalPriceOrder.appendChild(divTotalPriceOrder);
  divTotalPriceOrder.appendChild(titleTotalPriceOrder);
  divTotalPriceOrder.appendChild(numberTotalPriceOrder);
};

const totalOrder = (newLocalStorage) => {
  let sommeOrder = 0;
  let resultOrder = document.getElementById("result_price_order");

  newLocalStorage.products.forEach((pan) => {
    sommeOrder += pan.price;
  });
  resultOrder.innerHTML = numberFormatter(sommeOrder);
};

const productsOrderSelect = () => {
  let newLocalStorage = JSON.parse(localStorage.getItem("apiResponse"));
  if (localStorage.getItem("apiResponse") === null) {
    alert("Merci pour votre commande");
    window.location = "./index.html";
  } else if (undefined === newLocalStorage?.products) {
    alert("Cette page n'existe pas");
  } else if (localStorage.getItem("apiResponse") !== null) {
    newLocalStorage.products.forEach((product) => {
      yourOrder(product);
    });
    localStorage.removeItem("apiResponse");
    localStorage.removeItem("selection");
  }
};
productsOrderSelect();

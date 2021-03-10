const productsOrderSelect = () => {
  let newLocalStorage = JSON.parse(localStorage.getItem("apiResponse"));
  let local = JSON.parse(localStorage.getItem("selection"));
  if (local === null) {
    alert("Merci pour votre commande");
    window.location = "./index.html";
  } else if (localStorage.getItem("apiResponse") !== null) {
    newLocalStorage.products.forEach((product) => {
      yourOrder(product);
    });
    localStorage.removeItem("apiResponse");
    localStorage.removeItem("selection");
  } else if (undefined === newLocalStorage?.products) {
    alert("Cette page n'existe pas");
    window.location = "./index.html";
  }
  howMuchOrder();
  totalOrder(newLocalStorage);
  orderId(newLocalStorage);
};
productsOrderSelect();

const getData = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  oldData?.length &&
    oldData.forEach((pan, index) => {
      panier(pan, index);
    });
  howMuch();
  totalBasket(); /* appel de la fonction prix total du panier */
};
getData();

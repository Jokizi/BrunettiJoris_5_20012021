const getData = () => {
  let oldData = JSON.parse(localStorage.getItem("selection"));
  oldData?.length &&
    oldData.forEach((pan, index) => {
      panier(pan, index);
    });
};
getData();

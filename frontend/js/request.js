/* Promesse
==========*/
const request = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (errorServer) {
    return "server down";
  }
};

/* Envoi des données du formulaire et de la commande dans un nouveau localStorage
================================================================================*/
// TEST 7
const methodPost = (data) => {
  console.log("------data------------------------------");
  console.log(data);
  console.log("------------------------------------");
  const requestOrder = fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    requestOrder.then((response) => {
      const ress = response.json();
      ress.then((notreResultat) => {
        console.log("----------------resultat--------------------");
        console.log(notreResultat);
        console.log("------------------------------------");
        localStorage.setItem("apiResponse", JSON.stringify(notreResultat));
      });

      localStorage.setItem("selection", JSON.stringify([]));

      window.location = "./confirmation.html";
    });
  } catch (error) {
    console.log("------------------------------------");
    console.log(error);
    console.log("------------------------------------");
  }
};

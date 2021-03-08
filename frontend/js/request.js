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

const methodPost = (data) => {
  console.log("------data------------------------------");
  console.log(data);
  console.log("------------------------------------");
  const request2 = fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    request2.then((response) => {
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

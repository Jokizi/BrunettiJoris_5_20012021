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

const myTeddie = () => {
    const teddieId = '5be9c8541c9d440000665243';
    const produit = request('http://localhost:3000/api/teddies/' + teddieId)
    console.log('------------------------------------');
    console.log(produit);
    console.log('------------------------------------');
}

myTeddie()
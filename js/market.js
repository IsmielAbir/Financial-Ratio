document.getElementById('calculate-liq').addEventListener('click', function() {

    const marketField = document.getElementById('market');
    const marketValue = marketField.value;
    marketField.value = '';
    const market = parseFloat(marketValue);


    const earnField = document.getElementById('earn');
    const earnValue = earnField.value;
    earnField.value = '';
    const earn = parseFloat(earnValue);



    const bookField = document.getElementById('book');
    const bookValue = bookField.value;
    bookField.value = '';
    const book = parseFloat(bookValue);


    const priceRatio = document.getElementById('price');
    const martketRatio = document.getElementById('market1');


    const price = market / earn;
    const marketR = market / book;

    priceRatio.value = price;
    martketRatio.value = marketR;

})

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('price').value = '';
    document.getElementById('market1').value = '';

})
document.getElementById('calculate-liq').addEventListener('click', function() {


    const liablitiesField = document.getElementById('liablities');
    const liablitiesValue = liablitiesField.value;
    liablitiesField.value = '';
    const liablity = parseFloat(liablitiesValue);



    const assetField = document.getElementById('assets');
    const assetValue = assetField.value;
    assetField.value = '';
    const asset = parseFloat(assetValue);


    const incomeField = document.getElementById('income');
    const incomeValue = incomeField.value;
    incomeField.value = '';
    const income = parseFloat(incomeValue);


    const chargeField = document.getElementById('charge');
    const chargeValue = chargeField.value;
    chargeField.value = '';
    const charge = parseFloat(chargeValue);




    const paymentField = document.getElementById('payment');
    const paymentValue = paymentField.value;
    paymentField.value = '';
    const payment = parseFloat(paymentValue);


    const fundField = document.getElementById('fund');
    const fundValue = fundField.value;
    fundField.value = '';
    const fund = parseFloat(fundValue);


    const taxField = document.getElementById('tax');
    const taxValue = taxField.value;
    taxField.value = '';
    const tax = parseFloat(taxValue);


    const debtRatio = document.getElementById('debt');
    const timeRatio = document.getElementById('time');
    const fixedRatio = document.getElementById('fixed');

    const debtR = liablity / asset;
    const timeR = income / charge;
    const fixedRa = (income + payment) / (charge + payment + (fund / (1 - tax)))

    debtRatio.value = debtR;
    timeRatio.value = timeR;
    fixedRatio.value = fixedRa;

})

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('debt').value = '';
    document.getElementById('time').value = '';
    document.getElementById('fixed').value = '';

})
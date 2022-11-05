document.getElementById('calculate-liq').addEventListener('click', function() {

    const assetField = document.getElementById('assets');
    const assetValue = assetField.value;
    assetField.value = '';
    const asset = parseFloat(assetValue);

    const incomeField = document.getElementById('income');
    const incomeValue = incomeField.value;
    incomeField.value = '';
    const income = parseFloat(incomeValue);

    const salesField = document.getElementById('sales');
    const salesValue = salesField.value;
    salesField.value = '';
    const sale = parseFloat(salesValue);


    const commonField = document.getElementById('common');
    const commonValue = commonField.value;
    commonField.value = '';
    const common = parseFloat(commonValue);


    const preField = document.getElementById('pre');
    const preValue = preField.value;
    preField.value = '';
    const pre = parseFloat(preValue);


    const netRatio = document.getElementById('net');
    const roaRatio = document.getElementById('roa');
    const roeRatio = document.getElementById('roe');


    const net = income / sale;
    const roa = income / asset;
    const roe = (income - pre) / common;


    netRatio.value = net;
    roaRatio.value = roa;
    roeRatio.value = roe;



})


document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('net').value = '';
    document.getElementById('roa').value = '';
    document.getElementById('roe').value = '';

})
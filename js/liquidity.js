document.getElementById('calculate-liq').addEventListener('click', function() {

    const assetField = document.getElementById('assets');
    const assetValue = assetField.value;
    assetField.value = '';
    const asset = parseFloat(assetValue);


    const liablitiesField = document.getElementById('liablities');
    const liablitiesValue = liablitiesField.value;
    liablitiesField.value = '';
    const liablity = parseFloat(liablitiesValue);

    const inventoryField = document.getElementById('inven');
    const inventoryValue = inventoryField.value;
    inventoryField.value = '';
    inventory = parseFloat(inventoryValue);


    const cashField = document.getElementById('cash');
    const cashValue = cashField.value;
    cashField.value = '';
    const cashTotal = parseFloat(cashValue);


    const cashEquField = document.getElementById('cashEqu');
    const cashEquValue = cashEquField.value;
    cashEquField.value = '';
    const cashEquavelent = parseFloat(cashEquValue);


    const currentRatio = document.getElementById('ratio');
    const quickRatio = document.getElementById('quick');
    const cashRatio = document.getElementById('cashR');
    const workingRatio = document.getElementById('working');


    const ratioValue = asset / liablity;
    const quick = (asset - inventory) / liablity;
    const cashRa = (cashTotal + cashEquavelent) / liablity;
    const workingRa = asset - liablity;


    currentRatio.value = ratioValue;
    quickRatio.value = quick;
    cashRatio.value = cashRa;
    workingRatio.value = workingRa;

})

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('ratio').value = '';
    document.getElementById('quick').value = '';
    document.getElementById('cashR').value = '';
    document.getElementById('working').value = '';

})
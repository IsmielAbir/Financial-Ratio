document.getElementById('calculate2').addEventListener('click', function() {

    const operatingCostField = document.getElementById('cost');
    const operatingCostValue = operatingCostField.value;
    operatingCostField.value = '';
    const operatingCost = parseFloat(operatingCostValue)


    const inventoryField = document.getElementById('invent');
    const inventoryValue = inventoryField.value;
    inventoryField.value = '';
    const inventory = parseFloat(inventoryValue);


    const accountsField = document.getElementById('accounts');
    const accountsValue = accountsField.value;
    accountsField.value = '';
    const account = parseFloat(accountsValue);


    const averageField = document.getElementById('average');
    const averageValue = averageField.value;
    averageField.value = '';
    const averageT = parseFloat(averageValue);


    const salesField = document.getElementById('sales');
    const salesValue = salesField.value;
    salesField.value = '';
    const sale = parseFloat(salesValue);


    const fixedField = document.getElementById('fixed');
    const fixedValue = fixedField.value;
    fixedField.value = '';
    const fixedN = parseFloat(fixedValue);



    const totalField = document.getElementById('total');
    const totalValue = totalField.value;
    totalField.value = '';
    const totalN = parseFloat(totalValue);


    const inventoryRatio = document.getElementById('inventoryR');
    const fixedRatio = document.getElementById('fixedR');
    const totalRatio = document.getElementById('totalR');
    const DSORatio = document.getElementById('DSOR');


    const inventoryT = operatingCost / inventory;
    const fixedAssets = sale / fixedN;
    const totalAsset = sale / totalN;
    const DSOsale = account / (averageT / 360);


    inventoryRatio.value = inventoryT;
    fixedRatio.value = fixedAssets;
    totalRatio.value = totalAsset;
    DSORatio.value = DSOsale;


})

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('inventoryR').value = '';
    document.getElementById('fixedR').value = '';
    document.getElementById('totalR').value = '';
    document.getElementById('DSOR').value = '';


})
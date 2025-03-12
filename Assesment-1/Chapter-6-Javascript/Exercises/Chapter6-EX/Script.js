document.addEventListener('DOMContentLoaded', function () {
    
    const fuelPriceInput = document.getElementById('fuel-price');
    const fuelAmountInput = document.getElementById('fuel-Liter');
    const totalOutput = document.getElementById('fuel-total');
    const calculateButton = document.getElementById('calculate-price');

   
    calculateButton.addEventListener('click', function () {
        
        const pricePerLiter = parseFloat(fuelPriceInput.value);
        const litersPurchased = parseFloat(fuelAmountInput.value);

        
        if (!isNaN(pricePerLiter) && !isNaN(litersPurchased)) {
           
            const totalCost = pricePerLiter * litersPurchased;

            
            totalOutput.textContent = totalCost.toFixed(2);
        } else {
            
            totalOutput.textContent = "0.00";
            alert("Please enter valid numbers for both fields.");
        }
    });
});

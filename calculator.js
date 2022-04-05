window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initialValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(initialValues));

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  for(input in values){
    if(isNaN(values[input])){
      throw new Error('Invalid Input! Please enter a number');
    }
  }
  let amount = values.amount;
  let months = values.years * 12;
  let monthlyRate = values.rate / 1200;

  let monthlyPayment = (amount * monthlyRate) / (1 - (Math.pow((1+monthlyRate), (-1 * months))));
  let roundedMonthlyPayment = Math.round(monthlyPayment*100)/100;

  return roundedMonthlyPayment;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let paymentSpan = document.getElementById("monthly-payment");
  paymentSpan.innerText = monthly;
}

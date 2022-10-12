const loanAmount = document.querySelector("#amount");
const interestRate = document.querySelector("#interest-rate");
const monthsToPay = document.querySelector("#months");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");
const errorMessage = document.querySelector("#error");

errorMessage.style.display = "none";
output.style.display = "none";

function calculate() {
    if (Number(loanAmount.value) > 0 && Number(interestRate.value) >= 0 && Number(monthsToPay.value) > 0) {
        let interest = (loanAmount.value * (interestRate.value * 0.01)) / monthsToPay.value;
        let monthlyPayment = ((loanAmount.value / monthsToPay.value) + interest).toFixed(2);
        monthlyPayment = monthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row
        output.style.display = "block";
        output.innerHTML = `Monthly Payment = RS ${monthlyPayment}`;
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter all required fields correctly!";
        output.style.display = "none";
    }
}

btnCalculate.addEventListener("click", calculate);
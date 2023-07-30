let form0 = document.getElementById("form");
let form1 = document.getElementById("form1");


form0.addEventListener("submit", (event) => {
    event.preventDefault();
});
form1.addEventListener("submit", (event) => {
    event.preventDefault();
});

//emergency alert
function AlertMe() {
    alert("Emergency Alert has been sent to near by hospitals");
}

//BMI calculator
function calculate() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);
    var bmi;
    if (age >= 60) {
        bmi = weight / Math.pow(height / 100, 2.5);
    } else {
        bmi = weight / Math.pow(height / 100, 2);
    }
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    document.getElementById("result").value =
        bmi.toFixed(2) + " (" + category + ")";
}

//TODOLIST
document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("naam").value;
    const phoneNumber = document.getElementById("PhoneNumber").value;
    const slot = document.getElementById("slot").value;
    const type = document.getElementById("type").value;
    const address = document.getElementById("msg").value;

    // Create a string with the form data
    const formDataString = `
        <strong>Name:</strong> ${name}<br>
        <strong>Phone Number:</strong> ${phoneNumber}<br>
        <strong>Time Slot:</strong> ${slot}<br>
        <strong>Type of Visit:</strong> ${type}<br>
        <strong>Address:</strong> ${address}<br>
        <hr/>
    `;


    document.getElementById("naam").value="";
    document.getElementById("PhoneNumber").value="";
    document.getElementById("slot").value="";
    document.getElementById("type").value="";
    document.getElementById("msg").value="";


    // Display the form data below the form
    const submissionDataDiv = document.getElementById("submissionData");
    submissionDataDiv.innerHTML += formDataString;
});

const handleSubmit=()=>{
    console.loh("hhiiiii")
}
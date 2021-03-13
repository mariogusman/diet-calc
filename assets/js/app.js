//  Defining variables being used in the code
let gender;
let weight;
let height;
let age;
let tdee;
let kcalLoss;
let kcalGain;

//  Calculates TDEE based on user input
function calcTDEE(){
    gender = document.getElementById("gender").value;
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
    age = parseInt(document.getElementById("age").value);

    if (gender == "male") { //if user is male, will execute male formula, update variables and call printResults function
        tdee = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));

        kcalMaintain = tdee;
        kcalLoss = tdee * 0.9;
        kcalGain = tdee * 1.1;
        printResults();
        
    } else if (gender == "female") { //if user is female, will execute female formula, update variables and call printResults function
        tdee = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));

        kcalMaintain = tdee;
        kcalLoss = tdee * 0.9;
        kcalGain = tdee * 1.1;
        printResults();
    } else {
        alert("Please provide all the details. If you are unsure on how to respond, check our FAQ and if you encounter an issue please contact us.")
        
    }
    
}

function printResults(){ //Prints results to HTML while truncating numbers to improve readability

    // Removes Bootstrap class ".d-none" to make the div visible
    // Based on explanation given here → https://www.w3schools.com/howto/howto_js_remove_class.asp
    let results = document.getElementById("results-list");
    results.classList.remove("d-none");

    // Now that div is visible, prints the results into the span tags
    document.getElementById('dailyMaintain').innerHTML = Math.trunc(kcalMaintain);
    document.getElementById('dailyLose').innerHTML = Math.trunc(kcalLoss);
    document.getElementById('dailyGain').innerHTML = Math.trunc(kcalGain);
}

// Formula for Men: 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
// Formula for Women: 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
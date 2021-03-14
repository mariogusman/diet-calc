//  Defining variables being used in the code
let gender;
let weight;
let height;
let age;
let tdee;
let kcalLoss;
let kcalGain;
let activityLevel;

//  Calculates BMR based on user input
function calcBMR(){
    // Fix to Form submitting and refreshing the page - from "JavaJudt" https://stackoverflow.com/a/53597562
    $(document).on('submit', '#personalInfo', function(event){
        event.preventDefault();
    });

    // End of Form Submit fix
    
    gender = document.getElementById("gender").value;
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
    age = parseInt(document.getElementById("age").value);
    activityLevel = document.getElementById("actLevel").value;
    
    

    if (gender == "male") { //if user is male, will execute male formula, update variables and call printResults function
        bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));

        dailyBMR = bmr;
        dailyTDEE = bmr * activityLevel;
        kcalLoss = dailyTDEE * 0.8;
        kcalGain = dailyTDEE * 1.1;
        console.log("BMR: " + bmr);
        printResults();
        
    } else if (gender == "female") { //if user is female, will execute female formula, update variables and call printResults function
        bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));

        dailyBMR = bmr;
        dailyTDEE = bmr * activityLevel;
        kcalLoss = dailyTDEE * 0.8;
        kcalGain = dailyTDEE * 1.1;
        console.log("BMR: " + bmr);
        printResults();
    } else {
        alert("Please provide all the details. If you are unsure on how to respond, check our FAQ and if you encounter an issue please contact us.");
    }
};

function printResults(){ //Prints results to HTML while truncating numbers to improve readability

    // Removes Bootstrap class ".d-none" to make the div visible
    // Based on explanation given here → https://www.w3schools.com/howto/howto_js_remove_class.asp
    let results = document.getElementById("results-list");
    results.classList.remove("d-none");

    // Now that div is visible, prints the results into the span tags
    document.getElementById('dailyBMR').innerHTML = Math.trunc(dailyBMR);
    document.getElementById('dailyTDEE').innerHTML = Math.trunc(dailyTDEE);
    document.getElementById('dailyLose').innerHTML = Math.trunc(kcalLoss);
    document.getElementById('dailyGain').innerHTML = Math.trunc(kcalGain);
};

function clearResults(){
    let results = document.getElementById("results-list");
    results.classList.add("d-none");
};

// Formula for Men: 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
// Formula for Women: 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
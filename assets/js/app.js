//  Defining variables being used in the code
let gender;
let weight;
let height;
let age;
let kcalLoss;
let kcalGain;
let activityLevel;
let bmr;
let dailyBMR;
let dailyTDEE;

//  Calculates BMR based on user input
function calcBMR(){
    // Fix to Form submitting and refreshing the page - from "JavaJudt" https://stackoverflow.com/a/53597562
    //.preventDefault() will stop default action, in this case, form submit.
    $(document).on('submit', '#personalInfo', function(event){
        event.preventDefault();
    });    // End of Form Submit fix
    
    //getting form contents using jQuery
    //(tip from RightSaidFred on https://stackoverflow.com/a/4070018/14086573)
    gender = $("#gender")[0].value;
    weight = $("#weight")[0].value;
    height = $("#height")[0].value;
    age = $("#age")[0].value;
    activityLevel = $("#actLevel")[0].value;    

    if (gender == "male") { //if user is male, will execute male formula, update variables and call printResults() function
        bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));

        dailyBMR = bmr;
        dailyTDEE = bmr * activityLevel;
        kcalLoss = dailyTDEE * 0.8;
        kcalGain = dailyTDEE * 1.1;
        printResults();
        
    } else if (gender == "female") { //if user is female, will execute female formula, update variables and call printResults() function
        bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));

        dailyBMR = bmr;
        dailyTDEE = bmr * activityLevel;
        kcalLoss = dailyTDEE * 0.8;
        kcalGain = dailyTDEE * 1.1;
        printResults();
    } else { //if gender not provided will pop alert. This will not happen often as form has required fields
        alert("Please provide all the details. If you are unsure on how to respond, check our FAQ and if you encounter an issue please contact us.");
    }
};

function printResults(){ //Prints results to HTML while rounding numbers to improve readability

    // Removes Bootstrap class "d-none" and animate.css class "animate__fadeOut" to make the div visible
    // Adds animate.css class "animate__fadeIn" for a smooth transition
    $("#results-list").removeClass("d-none").removeClass("animate__fadeOut").addClass("animate__fadeIn");

    // Now that div is visible, prints the results into the span tags
    $("#dailyBMR").html(Math.round(dailyBMR));
    $("#dailyTDEE").html(Math.round(dailyTDEE));
    $("#dailyLose").html(Math.round(kcalLoss));
    $("#dailyGain").html(Math.round(kcalGain));
};

// Remove animated__fadeIn class from Results div and adds animated__fadeOut
// this makes the div invisible to users with a smooth transition
function clearResults(){
    $("#results-list").removeClass("animated__fadeIn");
    $("#results-list").addClass("animate__fadeOut");
};
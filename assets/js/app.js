function calculate(){
    let gender = String(document.getElementById("gender").value);
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let age = Number(document.getElementById("age").value);
    let tdee = 0;
    
    console.log("Gender is: " + gender);
    console.log("Weight is: " + weight);
    console.log("Height is: " + height);
    console.log("Age is: " + age);
    console.log("TDEE is: " + tdee);
}

// Men: 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
// Women: 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
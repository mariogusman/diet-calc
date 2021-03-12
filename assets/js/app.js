

function calcTDEE(){
    let gender = document.getElementById("gender").value;
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let tdee
    console.log("gender: " + gender + weight + height + age);

    if (gender == "male") {
        tdee = (88362 + (13397 * weight) + (4799 * height) - (5677 * age))/1000;
        console.log(tdee);
        return (tdee);
        
    } else if (gender == "female") {
        tdee = (447593 + (9247 * weight) + (3098 * height) - (4330 * age))/1000;
        console.log(tdee);
        return (tdee);
    }
    

}

// Men: 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)

// Women: 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
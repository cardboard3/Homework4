let Calorie = function(foodIn, calIn) {
    this.foodOut = foodIn;
    this.calOut = parseInt(calIn);
}

let foods = [];

let newCalorie1 = new Calorie("Apple", 140);
foods.push(newCalorie1);
let newCalorie2 = new Calorie("Orange", 75);
foods.push(newCalorie2);


Submitter.addEventListener("click", Submitted);

document.addEventListener("DOMContentLoaded", function (event) {

    // Anonymous function for math
        document.getElementById("Submitter").addEventListener("click", function () {
            console.log(foods);
            let TotalCals = 0;
            // for loop does the math for total calorie
            for (i = 0; i < foods.length; i++) {

                    TotalCals = foods[i].calOut + TotalCals; 


                
            }
            document.getElementById("FullOutput").value = TotalCals;  // Outputs data
        });
        
});

function Submitted() {
    let calOut = document.getElementById("foodIn").value;
    let foodOut = document.getElementById("calIn").value;
    foods.push(new Calorie(calOut, foodOut))
    // clear text boxes
    document.getElementById("foodIn").value = "";
    document.getElementById("calIn").value = "";
}
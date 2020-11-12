function driveAgeCheck(){
    let age = prompt("How old are you");
    age = parseInt(age, 10)
    if(age < 18){
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if(age == 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else if (age > 18){
        alert("Powering On. Enjoy the ride!");
    }
    else{
        alert("The input must be a number, press HI again")
    }
}
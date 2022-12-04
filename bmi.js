var heightInput = document.getElementById ("input height");

var weightInput = document.getElementById ("input weight");

var calculateButton = document.getElementById ("calculate");

var result = document.getElementById ("result");

var statement = document.getElementById ("result-statement");

var BMI , height , weight ;

calculateButton.addEventListener ("click" , () => {
    
    height = heightInput.value;
    
    weight = weightInput.value;
    
    BMI = weight / (height*height);
    
    result.innerText = BMI ;

    if (BMI < 18.5)
{
    statement.innerText="Your BMI is underweight range. \nYou may need to put on some weight.\nYou must take some nutional foods like rice, \ngrains bread,milk,fruits and nuts etc.."
}
else if((BMI >= 18.5) && (BMI <= 24.9))
{
    statement.innerText="Your BMI is normal weight. \nYou are in good and healthy stage now.\nSo you continue your regular food routine.\nStaying hydrated and eat a balanced diet are equally important"
}
else if((BMI >= 25.0) && (BMI <= 29.9))
{
    statement.innerText ="Your BMI is pre-obesity stage.\nYou must follow the diet.\nTake some Whole grains (whole wheat, steel cut oats, brown rice, quinoa), \nVegetables (a colorful variety-not potatoes), \nWhole fruits (not fruit juices)for healthy diet."
}
else if((BMI >= 30.0) && (BMI <= 34.9))
{
    statement.innerText ="You are in obesity class 1.\nYou should avoid soft drinks, sweetened cereals, cookies and cakes etc..\nDon't skip meals and eat more vegetables,drink plenty of waters etc.."

}
else if((BMI >= 35) && (BMI <= 39.9))
{
    statement.innerText ="you are in obesity class 2.\nYou should follow the strict diet.\n You should avoid soft drinks, sweetened cereals, cookies and cakes etc..\nDon't skip meals and eat more vegetables,drink plenty of waters etc.."
}
else
{
    statement.innerText ="You are in obesity class 3.\nYou must consult dietion and follow the strict diet.\nYou must avoid soft drinks, sweetened cereals, cookies ,fast food and cakes etc..\nEat only Whole grains (whole wheat, steel cut oats, brown rice, quinoa),\nVegetables (a colorful variety-not potatoes),\nWhole fruits (not fruit juices),\nNuts, seeds, beans, and other healthful sources of protein (fish and poultry),\nPlant oils (olive and other vegetable oils."
}
})

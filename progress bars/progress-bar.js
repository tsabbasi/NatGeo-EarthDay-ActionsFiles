// Head

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">


// Body

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<script type='text/javascript'>
var mealsProgAmountEntered;
var lightsProgAmountEntered;
var kilometersProgAmountEntered;
var showersProgAmountEntered;
var mealsProg;
var lightsProg;
var kilometersProg;
var showersProg;


if (mealsProgAmountEntered == null ) {
 mealsProg = parseInt('0');
document.getElementById('meatlessMealsProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + mealsProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + mealsProg + '%"> ' + mealsProg + '% Meatless Meals Goal Completed (success)</div></div>';
document.getElementById('meatlessMealsProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + mealsProg + ' big orange"><span>' + mealsProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

if (lightsProgAmountEntered == null ) {
 lightsProg = parseInt('0');

document.getElementById('electricitySavedProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + lightsProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + lightsProg + '%"> ' + lightsProg + '% Lights Saved Goal Completed (success)</div></div>';
document.getElementById('electricitySavedProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + lightsProg + ' big"><span>' + lightsProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

if (kilometersProgAmountEntered == null ) {
 kilometersProg = parseInt('0');

document.getElementById('kilometersWalkedProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + kilometersProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + kilometersProg + '%"> ' + kilometersProg + '% Kilometers Walked/Biked Goal Completed (success)</div></div>';
document.getElementById('kilometersWalkedProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + kilometersProg + ' big"><span>' + kilometersProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

if (showersProgAmountEntered == null ) {
 showersProg = parseInt('0');

document.getElementById('waterSavedProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + showersProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + showersProg + '%"> ' + showersProg + '% Water Saved Goal Completed (success)</div></div>';
document.getElementById('waterSavedProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + showersProg + ' big"><span>' + showersProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};


document.getElementById('sendMealsProgAmount').onclick = function(){

 	mealsProgAmountEntered = document.getElementById('mealsProgAmountEntered').value;
mealsProg = parseInt(mealsProgAmountEntered);

document.getElementById('meatlessMealsProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + mealsProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + mealsProg + '%"> ' + mealsProg + '% Meatless Meals Goal Completed (success)</div></div>';
document.getElementById('meatlessMealsProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + mealsProg + ' big"><span>' + mealsProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

document.getElementById('sendLightsProgAmount').onclick = function(){

 	lightsProgAmountEntered = document.getElementById('lightsProgAmountEntered').value;
lightsProg = parseInt(lightsProgAmountEntered);

document.getElementById('electricitySavedProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + lightsProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + lightsProg + '%"> ' + lightsProg + '% Lights Saved Goal Completed (success)</div></div>';
document.getElementById('electricitySavedProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + lightsProg + ' big"><span>' + lightsProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

document.getElementById('sendKilometersProgAmount').onclick = function(){

 	kilometersProgAmountEntered = document.getElementById('kilometersProgAmountEntered').value;
kilometersProg = parseInt(kilometersProgAmountEntered);

document.getElementById('kilometersWalkedProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + kilometersProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + kilometersProg + '%"> ' + kilometersProg + '% Lights Saved Goal Completed (success)</div></div>';
document.getElementById('kilometersWalkedProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + kilometersProg + ' big"><span>' + kilometersProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

document.getElementById('sendShowersProgAmount').onclick = function(){

 	showersProgAmountEntered = document.getElementById('showersProgAmountEntered').value;
showersProg = parseInt(showersProgAmountEntered);

document.getElementById('waterSavedProgBar').innerHTML = '<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="' + showersProg + '" aria-valuemin="0" aria-valuemax="100" style="width:' + showersProg + '%"> ' + showersProg + '% Lights Saved Goal Completed (success)</div></div>';
document.getElementById('waterSavedProgCircle').innerHTML = '<div class="clearfix"><div class="c100 p' + showersProg + ' big"><span>' + showersProg + '%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div></div>';
};

</script>
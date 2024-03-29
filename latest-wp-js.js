<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
<script type='text/javascript'>
var myFirebaseRef = new Firebase("https://earth-day-natgeo.firebaseio.com");

var kilometersKey = "kilometers";
var lightsKey = "lights";
var meatlessmealsKey = "meatlessmeals";
var showerKey = "shower";
var oldKilometers = 0;
var oldLightsEntered = 0;
var oldShowersEntered = 0;
var oldMeatlessmealsEntered = 0;
var packetKilometers;
var packetLights;
var packetMeatLessMeals;
var packetShower;
var kilometersEntered = "";
var dataEntered = "";
var username = document.getElementById("username").innerHTML;
var firstName = document.getElementById("firstName").innerHTML;
var lastName = document.getElementById("lastName").innerHTML;
var userEmail = document.getElementById("userEmail").innerHTML;

// NatGeo Roll User Vars
var NatGeoUsername = "NatGeoEarthDayRunUser";
var NatGeoRaceName = "Earth Day Run";
var NatGeoEmail = "taha@mywebnapp.com";

// Used in calculating the delta before submitting the update to Firebase
var oldNatGeoKilometerOffset;
var oldNatGeoLightOffset;
var oldNatGeoShowerOffset;
var oldNatGeoMeatlessMealsOffset;

// NatGeo packet information recieved and stored here;
var packetNatGeoKilometerOffset;
var packetNatGeoLightOffset;
var packetNatGeoShowerOffset;
var packetNatGeoMeatlessMealsOffset;


var NatGeoData = myFirebaseRef.child(NatGeoUsername + "/userdata").on("value", function(snapshot) {


	if (snapshot.val() == null ) {
 		myFirebaseRef.child(NatGeoUsername + '/userdata').set({ email : NatGeoEmail, name : NatGeoRaceName, totalcarbonoffset : "0" });
 	} else {
 		var oldNatGeoTotalCarbonOffset = snapshot.val().totalcarbonoffset;
 		var greeting = document.getElementById("natGeoUserGreeting");
		greeting.innerHTML = "Earth Day Run Totals" + name + "! <br />Our Total Offset so far is " + oldNatGeoTotalCarbonOffset + " kg";
 	}



});


var userData = myFirebaseRef.child(username + "/userdata").on("value", function(snapshot) {


	if (snapshot.val() == null ) {
 		myFirebaseRef.child(username + '/userdata').set({ email : userEmail, firstName : firstName, lastName : lastName, totalcarbonoffset : "0" });
 	} else {
 		var name = snapshot.val().firstName;
 		var oldTotalCarbonOffset = snapshot.val().totalcarbonoffset;
 		var greeting = document.getElementById("greeting");
		greeting.innerHTML = "Hello " + name + "! <br />Your Total Offset so far is " + oldTotalCarbonOffset + " kg offset";
 	}



});


 var greenactions = myFirebaseRef.child(username + "/greenactions").on("value", function(snapshot) {
 	console.log(snapshot.val());

 	if (snapshot.val() == null ) {
 		packetKilometers = 0;
 		packetLights = 0;
 		packetMeatLessMeals = 0;
 		packetShower = 0;
 	} else {

		packetKilometers = snapshot.val().kilometers;
		if( packetKilometers == null ) {

		packetKilometers = 0;
		}


		packetLights = snapshot.val().lights;

		if( packetLights == null) {

		packetLights = 0;
		}
		packetMeatLessMeals = snapshot.val().meatlessmeals;

		if( packetMeatLessMeals == null ) {

		packetMeatLessMeals = 0;
		}
		packetShower = snapshot.val().shower;

		if( packetShower == null ) {

		packetShower = 0;
		}

 	}

	oldKilometers = document.getElementById("currentKilometersTotal");
	oldKilometers.innerHTML = packetKilometers + " Kilometers";

	oldLightsEntered = document.getElementById("currentLightsEntered");
	oldLightsEntered.innerHTML = packetLights + " Lights";

	oldShowersEntered = document.getElementById("currentShowersEntered");
	oldShowersEntered.innerHTML = packetShower + " Showers";

	oldMeatlessmealsEntered = document.getElementById("currentMeatlessmealsEntered");
	oldMeatlessmealsEntered.innerHTML = packetMeatLessMeals + " Meat Less Meals";



});

 document.getElementById('sendKilometers').onclick = function(){

	updateFireBaseData("kilometersEntered");
 };

 document.getElementById('sendLights').onclick = function(){

 	updateFireBaseData("lightsEntered");

 };

 document.getElementById('sendShowers').onclick = function(){

 	updateFireBaseData("showersEntered");

 };

 document.getElementById('sendMeatlessmeals').onclick = function(){

 	updateFireBaseData("meatlessmealsEntered");

 };


 function updateFireBaseData (actionType) {

 	switch(actionType) {
	    case "kilometersEntered":
			dataEntered = document.getElementById(actionType).value;

			var newDataNumberVal = parseInt(dataEntered);
			var oldDataNumberVal;

			if( oldKilometers.innerHTML !== "" ) {

				oldDataNumberVal = parseInt(oldKilometers.innerHTML);
			} else {
				oldDataNumberVal = 0;
			}

			var totalDataNumber = oldDataNumberVal + newDataNumberVal;
			var myFirebaseRef = new Firebase("https://earth-day-natgeo.firebaseio.com");
			myFirebaseRef.child(username + '/greenactions').set({ kilometers : totalDataNumber, lights : packetLights, shower : packetShower, meatlessmeals : packetMeatLessMeals });

			var totalCarbonOffset = totalDataNumber + packetLights + packetShower + packetMeatLessMeals;
			myFirebaseRef.child(username + '/userdata').set({ email : userEmail, firstName : firstName, lastName : lastName, totalcarbonoffset : totalCarbonOffset });

	        break;

	    case "lightsEntered":
			dataEntered = document.getElementById(actionType).value;

			var newDataNumberVal = parseInt(dataEntered);
			var oldDataNumberVal;

			if( oldLightsEntered.innerHTML !== "" ) {

				oldDataNumberVal = parseInt(oldLightsEntered.innerHTML);
			} else {
				oldDataNumberVal = 0;
			}

			var totalDataNumber = oldDataNumberVal + newDataNumberVal;
			var myFirebaseRef = new Firebase("https://earth-day-natgeo.firebaseio.com");
			myFirebaseRef.child(username + '/greenactions').set({ kilometers : packetKilometers, lights : totalDataNumber, shower : packetShower, meatlessmeals : packetMeatLessMeals });

			var totalCarbonOffset = packetKilometers + totalDataNumber + packetShower + packetMeatLessMeals;
			myFirebaseRef.child(username + '/userdata').set({ email : userEmail, firstName : firstName, lastName : lastName, totalcarbonoffset : totalCarbonOffset });

	        break;

        case "showersEntered":
			dataEntered = document.getElementById(actionType).value;

			var newDataNumberVal = parseInt(dataEntered);
			var oldDataNumberVal;

			if( oldShowersEntered.innerHTML !== "" ) {

				oldDataNumberVal = parseInt(oldShowersEntered.innerHTML);
			} else {
				oldDataNumberVal = 0;
			}

			var totalDataNumber = oldDataNumberVal + newDataNumberVal;
			var myFirebaseRef = new Firebase("https://earth-day-natgeo.firebaseio.com");
			myFirebaseRef.child(username + '/greenactions').set({ kilometers : packetKilometers, lights : packetLights, shower : totalDataNumber, meatlessmeals : packetMeatLessMeals });

			var totalCarbonOffset = packetKilometers + packetLights + totalDataNumber + packetMeatLessMeals;
			myFirebaseRef.child(username + '/userdata').set({ email : userEmail, firstName : firstName, lastName : lastName, totalcarbonoffset : totalCarbonOffset });
	        break;

        case "meatlessmealsEntered":
			dataEntered = document.getElementById(actionType).value;

			var newDataNumberVal = parseInt(dataEntered);
			var oldDataNumberVal;

			if( oldMeatlessmealsEntered.innerHTML !== "" ) {

				oldDataNumberVal = parseInt(oldMeatlessmealsEntered.innerHTML);
			} else {
				oldDataNumberVal = 0;
			}

			var totalDataNumber = oldDataNumberVal + newDataNumberVal;
			var myFirebaseRef = new Firebase("https://earth-day-natgeo.firebaseio.com");
			myFirebaseRef.child(username + '/greenactions').set({ kilometers : packetKilometers, lights : packetLights, shower : packetShower, meatlessmeals : totalDataNumber });

			var totalCarbonOffset = packetKilometers + packetLights + packetShower + totalDataNumber;
			myFirebaseRef.child(username + '/userdata').set({ email : userEmail, firstName : firstName, lastName : lastName, totalcarbonoffset : totalCarbonOffset });
	        break;

	    default:
	        break;
	}

 }
</script>
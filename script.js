/*
    Assignment-4
    Prem Parikh
    W0794661
*/
    
$(function () {
    
        var lt;
        var lg;
        var ac;
        
    checkBrowerSetting();
    
    function checkBrowerSetting(){
        var  GE = function(code, message) {
            $("#locationhere").text("Click Allow");
            alert("Allow on the geolocation"); 
        };
        navigator.geolocation.getCurrentPosition(UL,GE);
    }

    function UL(position){
         lt= position.coords.latitude;
         lg= position.coords.longitude;
         ac= position.coords.accuracy;
        $("#locationhere").text("User location:");
        $("#locationhere").append(" Latitude :"+lt);
        $("#locationhere").append(" Longitude :"+lg);
        $("#locationhere").append(" Accuracy: "+ac);
        checkStorage();
    }

    function checkStorage(){
            if(localStorage.getItem("Latitude:")){
                $("#locationhere").append("<h1>"+"Latitude :"+localStorage.getItem("Latitude:")+" Longitude :"+localStorage.getItem("Longitude:")+"</h1>");
                $("#locationhere").append("<h3>"+"Welcome User"+"</h3>");                         
                var dis = calcDistanceBetweenPoints(localStorage.getItem("Latitude:"),localStorage.getItem("Longitude:"),lt,lg);
           
            }
           else{
                $("#locationhere").append("<h3>"+"Welcome NewUser"+"</h3>");
                window.localStorage.setItem('Latitude:',lt);
                window.localStorage.setItem('Longitude:',lg);
            }        
        window.localStorage.setItem('Latitude:',lt);
        window.localStorage.setItem('Longitude:',lg);
    }
    

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var ??1 = toRadians(lat1);
        var ??2 = toRadians(lat2);
        var ???? = toRadians(lat2 - lat1);
        var ???? = toRadians(lon2 - lon1);

        var a = Math.sin(???? / 2) * Math.sin(???? / 2) + Math.cos(??1) * Math.cos(??2) * Math.sin(???? / 2) * Math.sin(???? / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


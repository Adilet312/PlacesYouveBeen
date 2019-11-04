function Locations(country, city, timeofyear, lengthofstay) {
  this.country = country;
  this.city = city;
  this.timeofyear = timeofyear;
  this.lengthofstay = lengthofstay;
}
function LocationList() {
  this.list = [];
  this.id = 0;
}
LocationList.prototype.addNewLocation = function(place){
  place.id = this.assignId();
  this.list.push(place);
}

LocationList.prototype.assignId = function() {
  this.id += 1;
  return this.Id;
}

LocationList.prototype.findByName = function(name) {
  for(var i = 0; i <list.length; i++) {
    if (this.list[i] === name){
      return this.list[i];
    }
  }
  return false;
}

var list1 = new LocationList();

function displayLocationDetails(locationListToDisplay) {
  var outputOfLocations = $("#listID");
  var storageForLocations = "";
  locationListToDisplay.list.forEach(function(eachLocation) {
    storageForLocations += "Country name:" + eachLocation.country+", City name: " + eachLocation.city + ", Time of the year: "+ eachLocation.timeofyear +", Length of the stay: "+ eachLocation.lengthofstay +"<br>";
  });
  outputOfLocations.html(storageForLocations);
};

$(document).ready(function(){
  $("form#formID").submit(function(event){
    event.preventDefault();
    var countryInput = $("#countryID").val();
    var cityInput = $("#cityID").val();
    var timeOfYearInput = $("#timeOfYearID").val();
    var lengthOfStayInput = $("#lengthOfStayID").val();
    console.log(countryInput);
    var locationData = new Locations(countryInput, cityInput, timeOfYearInput, lengthOfStayInput);
    // var list1 = new LocationList();
    console.log(locationData);
      list1.addNewLocation(locationData);
    console.log(list1);
    displayLocationDetails(list1);
 //$("#listID").text(displayLocationDetails(list1)).show();
  });
});



// var ref = new LocationList();
// var location1 = new Locations("usa", "seattle", "november", "7 days");
// var location2 = new Locations("china", "hongkong", "december", "7 days");
// var location3 = new Locations("france", "paris", "may", "7 days");
// ref.addNewLocation(location1);
// ref.addNewLocation(location2);
// ref.addNewLocation(location3);

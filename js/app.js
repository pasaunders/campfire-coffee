var pikePlace = {
  //vital statistics for this branch of the company
  minHr: 14,
  maxHr: 55,
  cupsCustomer: 1.2,
  poundsCustomer: 3.7,
//  hoursOpen: 15, not relevant

  dailyStatistics: function(){
    //calculate the derived statistics from the basic numbers above, based on a random number of customers
    var randomCustomers = Math.floor(Math.random() * (pikePlace.maxHr - pikePlace.minHr) + pikePlace.minHr );
    console.log('randomCustomers is: ' + randomCustomers);
    var hourlyCups = parseFloat((randomCustomers * pikePlace.cupsCustomer).toFixed(1));
    console.log('hourlyCups is: ' + hourlyCups);
    var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
    console.log('forHereBeans is: ' + forHereBeans);
    var hourlyPounds = parseFloat((randomCustomers * pikePlace.poundsCustomer).toFixed(1));
    console.log('hourlyPounds is: ' + hourlyPounds);
    var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
    console.log('totalPounds is: ' + totalPounds);
    var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
    return statistics;
  }
};

//heading for the location, outside the FOR loop
var locationHeading = document.createElement('h1');
locationHeading.textContent = 'Pike Place Market'
document.body.appendChild(locationHeading)

for (var i = 0; i < 15; i++) {
// code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
  var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
  var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed

  if (i + 6 < 12) {
    var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
  }
  else if (i + 6 === 12) {
    var hourNumber = '12:00 noon'; //noon hour
  }
  else {
    var hourNumber = (i - 6) + ':00pm'; // hour after noon
  }

  var statisticsArray = pikePlace.dailyStatistics();
  console.log(statisticsArray);
  hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
  locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
  document.body.appendChild(locationList);

}

var capitolHill = {
  //vital statistics for this branch of the company
  minHr: 32,
  maxHr: 48,
  cupsCustomer: 3.2,
  poundsCustomer: 0.4,
//  hoursOpen: 15, not relevant

  dailyStatistics: function(){
    //calculate the derived statistics from the basic numbers above, based on a random number of customers
    var randomCustomers = Math.floor(Math.random() * (capitolHill.maxHr - capitolHill.minHr) + capitolHill.minHr );
    console.log('randomCustomers is: ' + randomCustomers);
    var hourlyCups = parseFloat((randomCustomers * capitolHill.cupsCustomer).toFixed(1));
    console.log('hourlyCups is: ' + hourlyCups);
    var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
    console.log('forHereBeans is: ' + forHereBeans);
    var hourlyPounds = parseFloat((randomCustomers * capitolHill.poundsCustomer).toFixed(1));
    console.log('hourlyPounds is: ' + hourlyPounds);
    var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
    console.log('totalPounds is: ' + totalPounds);
    var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
    return statistics;
  }
};

//heading for the location, outside the FOR loop
var locationHeading = document.createElement('h1');
locationHeading.textContent = 'Captiol Hill'
document.body.appendChild(locationHeading)

for (var i = 0; i < 15; i++) {
// code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
  var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
  var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed

  if (i + 6 < 12) {
    var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
  }
  else if (i + 6 === 12) {
    var hourNumber = '12:00 noon'; //noon hour
  }
  else {
    var hourNumber = (i - 6) + ':00pm'; // hour after noon
  }

  var statisticsArray = capitolHill.dailyStatistics();
  console.log(statisticsArray);
  hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
  locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
  document.body.appendChild(locationList);

}

var publicLibrary = {
  //vital statistics for this branch of the company
  minHr: 49,
  maxHr: 75,
  cupsCustomer: 2.6,
  poundsCustomer: 0.2,
//  hoursOpen: 15, not relevant

  dailyStatistics: function(){
    //calculate the derived statistics from the basic numbers above, based on a random number of customers
    var randomCustomers = Math.floor(Math.random() * (publicLibrary.maxHr - publicLibrary.minHr) + publicLibrary.minHr );
    console.log('randomCustomers is: ' + randomCustomers);
    var hourlyCups = parseFloat((randomCustomers * publicLibrary.cupsCustomer).toFixed(1));
    console.log('hourlyCups is: ' + hourlyCups);
    var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
    console.log('forHereBeans is: ' + forHereBeans);
    var hourlyPounds = parseFloat((randomCustomers * publicLibrary.poundsCustomer).toFixed(1));
    console.log('hourlyPounds is: ' + hourlyPounds);
    var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
    console.log('totalPounds is: ' + totalPounds);
    var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
    return statistics;
  }
};

//heading for the location, outside the FOR loop
var locationHeading = document.createElement('h1');
locationHeading.textContent = 'Seattle Public Library'
document.body.appendChild(locationHeading)

for (var i = 0; i < 15; i++) {
// code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
  var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
  var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed

  if (i + 6 < 12) {
    var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
  }
  else if (i + 6 === 12) {
    var hourNumber = '12:00 noon'; //noon hour
  }
  else {
    var hourNumber = (i - 6) + ':00pm'; // hour after noon
  }

  var statisticsArray = publicLibrary.dailyStatistics();
  console.log(statisticsArray);
  hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
  locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
  document.body.appendChild(locationList);

}

var southLake = {
  //vital statistics for this branch of the company
  minHr: 35,
  maxHr: 88,
  cupsCustomer: 1.3,
  poundsCustomer: 3.7,
//  hoursOpen: 15, not relevant

  dailyStatistics: function(){
    //calculate the derived statistics from the basic numbers above, based on a random number of customers
    var randomCustomers = Math.floor(Math.random() * (southLake.maxHr - southLake.minHr) + southLake.minHr );
    console.log('randomCustomers is: ' + randomCustomers);
    var hourlyCups = parseFloat((randomCustomers * southLake.cupsCustomer).toFixed(1));
    console.log('hourlyCups is: ' + hourlyCups);
    var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
    console.log('forHereBeans is: ' + forHereBeans);
    var hourlyPounds = parseFloat((randomCustomers * southLake.poundsCustomer).toFixed(1));
    console.log('hourlyPounds is: ' + hourlyPounds);
    var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
    console.log('totalPounds is: ' + totalPounds);
    var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
    return statistics;
  }
};

//heading for the location, outside the FOR loop
var locationHeading = document.createElement('h1');
locationHeading.textContent = 'South Lake Union'
document.body.appendChild(locationHeading)

for (var i = 0; i < 15; i++) {
// code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
  var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
  var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed

  if (i + 6 < 12) {
    var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
  }
  else if (i + 6 === 12) {
    var hourNumber = '12:00 noon'; //noon hour
  }
  else {
    var hourNumber = (i - 6) + ':00pm'; // hour after noon
  }

  var statisticsArray = southLake.dailyStatistics();
  console.log(statisticsArray);
  hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
  locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
  document.body.appendChild(locationList);

}

var seaTac = {
  //vital statistics for this branch of the company
  minHr: 68,
  maxHr: 124,
  cupsCustomer: 1.1,
  poundsCustomer: 2.7,
//  hoursOpen: 15, not relevant

  dailyStatistics: function(){
    //calculate the derived statistics from the basic numbers above, based on a random number of customers
    var randomCustomers = Math.floor(Math.random() * (seaTac.maxHr - seaTac.minHr) + seaTac.minHr );
    console.log('randomCustomers is: ' + randomCustomers);
    var hourlyCups = parseFloat((randomCustomers * seaTac.cupsCustomer).toFixed(1));
    console.log('hourlyCups is: ' + hourlyCups);
    var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
    console.log('forHereBeans is: ' + forHereBeans);
    var hourlyPounds = parseFloat((randomCustomers * seaTac.poundsCustomer).toFixed(1));
    console.log('hourlyPounds is: ' + hourlyPounds);
    var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
    console.log('totalPounds is: ' + totalPounds);
    var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
    return statistics;
  }
};

//heading for the location, outside the FOR loop
var locationHeading = document.createElement('h1');
locationHeading.textContent = 'SeaTac Airport'
document.body.appendChild(locationHeading)

for (var i = 0; i < 15; i++) {
// code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
  var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
  var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed

  if (i + 6 < 12) {
    var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
  }
  else if (i + 6 === 12) {
    var hourNumber = '12:00 noon'; //noon hour
  }
  else {
    var hourNumber = (i - 6) + ':00pm'; // hour after noon
  }

  var statisticsArray = seaTac.dailyStatistics();
  console.log(statisticsArray);
  hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
  locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
  document.body.appendChild(locationList);

}

var websiteSales = {
  //vital statistics for this branch of the company
  minHr: 3,
  maxHr: 6,
  cupsCustomer: 0,
  poundsCustomer: 6.7,
//  hoursOpen: 15, not relevant

  dailyStatistics: function(){
    //calculate the derived statistics from the basic numbers above, based on a random number of customers
    var randomCustomers = Math.floor(Math.random() * (websiteSales.maxHr - websiteSales.minHr) + websiteSales.minHr );
    console.log('randomCustomers is: ' + randomCustomers);
    var hourlyCups = parseFloat((randomCustomers * websiteSales.cupsCustomer).toFixed(1));
    console.log('hourlyCups is: ' + hourlyCups);
    var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
    console.log('forHereBeans is: ' + forHereBeans);
    var hourlyPounds = parseFloat((randomCustomers * websiteSales.poundsCustomer).toFixed(1));
    console.log('hourlyPounds is: ' + hourlyPounds);
    var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
    console.log('totalPounds is: ' + totalPounds);
    var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
    return statistics;
  }
};

//heading for the location, outside the FOR loop
var locationHeading = document.createElement('h1');
locationHeading.textContent = 'Website Sales'
document.body.appendChild(locationHeading)

for (var i = 0; i < 15; i++) {
// code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
  var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
  var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed

  if (i + 6 < 12) {
    var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
  }
  else if (i + 6 === 12) {
    var hourNumber = '12:00 noon'; //noon hour
  }
  else {
    var hourNumber = (i - 6) + ':00pm'; // hour after noon
  }

  var statisticsArray = websiteSales.dailyStatistics();
  console.log(statisticsArray);
  hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
  locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
  document.body.appendChild(locationList);

}

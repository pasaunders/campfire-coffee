'use strict'

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var location = [];

function Kiosk(locationName, minCustomers, maxCustomers, cupsCustomer, poundsCustomer){
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cupsCustomer = cupsCustomer;
  this.poundsCustomer = poundsCustomer;
  this.hourlyCustomers = [];
  this.hourlyCups = [];
  this.dailyCups = 0;
  this.hourlyBeansLbs = [];
  this.dailyBeansLbs = [];
  this.totalDailyBeans = 0;
  location.push(this);

/*
  this.hourCustomers = function(){
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCustomers.push = Math.floor(Math.random() * (this.maxHr - this.minHr + 1) + this.minHr );
    }
  };
  this.calculateHourlyCups = function(){
    for (var i = 0; i < hours.length; i++) {
      var cups = Math.floor(cupsCustomer * hourlyCustomers[i]);
      console.log(cups);
      this.cupsCustomer.push(parseFloat(cups.toFixed(1)));
      this.dailyCups += cups;
      this.totalDailyBeans += (cups / 20);
    }
  };
  this.calculateHourlyBeans = function(){
    for (var i = 0; i < hours.length; i++) {
      var beans = Math.floor(poundsCustomer * hourlyCustomers[i]);
      console.log(beans);
      this.hourlyBeansLbs.push(parseFloat(beans.toFixed(1)));
      this.totalDailyBeans += beans
    }
  };
  this.render = function(){
    this.hourCustomers
    this.calculateHourlyCups
    this.calculateHourlyBeans

    function buildTable(){
      //start building a table
      var tableElement = document.createElement('table');
      //create first row
      var tableRowElement1 = document.createElement('tr');
      //create a blank header element to space the top row of the table right
      var tableHeaderElement1 = document.createElement('th');
      tableHeaderElement1.textContent = '';
      tableRowElement1.appendChild(tableHeaderElement1)
      // loop which populates the top row of the table with hour entries
      for (var i = 0; i < hours.length; i++) {
        var tableHeaderElement2 = document.createElement('th');
        tableHeaderElement2.textContent = hours[i];
      //attach each iteration of the loop to the top row of the table
        tableRowElement1.appendChild(tableHeaderElement2);
      }
      //close the first table row
      tableElement.appendChild(tableRowElement1);
      //open a second row
      var tableRowElement2 = document.createElement('th');
      //create header for second row, give it location info
      var tableHeaderElement3 = document.createElement('th');
      tableHeaderElement3.textContent = location[1];
      //attach location info header to the second row
      tableRowElement2.appendChild(tableHeaderElement3);
      for (var i = 0; i < hours.length; i++) {
        var tableDataElement1 = document.createElement('td');
        tableDataElement1.textContent = ((hourlyCups[i] / 20) + hourlyBeansLbs[i]);
        tableRowElement2.appendChild(tableDataElement1);
      }
    }


  };*/
}

var pikePlace = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var publicLibrary = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var southLake = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTac = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);

/*for (var i = 0; i < location.length; i++) {           //is this good?
  //location[i].render();
}*/


//
//
// var pikePlace = {
//   //vital statistics for this branch of the company
//   minHr: 14,
//   maxHr: 55,
//   cupsCustomer: 1.2,
//   poundsCustomer: 3.7,
// //  hoursOpen: 15, not relevant
//
//   dailyStatistics: function(){
//     //calculate the derived statistics from the basic numbers above, based on a random number of customers
//     var randomCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1) + this.minHr );
//     console.log('randomCustomers is: ' + randomCustomers);
//     var hourlyCups = parseFloat((randomCustomers * this.cupsCustomer).toFixed(1));
//     console.log('hourlyCups is: ' + hourlyCups);
//     var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
//     console.log('forHereBeans is: ' + forHereBeans);
//     var hourlyPounds = parseFloat((randomCustomers * this.poundsCustomer).toFixed(1));
//     console.log('hourlyPounds is: ' + hourlyPounds);
//     var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
//     console.log('totalPounds is: ' + totalPounds);
//     var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
//     return statistics;
//   }
// };
//
// //heading for the location, outside the FOR loop
// var locationHeading = document.createElement('h1');
// locationHeading.textContent = 'Pike Place Market'
// document.body.appendChild(locationHeading)
//
// for (var i = 0; i < 15; i++) {
// // code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
//   var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
//   var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed
//
//   if (i + 6 < 12) {
//     var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
//   }
//   else if (i + 6 === 12) {
//     var hourNumber = '12:00 noon'; //noon hour
//   }
//   else {
//     var hourNumber = (i - 6) + ':00pm'; // hour after noon
//   }
//
//   var statisticsArray = pikePlace.dailyStatistics();
//   console.log(statisticsArray);
//   hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
//   locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
//   document.body.appendChild(locationList);
//
// }
//
// var capitolHill = {
//   //vital statistics for this branch of the company
//   minHr: 32,
//   maxHr: 48,
//   cupsCustomer: 3.2,
//   poundsCustomer: 0.4,
// //  hoursOpen: 15, not relevant
//
//   dailyStatistics: function(){
//     //calculate the derived statistics from the basic numbers above, based on a random number of customers
//     var randomCustomers = Math.floor(Math.random() * (capitolHill.maxHr - capitolHill.minHr) + capitolHill.minHr );
//     console.log('randomCustomers is: ' + randomCustomers);
//     var hourlyCups = parseFloat((randomCustomers * capitolHill.cupsCustomer).toFixed(1));
//     console.log('hourlyCups is: ' + hourlyCups);
//     var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
//     console.log('forHereBeans is: ' + forHereBeans);
//     var hourlyPounds = parseFloat((randomCustomers * capitolHill.poundsCustomer).toFixed(1));
//     console.log('hourlyPounds is: ' + hourlyPounds);
//     var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
//     console.log('totalPounds is: ' + totalPounds);
//     var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
//     return statistics;
//   }
// };
//
// //heading for the location, outside the FOR loop
// var locationHeading = document.createElement('h1');
// locationHeading.textContent = 'Captiol Hill'
// document.body.appendChild(locationHeading)
//
// for (var i = 0; i < 15; i++) {
// // code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
//   var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
//   var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed
//
//   if (i + 6 < 12) {
//     var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
//   }
//   else if (i + 6 === 12) {
//     var hourNumber = '12:00 noon'; //noon hour
//   }
//   else {
//     var hourNumber = (i - 6) + ':00pm'; // hour after noon
//   }
//
//   var statisticsArray = capitolHill.dailyStatistics();
//   console.log(statisticsArray);
//   hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
//   locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
//   document.body.appendChild(locationList);
//
// }
//
// var publicLibrary = {
//   //vital statistics for this branch of the company
//   minHr: 49,
//   maxHr: 75,
//   cupsCustomer: 2.6,
//   poundsCustomer: 0.2,
// //  hoursOpen: 15, not relevant
//
//   dailyStatistics: function(){
//     //calculate the derived statistics from the basic numbers above, based on a random number of customers
//     var randomCustomers = Math.floor(Math.random() * (publicLibrary.maxHr - publicLibrary.minHr) + publicLibrary.minHr );
//     console.log('randomCustomers is: ' + randomCustomers);
//     var hourlyCups = parseFloat((randomCustomers * publicLibrary.cupsCustomer).toFixed(1));
//     console.log('hourlyCups is: ' + hourlyCups);
//     var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
//     console.log('forHereBeans is: ' + forHereBeans);
//     var hourlyPounds = parseFloat((randomCustomers * publicLibrary.poundsCustomer).toFixed(1));
//     console.log('hourlyPounds is: ' + hourlyPounds);
//     var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
//     console.log('totalPounds is: ' + totalPounds);
//     var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
//     return statistics;
//   }
// };
//
// //heading for the location, outside the FOR loop
// var locationHeading = document.createElement('h1');
// locationHeading.textContent = 'Seattle Public Library'
// document.body.appendChild(locationHeading)
//
// for (var i = 0; i < 15; i++) {
// // code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
//   var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
//   var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed
//
//   if (i + 6 < 12) {
//     var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
//   }
//   else if (i + 6 === 12) {
//     var hourNumber = '12:00 noon'; //noon hour
//   }
//   else {
//     var hourNumber = (i - 6) + ':00pm'; // hour after noon
//   }
//
//   var statisticsArray = publicLibrary.dailyStatistics();
//   console.log(statisticsArray);
//   hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
//   locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
//   document.body.appendChild(locationList);
//
// }
//
// var southLake = {
//   //vital statistics for this branch of the company
//   minHr: 35,
//   maxHr: 88,
//   cupsCustomer: 1.3,
//   poundsCustomer: 3.7,
// //  hoursOpen: 15, not relevant
//
//   dailyStatistics: function(){
//     //calculate the derived statistics from the basic numbers above, based on a random number of customers
//     var randomCustomers = Math.floor(Math.random() * (southLake.maxHr - southLake.minHr) + southLake.minHr );
//     console.log('randomCustomers is: ' + randomCustomers);
//     var hourlyCups = parseFloat((randomCustomers * southLake.cupsCustomer).toFixed(1));
//     console.log('hourlyCups is: ' + hourlyCups);
//     var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
//     console.log('forHereBeans is: ' + forHereBeans);
//     var hourlyPounds = parseFloat((randomCustomers * southLake.poundsCustomer).toFixed(1));
//     console.log('hourlyPounds is: ' + hourlyPounds);
//     var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
//     console.log('totalPounds is: ' + totalPounds);
//     var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
//     return statistics;
//   }
// };
//
// //heading for the location, outside the FOR loop
// var locationHeading = document.createElement('h1');
// locationHeading.textContent = 'South Lake Union'
// document.body.appendChild(locationHeading)
//
// for (var i = 0; i < 15; i++) {
// // code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
//   var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
//   var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed
//
//   if (i + 6 < 12) {
//     var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
//   }
//   else if (i + 6 === 12) {
//     var hourNumber = '12:00 noon'; //noon hour
//   }
//   else {
//     var hourNumber = (i - 6) + ':00pm'; // hour after noon
//   }
//
//   var statisticsArray = southLake.dailyStatistics();
//   console.log(statisticsArray);
//   hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
//   locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
//   document.body.appendChild(locationList);
//
// }
//
// var seaTac = {
//   //vital statistics for this branch of the company
//   minHr: 68,
//   maxHr: 124,
//   cupsCustomer: 1.1,
//   poundsCustomer: 2.7,
// //  hoursOpen: 15, not relevant
//
//   dailyStatistics: function(){
//     //calculate the derived statistics from the basic numbers above, based on a random number of customers
//     var randomCustomers = Math.floor(Math.random() * (seaTac.maxHr - seaTac.minHr) + seaTac.minHr );
//     console.log('randomCustomers is: ' + randomCustomers);
//     var hourlyCups = parseFloat((randomCustomers * seaTac.cupsCustomer).toFixed(1));
//     console.log('hourlyCups is: ' + hourlyCups);
//     var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
//     console.log('forHereBeans is: ' + forHereBeans);
//     var hourlyPounds = parseFloat((randomCustomers * seaTac.poundsCustomer).toFixed(1));
//     console.log('hourlyPounds is: ' + hourlyPounds);
//     var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
//     console.log('totalPounds is: ' + totalPounds);
//     var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
//     return statistics;
//   }
// };
//
// //heading for the location, outside the FOR loop
// var locationHeading = document.createElement('h1');
// locationHeading.textContent = 'SeaTac Airport'
// document.body.appendChild(locationHeading)
//
// for (var i = 0; i < 15; i++) {
// // code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
//   var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
//   var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed
//
//   if (i + 6 < 12) {
//     var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
//   }
//   else if (i + 6 === 12) {
//     var hourNumber = '12:00 noon'; //noon hour
//   }
//   else {
//     var hourNumber = (i - 6) + ':00pm'; // hour after noon
//   }
//
//   var statisticsArray = seaTac.dailyStatistics();
//   console.log(statisticsArray);
//   hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
//   locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
//   document.body.appendChild(locationList);
//
// }
//
// var websiteSales = {
//   //vital statistics for this branch of the company
//   minHr: 3,
//   maxHr: 6,
//   cupsCustomer: 0,
//   poundsCustomer: 6.7,
// //  hoursOpen: 15, not relevant
//
//   dailyStatistics: function(){
//     //calculate the derived statistics from the basic numbers above, based on a random number of customers
//     var randomCustomers = Math.floor(Math.random() * (websiteSales.maxHr - websiteSales.minHr) + websiteSales.minHr );
//     console.log('randomCustomers is: ' + randomCustomers);
//     var hourlyCups = parseFloat((randomCustomers * websiteSales.cupsCustomer).toFixed(1));
//     console.log('hourlyCups is: ' + hourlyCups);
//     var forHereBeans = parseFloat((hourlyCups / 20).toFixed(1));
//     console.log('forHereBeans is: ' + forHereBeans);
//     var hourlyPounds = parseFloat((randomCustomers * websiteSales.poundsCustomer).toFixed(1));
//     console.log('hourlyPounds is: ' + hourlyPounds);
//     var totalPounds = parseFloat((hourlyPounds + forHereBeans).toFixed(1));
//     console.log('totalPounds is: ' + totalPounds);
//     var statistics = [randomCustomers, hourlyCups, forHereBeans, hourlyPounds, totalPounds];
//     return statistics;
//   }
// };
//
// //heading for the location, outside the FOR loop
// var locationHeading = document.createElement('h1');
// locationHeading.textContent = 'Website Sales'
// document.body.appendChild(locationHeading)
//
// for (var i = 0; i < 15; i++) {
// // code to print out the hour in an unordered list, calling the rest of the information from pikePlace.dailyStatistics
//   var locationList = document.createElement('ul'); //creates the unordered list that the data will go in
//   var hourEntry = document.createElement('li'); //creates the list entries where the information will actually be displayed
//
//   if (i + 6 < 12) {
//     var hourNumber = (i + 6) + ':00am'; // returns the hours in the morning
//   }
//   else if (i + 6 === 12) {
//     var hourNumber = '12:00 noon'; //noon hour
//   }
//   else {
//     var hourNumber = (i - 6) + ':00pm'; // hour after noon
//   }
//
//   var statisticsArray = websiteSales.dailyStatistics();
//   console.log(statisticsArray);
//   hourEntry.textContent = hourNumber + ': ' + statisticsArray[4] + ' lbs [' + statisticsArray[0] + ' customers, ' + statisticsArray[1] + ' cups (' + statisticsArray[2] + ' lbs), ' + statisticsArray[3] + ' lbs to-go]';
//   locationList.appendChild(hourEntry); //puts the hourEntry into the locationlist unordered list
//   document.body.appendChild(locationList);
//
// }

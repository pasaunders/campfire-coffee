'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var shops = ['Pike Place', 'Capitol Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website Sales'];

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
};
  Kiosk.prototype.hourCustomers = function(){
    for (var i = 0; i < hours.length; i++) {
      console.log("inside for loop at hourCustomers");
      this.hourlyCustomers.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers ));
      console.log(this.hourlyCustomers);
    };
  };
  Kiosk.prototype.calculateHourlyCups = function(){
    for (var i = 0; i < hours.length; i++) {
      var cups = Math.floor(this.cupsCustomer * this.hourlyCustomers[i]);
      console.log(cups);
      this.hourlyCups.push(parseFloat(cups.toFixed(i)));
      this.dailyCups += cups;
      this.totalDailyBeans += (cups / 20);
    };
  };
  Kiosk.prototype.calculateHourlyBeans = function(){
    for (var i = 0; i < hours.length; i++) {
      var beans = Math.floor(this.poundsCustomer * this.hourlyCustomers[i]);
      console.log(beans);
      this.hourlyBeansLbs.push(parseFloat(beans.toFixed(1)));
      this.totalDailyBeans += beans
    };
  };


var pikePlace = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var publicLibrary = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var southLake = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTac = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);
var instantiated = [pikePlace, capitolHill, publicLibrary, southLake, seaTac, websiteSales]

for (var i = 0; i < shops.length; i++) {
  instantiated[i].hourCustomers();
  instantiated[i].calculateHourlyCups();
  instantiated[i].calculateHourlyBeans();
}

function renderTable(){
  var sectEl = document.getElementById('test'); // ???
  var tableEl = document.createElement('table'); //table element
  var rowEl1 = document.createElement('tr'); //first row

  var blankSpace = document.createElement('th'); //blank space to align table headings
  blankSpace.textContent = ' ';
  rowEl1.appendChild(blankSpace);

  //loop through the hours array
  for (var i = 0; i < hours.length; i++) {
    //for each iteration of the loop create a <li> element
    var hoursElement = document.createElement('th');
    //for each li element, assign the contents of array [i] to the li's test content.
    hoursElement.textContent = hours[i];
    console.log(hours[i]);
    //append the populated LI element back to the ul as a child.
    rowEl1.appendChild(hoursElement);
  }
  tableEl.appendChild(rowEl1); //append the first row to the table

  var rowEl2 = document.createElement('tr'); //second row

  var firstShop = document.createElement('th'); //first shop as a heading in the first column of the second row
  firstShop.textContent = shops[0];
  rowEl2.appendChild(firstShop);

  //loop through the first shop
  for (var i = 0; i < hours.length; i++) {
    var shopOneStats = document.createElement('td'); //this is table data
    shopOneStats.textContent = ((pikePlace.hourlyCups[i] / 20) + pikePlace.hourlyBeansLbs[i]) + 'lbs Beans';
    rowEl2.appendChild(shopOneStats);
  }
  tableEl.appendChild(rowEl2); // attach row2 to the table

  var rowEl3 = document.createElement('tr')
  var secondShop = document.createElement('th');
  secondShop.textContent = shops[1];
  rowEl3.appendChild(secondShop);

  //loop through the second shop
  for (var i = 0; i < hours.length; i++) {
    var shopTwoStats = document.createElement('td');
    shopTwoStats.textContent = ((capitolHill.hourlyCups[i] / 20) + capitolHill.hourlyBeansLbs[i]) + 'lbs Beans';
    rowEl3.appendChild(shopTwoStats);
  }
  tableEl.appendChild(rowEl3);//attach row 3 to table

  var rowEl4 = document.createElement('tr')
  var thirdShop = document.createElement('th');
  thirdShop.textContent = shops[2];
  rowEl4.appendChild(thirdShop);

  //loop through the third shop
  for (var i = 0; i < hours.length; i++) {
    var shopThreeStats = document.createElement('td');
    shopThreeStats.textContent = ((publicLibrary.hourlyCups[i] / 20) + publicLibrary.hourlyBeansLbs[i]) + 'lbs Beans';
    rowEl4.appendChild(shopThreeStats);
  }
  tableEl.appendChild(rowEl4);

  var rowEl5 = document.createElement('tr')
  var fourthShop = document.createElement('th');
  fourthShop.textContent = shops[3];
  rowEl5.appendChild(fourthShop);

  //loop through the fourth shop
  for (var i = 0; i < hours.length; i++) {
    var shopFourStats = document.createElement('td');
    shopFourStats.textContent = ((southLake.hourlyCups[i] / 20) + southLake.hourlyBeansLbs[i]) + 'lbs Beans';
    rowEl5.appendChild(shopFourStats);
  }
  tableEl.appendChild(rowEl5);


    var rowEl6 = document.createElement('tr')
    var fifthShop = document.createElement('th');
    fifthShop.textContent = shops[4];
    rowEl6.appendChild(fifthShop);

    //loop through the fifth shop
    for (var i = 0; i < hours.length; i++) {
      var shopFiveStats = document.createElement('td');
      shopFiveStats.textContent = ((seaTac.hourlyCups[i] / 20) + seaTac.hourlyBeansLbs[i]) + 'lbs Beans';
      rowEl6.appendChild(shopFiveStats);
    }
    tableEl.appendChild(rowEl6);

    var rowEl7 = document.createElement('tr')
    var sixthShop = document.createElement('th');
    sixthShop.textContent = shops[5];
    rowEl7.appendChild(sixthShop);

    //loop through the sixth shop
    for (var i = 0; i < hours.length; i++) {
      var shopSixStats = document.createElement('td');
      shopSixStats.textContent = ((websiteSales.hourlyCups[i] / 20) + websiteSales.hourlyBeansLbs[i]) + 'lbs Beans';
      rowEl7.appendChild(shopSixStats);
    }
    tableEl.appendChild(rowEl7);

  sectEl.appendChild(tableEl); // attach the table to the html doc
}


renderTable();

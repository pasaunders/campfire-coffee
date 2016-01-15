'use strict';
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var shops = [];
var submitForm = document.getElementById('enter');

function Kiosk(locationName, minCustomers, maxCustomers, cupsCustomer, poundsCustomer){
  this.locationName = locationName; //info passed to the constructor
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cupsCustomer = cupsCustomer;
  this.poundsCustomer = poundsCustomer;

  this.hourlyCustomers = [];   //derived and generated info
  this.hourlyCups = [];
  this.dailyCups = 0;
  this.hourlyBeansLbs = [];
  this.dailyBeansLbs = [];
  this.totalDailyBeans = 0;

  console.log(this);

  this.hourCustomers(); //run the methods
  this.calculateHourlyCups();
  this.calculateHourlyBeans();
  this.renderTableRow();
  shops.push(this);
}
  Kiosk.prototype.hourCustomers = function(){
    for (var i = 0; i < hours.length; i++) {
      this.hourlyCustomers.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
      console.log(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  Kiosk.prototype.calculateHourlyCups = function(){
    for (var i = 0; i < hours.length; i++) {
      var cups = Math.floor(this.cupsCustomer * this.hourlyCustomers[i]);
      this.hourlyCups.push(parseFloat(cups.toFixed(1)));
      this.dailyCups += cups;
      this.totalDailyBeans += (cups / 20);
    }
  };
  Kiosk.prototype.calculateHourlyBeans = function(){
    for (var i = 0; i < hours.length; i++) {
      var beans = Math.floor(this.poundsCustomer * this.hourlyCustomers[i]);
      this.hourlyBeansLbs.push(parseFloat(beans.toFixed(1)));
      this.totalDailyBeans += beans;
    }
    Kiosk.prototype.renderTableRow = function () {
      var tableEl = document.getElementById('kioskData')
      var rowEL2 = document.createElement('tr');

      var shopName = document.createElement('th'); //show the shop name
      shopName.textContent = this.locationName;
      rowEL2.appendChild(shopName);

      var beansNeeded = document.createElement('td'); //show the total number of beans/day the shop needs
      beansNeeded.textContent = Math.ceil(this.totalDailyBeans.toFixed(1)); //rounds the total number of pounds required up, so there's enough for that last fraction of a cup
      rowEL2.appendChild(beansNeeded);

      for (var i = 0; i < hours.length; i++) {
        var shopStats = document.createElement('td'); //this is table data
        shopStats.textContent = (this.hourlyCustomers[i]) + ' Customers';
        rowEL2.appendChild(shopStats);
      }
      tableEl.appendChild(rowEL2); //append the generated row to the table.
    };
  };

function renderFirstTableLine() {
  // var sectEl = document.getElementById('dataTable'); // hook the table to the right html element
  var tableEl = document.getElementById('kioskData'); //table element
  var rowEl1 = document.createElement('tr'); //first row

  var blankSpace = document.createElement('th'); //blank space to align table headings
  blankSpace.textContent = ' ';
  rowEl1.appendChild(blankSpace);

  var supplyBeans = document.createElement('th'); //first table heading: shows total beans to supply daily.
  supplyBeans.textContent = 'Pounds of Beans Used';
  rowEl1.appendChild(supplyBeans);

  //loop through the hours array
  for (var i = 0; i < hours.length; i++) {
    var hoursElement = document.createElement('th');     //for each iteration of the loop create a <li> element
    hoursElement.textContent = hours[i];    //for each li element, assign the contents of array [i] to the li's test content.
    rowEl1.appendChild(hoursElement);     //append the populated LI element back to the ul as a child.
  }
  tableEl.appendChild(rowEl1); //append the first row to the table
}
renderFirstTableLine();

var pikePlace = new Kiosk('Pike Place Market', 14, 55, 1.2, 3.7);
var capitolHill = new Kiosk('Capitol Hill', 32, 48, 3.2, 0.4);
var publicLibrary = new Kiosk('Seattle Public Library', 49, 75, 2.6, 0.2);
var southLake = new Kiosk('South Lake Union', 35, 88, 1.3, 3.7);
var seaTac = new Kiosk('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk('Website Sales', 3, 6, 0, 6.7);

function dataSubmit(event) {
  console.log('dataSubmit is working');
  event.preventDefault();

  //if to kick an error if they leave something blank
  if (!event.target.kioskName.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.cupsCustomer.value || !event.target.poundsCustomer.value) {
    return alert('Fields cannot be empty!');
  }
  else {
  var kioskName = event.target.kioskName.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var cupsCustomer = event.target.cupsCustomer.value;
  var poundsCustomer = event.target.poundsCustomer.value;

  var newKiosk = new Kiosk(kioskName, minCustomers, maxCustomers, cupsCustomer, poundsCustomer);

  event.target.kioskName.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.cupsCustomer.value = null;
  event.target.poundsCustomer.value = null;

  console.log(event);
  shops.push(newKiosk);
  }
}
kioskForm.addEventListener('submit', dataSubmit, false);

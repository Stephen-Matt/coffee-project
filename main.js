"use strict";

var filteredCoffees;

function renderCoffee(coffee) {
    var html = '<div><tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += "<div class='col-6 float-left'>";
    html += '<td><h3>' + coffee.name + '</h3></td>';
    html += '<td><p>' + coffee.roast + '</p></td>';
    html += '</tr></div>';
    html += "<div>";

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length-1; i++) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelections.value;
    filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            if (coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
                filteredCoffees.push(coffee);
            }

        } else if (selectedRoast === "all" && coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    bodyText.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var addCoffeeName = myInput2.value;
    filteredCoffees.push(addCoffeeName);
    bodyText.innerHTML = renderCoffees(filteredCoffees);
}








// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var bodyText = document.getElementById("bodyText");

var coffeeNames = [];


for (var i = 0; i < coffees.length; i++) {
    coffeeNames.push(coffees[i].name);
}








var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var nameSelections = document.getElementById("myInput");
var myInput2 = document.getElementById("myInput2");
var submit2 = document.getElementById("submit2");













tbody.innerHTML = renderCoffees(coffees);
bodyText.innerHTML = renderCoffees(coffees);





roastSelection.addEventListener("change", updateCoffees);
nameSelections.addEventListener("input", updateCoffees);
submit2.addEventListener("click", addCoffee);















// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!
// Select the filter button
var filterButton= d3.select('filter-btn');

//  Select the input value
var textBox= d3.select('form-control');

// select table
var tbody= d3.select('tbody');

//  function to handle of click button


function handleBtnClick(){
   var inputValue=textBox.property('value');
   var filterData= tableData.filter(date => date.datetime === inputValue);
   console.log(filterData);
   var row=tbody.append("tr")
   Object.enteries(filterData).forEach( value => cell.append("td").text(value));
   

  
}

filterButton.on('click',handleBtnClick );

// table body

// filterData.forEach({

   // tbody.append('tr');
   // Object.enteries(filterData).forEach( value => row.append('th').text(value));


// });

   
// d3.select('tr>table-head').Date(inputValue);
//    d3.select('tr>table-head').City(inputValue);
//    d3.select('tr>table-head').State(inputValue);
//    d3.select('tr>table-head').Country(inputValue);
//    d3.select('tr>table-head').Shape(inputValue);
//    d3.select('tr>table-head').Duration(inputValue);
//    d3.select('tr>table-head').Comments(inputValue); 






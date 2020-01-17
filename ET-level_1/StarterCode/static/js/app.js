// from data.js
var tableData = data;
console.log(tableData);
// YOUR CODE HERE!

// get handle to the table body
var tbody= d3.select('tbody');

// Create the table of data

tableData.forEach((record) => {
   var row=tbody.append(('tr'));
   Object.values(record).forEach(value => row.append('td').text(value));
});

d3.select('table').attr('class','table table-striped');


  //  function to handle of click button

var filterButton= d3.select('.btn');

filterButton.on("click", function (){
   var textBox= d3.select('.form-control');
   console.log('this is text box', textBox);

   // attr of inpeut 
   var inputValue=textBox.attr('value');
   console.log('Input Value',inputValue );
  
   // filter the table based on the input values

   var filterDate= inputValue.filter(dateRecord => dateRecord.datetime === inputValue);
   console.log(filterDate);

   var filterState= inputValue.filter(stateRecord => stateRecord.State === inputValue);

   var filterCountry= inputValue.filter(countryRecord => countryRecord.Country === inputValue);
   var filterShape= inputValue.filter(shapeRecord => shapeRecord.Shape === inputValue);
   var filterDuration= inputValue.filter(durationRecord => durationRecord.Duration === inputValue);
   
});








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

// Click Handler

function clickHandler(){

   // d3.event.preventDefault();
   filterButton.on("click", function (){
      var textBox= d3.select("#datetime");
      console.log('this is text box', textBox);

      // attr of inpeut 
      var inputValue=textBox.property('value');
      // var inputValue=textBox.attr('value','');

      // var inputValue=d3.event.target.value;
      console.log('Input Value',inputValue );
   
      // filter the table based on the input values
      

      var filterDate= tableData.filter(dateRecord => dateRecord.datetime === inputValue);
         return filterDate;
      
      // console.log(filterDate);


     });

      // tbody.html("");
      // var filterCity= tableData.filter(stateRecord => stateRecord.city === inputValue);
      // var filterState= tableData.filter(stateRecord => stateRecord.State === inputValue);
      // var filterCountry= tableData.filter(countryRecord => countryRecord.country === inputValue);
      // var filterShape= tableData.filter(shapeRecord => shapeRecord.shape === inputValue);
      // var filterDuration= tableData.filter(durationRecord => durationRecord.durationMinutes === inputValue);
      
   // });

   // d3.event.preventDefault();
 
}

filterButton.on("click",clickHandler);


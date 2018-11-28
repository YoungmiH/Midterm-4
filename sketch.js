

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);



// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Clothing, Shoes & Accessories',     86339264],
    ['Books',      47294403],
    ['Home & Kitchen',  28842812],
    ['Sports & Outdoors', 17468747],
    ['Automotive',   12453235]
  ]);

  var options = {
    title: 'US Product Categories',
    'width':800,
    'height':400,
    slices: {
            0: { color: '#FC3A52' },
            1: { color: '#59C2A7' },
            2: { color: '#F9B248' },
            3: { color: '#642379' },
            4: { color: '#02BEC4' }

          },
  };


  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

         chart.draw(data, options);
}

//Japan
function drawChart1() {

  var data1 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Clothing, Shoes & Accessories',     14673421],
    ['Books',      6181990],
    ['Home & Kitchen',  5942317],
    ['Toys & Games', 2075536],
    ['Music',   1942824]
  ]);

  // Set chart options

  var options = {
    title: 'Japan Product Categories',
    'width':800,
    'height':400,
    slices: {
            0: { color: '#FC3A52' },
            1: { color: '#59C2A7' },
            2: { color: '#F9B248' },
            3: { color: '#05668D' },
            4: { color: '#372154' }

          },

  };

var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

       chart.draw(data1, options);
}

//UK

function drawChart2() {

  var data2 = google.visualization.arrayToDataTable([
    ['Category', 'Number of Product'],
    ['Books',     17103472],
    ['Clothing, Shoes & Accessories',      6181990],
    ['Home & Garden',  6707283],
    ['Toys & Games', 5351373],
    ['Music',   3641296]
  ]);

  // Set chart options

  var options = {
    title: 'UK Product Categories',
    'width':800,
    'height':400,
    slices: {
            0: { color: '#59C2A7' },
            1: { color: '#FC3A52' },
            2: { color: '#F9B248' },
            3: { color: '#05668D' },
            4: { color: '#372154' }

          },
  };

var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

       chart.draw(data2, options);
}


//UA

function drawChart3() {

  var data3 = google.visualization.arrayToDataTable([
    ['Category', 'Number of Product'],
    ['Books',  346466],
    ['Home',     199325],
    ['Clothing, Shoes & Accessories',      190940],
    ['Music', 109729],
    ['Electronics',   109705]
  ]);



  // Set chart options

  var options = {
    title: 'UA Product Categories',
    'width':800,
    'height':400,
    slices: {
            0: { color: '#59C2A7' },
            1: { color: '#F9B248' },
            2: { color: '#FC3A52' },
            3: { color: '#372154' },
            4: { color: '#6FB9D4' }

          },
  };

var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

       chart.draw(data3, options);
}

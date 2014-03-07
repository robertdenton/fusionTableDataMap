//make a new map in the mapCanvas div
function initialize() {
  google.maps.visualRefresh = true;
  var map = new google.maps.Map(document.getElementById('googft-mapCanvas'), {
    center: new google.maps.LatLng(31.203405 , -80.859375),//put the center here
      zoom: 3,//zoom to this level
      disableDefaultUI: false,//default UI on/off
      streetViewControl: false,//street view on/off
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //put on a fustion table layer
    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
      query: {
        select: "geometry",//pull the column geometry
        from: "1DitJbSHS-mE6eRiaRS4ZrU1tXutKplMqPmQgCio",//from this fusion table
        where: ""
      },
      suppressInfoWindows:true,//turn off the infowindows from that fusion table
      options: { //pull in the buckets styling
        styleId: 2,
        templateId: 2
      }
    });
    //With thanks to Matt Neslon: http://www.mattwebdev.com
    google.maps.event.addListener(layer, 'click', displayInfo);//listen for a click
      function displayInfo(address){//on something in the map
        var row = address.row;
        if (row.hasOwnProperty('info')){//if you click on something that has a value in the 'info' column
            myHtml = row['info'].value;//put what is in that cell in myHtml
          }
      document.getElementById('statebox').innerHTML = myHtml;//and put that into the statebox div
    }
  }

//Do the same for Hawaii
function initializeHawaii() {
  google.maps.visualRefresh = true;
  var map = new google.maps.Map(document.getElementById('googft-mapCanvasHawaii'), {
    center: new google.maps.LatLng(20.086889 , -158.406372),
    zoom: 4,
    disableDefaultUI: true,
    suppressInfoWindows:true,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  layer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "geometry",
      from: "1DitJbSHS-mE6eRiaRS4ZrU1tXutKplMqPmQgCio",
      where: ""
    },
    suppressInfoWindows:true,      
    options: {
      styleId: 2,
      templateId: 2
    }
  });
  google.maps.event.addListener(layer, 'click', displayInfo);
    function displayInfo(address){
      var row = address.row;
      if (row.hasOwnProperty('info')){
          myHtml = row['info'].value;
        }
    document.getElementById('statebox').innerHTML = myHtml;
  }
}

//And Alaska
function initializeAlaska() {
  google.maps.visualRefresh = true;
  var map = new google.maps.Map(document.getElementById('googft-mapCanvasAlaska'), {
    center: new google.maps.LatLng(65, -152),
    zoom: 2,
    disableDefaultUI: true,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  layer = new google.maps.FusionTablesLayer({
    map: map,
    heatmap: { enabled: false },
    query: {
      select: "col2\x3e\x3e1",
      from: "1DitJbSHS-mE6eRiaRS4ZrU1tXutKplMqPmQgCio",
      where: ""
    },
    suppressInfoWindows:true,      
    options: {
      styleId: 2,
      templateId: 2
    }
  });
      google.maps.event.addListener(layer, 'click', displayInfo);
    function displayInfo(address){
      var row = address.row;
      if (row.hasOwnProperty('info')){
          myHtml = row['info'].value;
        }
    document.getElementById('statebox').innerHTML = myHtml;
  }
}
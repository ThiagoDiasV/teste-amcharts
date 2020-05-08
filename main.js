am4core.ready(function () {
  var chart = am4core.create('chartdiv', am4maps.MapChart);

  // chart.geodata = am4geodata_brCE;

  // também não funciona
  chart.geodataSource.url = 'brCE.json';

  chart.projection = new am4maps.projections.Mercator();

  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  polygonSeries.useGeodata = true;

  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = '{NM_MUNICIP}';
  polygonTemplate.fill = am4core.color('#74B266');

  var hs = polygonTemplate.states.create('hover');
  hs.properties.fill = am4core.color('#367B25');

  chart.zoomControl = new am4maps.ZoomControl();
});

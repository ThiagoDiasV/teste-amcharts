/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 *
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */

// Create map instance
var chart = am4core.create('chartdiv', am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_brCE;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = '{NM_MUNICIP}';
polygonTemplate.fill = am4core.color('#74B266');

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create('hover');
hs.properties.fill = am4core.color('#367B25');

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();

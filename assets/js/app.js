// MODULE
var chartApp = angular.module('chartApp',["ng-fusioncharts"]);

// CONTROLLER

chartApp.controller('chartController', function($scope) {
//chart definition
$scope.dataSource = 

{
        "chart": {
          "caption": "WorlWide Users of the Service",
          "subcaption": "For different services",
          "linethickness": "2",
          "numberSuffix": "%",
          "showvalues": "0",
          "formatnumberscale": "1",
          "labeldisplay": "ROTATE",
          "slantlabels": "1",
          "divLineAlpha": "50",
          "divLineColor": "#1E90FF",
          "anchoralpha": "1",
          "animation": "1",
          "legendborderalpha": "20",
          "drawCrossLine": "1",
          "adjustDiv": "0",
          "numDivLines": "9",
          "yAxisMinValue": "0",
          "yAxisMaxValue": "100", 
          "crossLineColor": "#0d0d0d",
          "borderAlpha": "0",
          "crossLineAlpha": "50",
          "tooltipGrayOutColor": "#80bfff",
          "theme": "zune"
        },
        "categories": [{
          "category": [{
            "label": "Q1'12"
          }, {
            "label": "Q2'12"
          }, {
            "label": "Q3'12"
          }, {
            "label": "Q4'12"
          }, {
            "label": "Q1'13"
          }, {
            "label": "Q2'13"
          }, {
            "label": "Q3'13"
          }, {
            "label": "Q4'13"
          }, {
            "label": "Q1'14"
          }, {
            "label": "Q2'14"
          }, {
            "label": "Q3'14"
          }, {
            "label": "Q4'14"
          }]
        }],
        "dataset": [{
          "seriesname": "Samsung",
          "data": [{
            "value": "76"
          }, {
            "value": "77"
          }, {
            "value": "67"
          }, {
            "value": "69"
          }, {
            "value": "86"
          }, {
            "value": "93"
          }, {
            "value": "82"
          }, {
            "value": "90"
          }, {
            "value": "99"
          }, {
            "value": "10"
          }, {
            "value": "10"
          }, {
            "value": "10"
          }]
        }, {
          "seriesname": "Nokia",
          "data": [{
            "value": "10"
          }, {
            "value": "12"
          }, {
            "value": "10"
          }, {
            "value": "97"
          }, {
            "value": "10"
          }, {
            "value": "11"
          }, {
            "value": "81"
          }, {
            "value": "83"
          }, {
            "value": "82"
          }, {
            "value": "85"
          }, {
            "value": "63"
          }, {
            "value": "64"
          }]
        }, {
          "seriesname": "Apple",
          "data": [{
            "value": "14"
          }, {
            "value": "16"
          }, {
            "value": "18"
          }, {
            "value": "19"
          }, {
            "value": "13"
          }, {
            "value": "37"
          }, {
            "value": "31"
          }, {
            "value": "28"
          }, {
            "value": "28"
          }, {
            "value": "46"
          }, {
            "value": "38"
          }, {
            "value": "37"
          }]
        },{
        "seriesname": "New",
          "data": [{
            "value": "10"
          }, {
            "value": "20"
          }, {
            "value": "30"
          }, {
            "value": "40"
          }, {
            "value": "50"
          }, {
            "value": "60"
          }, {
            "value": "70"
          }, {
            "value": "80"
          }, {
            "value": "90"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }]
        }]
}

});
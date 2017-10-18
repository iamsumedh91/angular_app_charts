// MODULE
var chartApp = angular.module('chartApp',["ng-fusioncharts", "ngCookies"]);



// CONTROLLER

chartApp.controller('chartController', function($scope, $http, $rootScope) {

// Data from API
$scope.samsung = {
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
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }, {
            "value": "20"
          }]
        };

$scope.nokia = {
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
          }, {
            "value": "50"
          }, {
            "value": "64"
          }, {
            "value": "46"
          }, {
            "value": "28"
          }, {
            "value": "73"
          }, {
            "value": "85"
          }, {
            "value": "63"
          }, {
            "value": "55"
          }]
        };

$scope.apple = {
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
          }, {
            "value": "47"
          }, {
            "value": "37"
          }, {
            "value": "41"
          }, {
            "value": "55"
          }, {
            "value": "59"
          }, {
            "value": "46"
          }, {
            "value": "64"
          }, {
            "value": "73"
          }]
        };

$scope.new = {
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
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }, {
            "value": "100"
          }]
        };

$scope.samsungCheck = false;
$scope.nokiaCheck = false;
$scope.appleCheck = false;
$scope.newCheck = false;
$scope.new_dataCheck = false;



//Chart Definition

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
          "canvasBgAlpha": "0",
          "canvasBgColor": "#B0E0E6",
          "showCanvasBorder": "0",
          "bgColor": "#B0E0E6",
          "bgAlpha": "10",
          "crossLineAlpha": "50",
          "divLineDashed": "1",
          "divLineAlpha": "50",
          "xAxisName": "Timeline (in Quarters)",
          "yAxisName": "Users (in %)",
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
          },{
            "label": "Q1'15"
          }, {
            "label": "Q2'15"
          }, {
            "label": "Q3'15"
          }, {
            "label": "Q4'15"
          },{
            "label": "Q1'16"
          }, {
            "label": "Q2'16"
          }, {
            "label": "Q3'16"
          }, {
            "label": "Q4'16"
          }]
        }],
        "dataset": ["", "", "", ""]
}

$scope.new_data_call = function (){
		$http({
        method : "POST",
        url : "http://localhost/charts/test_user/action/info"
      }).then(function mySuccess(response) {
        $scope.new_data = response.data;
    });
}
$scope.new_data_call();

$scope.new_dataFunction = function(new_dataCheck)
{
	if (new_dataCheck) 
	{
		$scope.dataSource.dataset.push($scope.new_data);
	}
	else
	{
        var index = $scope.dataSource.dataset.indexOf($scope.new_data);
		if (index > -1) {
            $scope.dataSource.dataset.splice(index, 1);
        }
	}
}

$scope.samsungFunction = function(samsungCheck)
{
	if (samsungCheck) 
	{
		$scope.dataSource.dataset.push($scope.samsung);
	}
	else
	{
		var index = $scope.dataSource.dataset.indexOf($scope.samsung);
		if (index > -1) {
            $scope.dataSource.dataset.splice(index, 1);
        }
	}
}

$scope.nokiaFunction = function(nokiaCheck)
{
	if (nokiaCheck) 
	{
		$scope.dataSource.dataset.push($scope.nokia);
	}
	else
	{
		var index = $scope.dataSource.dataset.indexOf($scope.nokia);
		if (index > -1) {
            $scope.dataSource.dataset.splice(index, 1);
        }
	}
}

$scope.appleFunction = function(appleCheck)
{
	if (appleCheck) 
	{
		$scope.dataSource.dataset.push($scope.apple);
	}
	else
	{
		var index = $scope.dataSource.dataset.indexOf($scope.apple);
		if (index > -1) {
            $scope.dataSource.dataset.splice(index, 1);
        }
	}
}

$scope.newFunction = function(newCheck)
{
	if (newCheck) 
	{
		$scope.dataSource.dataset.push($scope.new);
	}
	else
	{
		var index = $scope.dataSource.dataset.indexOf($scope.new);
		if (index > -1) {
            $scope.dataSource.dataset.splice(index, 1);
        }
	}
}
});
app.run(function($rootScope){
    $rootScope.color = "red";
})

app.controller("eventsController", function($scope){
    $scope.count = 0;
    $scope.showH2 = true;
    $scope.increment = function(){
        // $scope.count++;
        $scope.showH2 = !$scope.showH2;
    }
    $scope.myFunction = function(event){
        $scope.x = event.clientX;
        $scope.y = event.clientY;
    }
})

app.controller('jsonController', function($scope, $http){
    $http.get("https://raw.githubusercontent.com/anmolrajaroraa/json/master/items").then(function(response){
        $scope.mobilesJson = response.data.itemdetails;
    })
})

app.controller('newController', function($scope, $location){
    $scope.myToggleButton = true;
    $scope.pageUrl = $location.absUrl();
    $scope.humans = [
        {name : 'Jaani', country : 'Norway'},
        {name : 'Jenny', country : 'Sweden'},
        {name : 'Bob', country : 'England'},
        {name : 'Tom', country : 'Norway'},
        {name : 'Jim', country : 'Denmark'},
        {name : 'Joe', country : 'Sweden'},
        {name : 'Ryan', country : 'Denmark'},
        {name : 'Mary', country : 'India'},
        {name : 'Twinkle', country : 'India'},
        {name : 'Jasmine', country : 'India'}
        // 'Jenny', 'Jaani', 'Bob', 'Tom', 'Jim', 'Joe', 'Ryan', 'Mary', 'Twinkle', 'Jasmine'
    ];
    $scope.smartphones = {
        one_plus : {model_1 : "7T", model_2 : "7T pro"},
        apple : {model_1 : "iphone 11", model_2 : "iphone 11 pro"},
        samsung : {model_1 : "note 9", model_2 : "S10"},
        redmi : {model_1 : 'poco f1', model_2 : "note 5"},
        vivo : {model_1 : 'f17', model_2 : "V32"}
    }
})

app.controller('httpController', function($scope, $http, $timeout, $interval, convertDecimalToHexaDecimal){

    //.get()
    //.delete()
    //.head()
    //.jsonp()
    //.patch()
    //.post()
    //.put()
    // $http.get("new.html").then(function(response){
    //     $scope.res = response.data;
    // })

    $http({
        method : 'GET',
        url : 'new2.html'
    }).then(function success(response){
        $scope.res = response.data;
        $scope.statusCode = response.status;
        $scope.status_text = response.statusText
    }).catch(function error(response){
        $scope.res = response.data;
        $scope.statusCode = response.status;
        $scope.status_text = response.statusText
    })

    // $timeout(function(){
    //     $scope.res = "Text changed by $timeout"
    // }, 5000)

    $scope.clock = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.clock = new Date().toLocaleTimeString();
    }, 1000)

    $scope.hex = convertDecimalToHexaDecimal.doConversion(15);
})

app.controller('myController', function($scope){
    // angular.module('myApp', [])
    // .controller('myController', function($scope){
    $scope.color = "blue";
    $scope.firstName = "Jenny";
    $scope.lastName = "Smith";
    $scope.humans = [
        {name : 'Jaani', country : 'Norway'},
        {name : 'Jenny', country : 'Sweden'},
        {name : 'Bob', country : 'England'},
        {name : 'Tom', country : 'Norway'},
        {name : 'Jim', country : 'Denmark'},
        {name : 'Joe', country : 'Sweden'},
        {name : 'Ryan', country : 'Denmark'},
        {name : 'Mary', country : 'India'},
        {name : 'Twinkle', country : 'India'},
        {name : 'Jasmine', country : 'India'}
        // 'Jenny', 'Jaani', 'Bob', 'Tom', 'Jim', 'Joe', 'Ryan', 'Mary', 'Twinkle', 'Jasmine'
    ];
    $scope.showFullName = function(){
        return $scope.firstName + ' ' + $scope.lastName;
    }

    $scope.changeTableOrder = function(columnName){
        $scope.orderByColumn = columnName;
    }
})

//    $rootScope - It is the scope created on the HTML element that contains the ng-app directive, $rootScope is available throughout your module

//scope - binding part b/w html(view) and controller (js object)

//filters - currency, date, filter (selects a subset of items from an array), json, limitTo, lowercase, uppercase, number, orderBy
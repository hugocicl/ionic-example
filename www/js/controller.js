angular.module('app.controllers', [])

.controller('indexController', function($scope, $http) {
    $scope.exampleData = [
        {personName: 'Hugo'},
        {personName: 'Ricardo'}
    ]
})



.controller('indexController', function($scope, $http) {


    const url = 'https://facebook.github.io/react-native/movies.json';

    let moviesList = [];
    $scope.moviesList;

    $scope.finalData = [
        {
            colorName: 'Blue'
        },
        {
            colorName: 'green'
        }
    ];

    $scope.getPlatform = function () {
        return true;
    }

    $scope.isAndroid = function () {
        return false;
    }

    $scope.isIos = function () {
        return true;
    }
    
    $scope.example = function () {
        let number = 10;
        if (number !== 10) {
            return "ng-show";
        } else {
            return "ng-hide";
        }
    }

    $scope.getMovies = function () {
        
        $http.get(url)
        .success(function (data) {
            $scope.moviesList = data.movies;
        })
        .error( function (err) {
            console.log(err);
        });
    
    
    }

    $scope.postExample = function () {

        $http({
            method: 'POST',
            url: 'https://movies.org',
            data: { id: 25 },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }        
        })
        .success(function(response) {
            // handle success things
            console.log(response);
        })
        .error(function(data, status, headers, config) {
            // handle error things
        })


        
    }
})

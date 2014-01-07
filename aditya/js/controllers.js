'use strict';

var takeStartingAt = function (data, start) {
  var result = [];
  var skip = true;
  for (var i = 0; i < data.length; i++) {
    if (data[i].slug === start) {
      skip = false;
    }
    if (skip) {
      continue;
    }
    result.push(data[i]);
  }
  return result;
};

var endpoint = "http://two3-rss.nodejitsu.com"//"http://qz.local:3000"
var oEndpoint = endpoint;
/* Controllers */
angular.module('two1App.controllers', []).controller('PostsController', function ($scope, $location, $http, $routeParams, $element, $timeout) {
    if($location.path().length > 0){
      endpoint = endpoint + "/offset" + $location.path();      
      //console.log(endpoint);
      //console.log($location.path().length);
    }
    //console.log(endpoint);
    $scope.loadPosts = function() {
      $scope.posts = [];
        $http.defaults.useXDomain = true;
        var httpRequest = $http({
            method: 'GET',
            url: endpoint+"/"+0
        }).success(function(data, status) {
            $scope.posts.push(data);
        });
        
    };

    $scope.updateShareThis = function(){
      $timeout(function() { 
        if (stButtons){stButtons.locateElements();}
       }, 0);
    };

    $scope.loadTitles = function($element){
        $scope.titles = [];
        $http.defaults.useXDomain = true;
        var httpRequest = $http({
            method: 'GET',
            url: oEndpoint+"/slugs/0/10"
        }).success(function(data, status) {
            $scope.titles = data;
        });
    };
    $scope.loadTitles();
    $scope.loadPosts();

    var slugs = [];
    $scope.changeUrl = function(slug, index, inview, inviewpart){
      //console.log("s: "+ slug +" v:"+inview+ " p:"+inviewpart);
      if(document.body.scrollTop == 0){return false;}
      slugs[index] = slug;
      if(inview == true){
        $location.path("/"+slug);
      }else{
        //console.log('loading..');
        //$scope.loadNext();
      }
      
      var pslug = slugs[index-1];
      if(inview == false && angular.isUndefined(pslug) == false){ // Assuming that inview false means that the current slug is going out of the view by scrolling up
        $location.path("/"+pslug);
      }

    };

    var cnt = 0;
    $scope.loadNext = function(inview){
      //console.log("Loading..");
      if(document.body.scrollTop == 0){return false;}
      if(inview == false){return false;}
      cnt +=1;
      $http.defaults.useXDomain = true;
      var httpRequest = $http({
          method: 'GET',
          url: endpoint+"/"+cnt,
      }).success(function(data, status) {
              if(data == ""){return false;}
              $scope.posts.push(data);
              //if (stButtons){stButtons.locateElements();}
      });

    };

    $scope.getSlug = function( str ) {
      if(angular.isUndefined(str)){return "";}
      return str.split( "/" ).filter(function( n ) {
        return n; // What is this supposed to do?
      }).reverse()[ 0 ];
    };

    $scope.slugClass = function(slug){
      return {active: slug == $location.path().replace("/" , "")};
    };

});
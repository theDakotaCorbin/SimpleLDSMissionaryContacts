var app = angular.module('angularContacts', []);



app.controller('mainCtrl', function($scope, mainService) {
  mainService.getPeople().then(function(response) {
  $scope.persons = response.data
        console.log(response);
  })
  $scope.newPerson = function(person) {
  mainService.newPerson(person).then(function(response) {
    console.log(response);
       mainService.getPeople().then(function(response) {
  $scope.persons = response.data
        console.log(response);
  })
  }) 
  }
  
  
  $scope.deletePerson = function(person) {
    mainService.deletePerson(person).then(function(response){
        console.log(response);
             mainService.getPeople().then(function(response) {
  $scope.persons = response.data
        console.log(response);
  })
    });
  }
  
  
})
app.service('mainService', function($http) {
    this.getPeople = function () {
        return $http.get('/api/Persons')
    }
    this.newPerson = function (newPerson) {
        return $http.post('/api/newPerson', newPerson)
    }
    this.deletePerson = function (deletePerson) {
        return $http({
            method: 'DELETE',
            url: '/api/delete/' + deletePerson
        }).then(function(resp){
            return resp;
        });
        
    };
    
    
});




















//CREATE NEW CONTACT EXPANDER FUNCTION
$(function(){

  $('.grid p, .grid .right-module').hide();
  $('.grid h4').addClass('pointer').click(function() {
    var $article  = $(this).closest(".grid"),
        $siblings = $article.find("p")
    if ($article.hasClass('expanded')) {
      $siblings.slideUp('fast').promise().done(function() {
        $article.removeClass('expanded');
      });
    } else {
      $article.addClass('expanded');
      $siblings.slideDown('fast');
      $article.siblings().find('p')
        .slideUp('fast').promise().done(function() {
        $article.siblings().removeClass('expanded');
      });
    }
  });

});





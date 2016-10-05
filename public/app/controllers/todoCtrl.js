angular.module('todoCtrl', [])
.controller('characterCtrl', ['$scope', '$firebaseArray', ($scope, $firebaseArray)=>{
  $scope.title="TODO APPLICATION!";
  $scope.character;

  var ref = new Firebase("https://todo-d1575.firebaseio.com/characters");
  $scope.characters = $firebaseArray(ref);

  $scope.addCharacter=()=> $scope.characters.$add({name:$scope.character});
  $scope.removeCharacter=(character)=> $scope.characters.$remove(character);

}]);

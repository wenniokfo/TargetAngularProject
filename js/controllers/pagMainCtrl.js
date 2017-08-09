angular.module("MyApp").controller("pagMainCtrl", function ($scope, $rootScope, $http, $localStorage) {
    $scope.app="Target";
    $scope.qtdTestCases = 0;
    $scope.arrayTituloTestesCases = null;

  })
  .controller('materializeCtrl', function ($scope) {
    $scope.openModal = function ($event) {
      var modalInstance = $modal.open({
        templateUrl: 'views/componentes/modal-detalhes.html',
        anchorElement: $event ? angular.element($event.target) : undefined,
        controller: 'ModalInstanceCtrl'
      });
    };
  })
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.select = function () {
      $modalInstance.close();
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });

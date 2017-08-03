angular.module("MyApp").controller("pagMainCtrl", function ($scope, $rootScope, $http, $localStorage) {
    $scope.app="Target";
    $scope.qtdTestCases = 0;
    $scope.arrayTituloTestesCases = null;

    function readSingleFile(evt) {
      console.log("chamou readSingleFile");

              //Retrieve the first (and only!) File from the FileList object
              var f = evt.target.files[0];
              if (f) {
                  var r = new FileReader();
                  r.onload = function (e) {
                      var contents = e.target.result;
                      document.getElementById("ReadResult").innerHTML = contents;

                    // var qtdTestCase = contents.getElementsByTagName('h3');
                    // var testcases = 0;
                    //
                    // for (var i = 0; i < qtdTestCase.length; i++) {
                    //     testcases++;
                    //     var nametestecase = qtdTestCase.item(i);
                    //     scope.arrayTituloTestesCases.push(testecase);
                    // }
                    // $scope.qtdTestCase = testecases;
                    // alert("QTD testes cases is "+ testecase);
                  }
                  r.readAsText(f);
              } else {
                  alert("Failed to load file");
              }
          }
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

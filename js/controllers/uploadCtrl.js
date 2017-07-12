
var myModule = angular.module('MyApp',[]);
myModule.controller('uploadCtrl', function () {
    function loadFile(file){
      console.log("Entrou no Load");
        file.ready(function () {
          if(file != null){
            // String a = file.find("html").text();
            console.log("AAA", a);
        }
        });
    };
});

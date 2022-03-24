angular.module('ifsp').controller('CursosController',
    function($resource, $scope) {
        $scope.cursos = [];
        $scope.filtro = '';
        $scope.mensagem = { texto: '' };
        var Curso = $resource('/cursos');

        function buscaCursos() {
            Curso.query(
                function(cursos) {
                    $scope.cursos = cursos;
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de cursos");
                    console.log(erro);
                }
            );
        }
        buscaCursos();
        $scope.remove = function(curso) {
            console.log(curso);
            Contato.delete({ id: curso._id },
                           buscaCursos,
                           function(erro) {
                                console.log("Não foi possível remover o curso"};
                                console.log(erro);
                                $scope.mensagem = { texto: "Não foi possível remover o curso" };
                            });
        };      
    });

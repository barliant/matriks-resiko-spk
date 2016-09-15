angular.module("spkpisttl")
    .controller("teganganTembusCtrl", function($scope) {
        

        
        // keterangan -1 :mulai, -2 : selesai

        // note for my honey: mappingin questions yah syg <3 <3 <3 
        var masterQuestions = [{
            id: 0,
            question: "Apakah tegangan tembus dalam kondisi baik?",
            ans0: "Baik",
            ans1: "Buruk",
            nextIfAns0: -2,
            nextIfAns1: 1 //harusnya 1
        }, {
            id: 1,
            question: "Apakah kadar air dalam kondisi baik?",
            ans0: "Baik",
            ans1: "Buruk",
            nextIfAns0: 0,
            nextIfAns1: 2
        }, {
            id: 2,
            question: "Bagaimana kadar air di dalam kertas ?",
            ans0: "Cukup basah/basah/sangat basah",
            ans1: "Kering",
            nextIfAns0: 0,
            nextIfAns1: 3
        }, {
            id: 3,
            question: "Check hasil pengujian kadar asam?",
            ans0: "Baik",
            ans1: "Buruk",
            nextIfAns0: -2,
            nextIfAns1: 9, // (id sedimen)
        }, {
            id: 4,
            question: "Check validasi pengujian kadar air pada Furan?",
            ans0: "<2400ppb",
            ans1: ">2400ppb",
            nextIfAns0: 8, //(id pertimbangan),
            nextIfAns1: 5

        }, {
            id: 5,
            question: "Bagaimana kondisi Viscosity dan flash point?",
            ans0: "Baik, Reklamasi (Regenerasi)",
            ans1: "Buruk, Ganti Minyak",
            nextIfAns0: 7,
            nextIfAns1: 7
        }, {
            id: 6,
            question: "Pada Reklamasi (Regenerasi) perlu ganti minyak?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: -2,
            nextIfAns1: 9 //blom tau
        }, {
            id: 7,
            question: "Perlukah pergantian minyak?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: -2,
            nextIfAns1: 8 // run to fail
        }, {
            id: 8,
            question: "Apakah pertimbangan Run to Fail?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: -2,
            nextIfAns1: 9
        },{
            id: 9,
            question: "Kondisi Sedimen?",
            ans0: "Baik/Cukup, lakukan check validasi pengujian",
            ans1: "Buruk",
            nextIfAns0: -2,
            nextIfAns1: 10 //check furan filter
        },{
            id: 10,
            question: "Kondisi Furan?",
            ans0: "< 2400 ppb, ",
            ans1: "> 2400 ppb",
            nextIfAns0: 99,
            nextIfAns1: 100 //check furan filter
        },{
            //id: 99,
            //question: "Pertimbangan filter debit rendah",
            //ans0: "Baik/Cukup, lakukan check validasi pengujian",
            //ans1: "Buruk",
            //nextIfAns0: -2,
            //nextIfAns1: 10 //check furan filter
        }];


        /*  DECISION TREE */

        // initialization
        $scope.question = {};
        $scope.hideQuestion = true;
        $scope.hideFinish = true;
        $scope.question.question = masterQuestions[0].question;
        $scope.question.ans0 = masterQuestions[0].ans0;
        $scope.question.ans1 = masterQuestions[0].ans1;
        $scope.question.nextIfAns0 = masterQuestions[0].nextIfAns0;
        $scope.question.nextIfAns1 = masterQuestions[0].nextIfAns1;
        $scope.question.id = masterQuestions[0].id;
        

        var qHisto = new Array();

        $scope.btnMulai = function() {
            $scope.hideQuestion = false;
            $scope.hideMulai = true;
            qHisto.push(-1);
        };

        $scope.backQuestion = function() {
            var idPrev = qHisto.pop();
            if (idPrev == undefined) { // munculkan tombol mulai
                $scope.hideQuestion = true;
                $scope.hideMulai = false;
                $scope.hideFinish = true;
            } else if (idPrev == -1) {
                $scope.hideQuestion = true;
                $scope.hideMulai = false;
                $scope.hideFinish = true;
            } else {
                idPrev = parseInt(idPrev);
                $scope.question = getMember(masterQuestions, idPrev);
                $scope.hideQuestion = false;
                $scope.hideMulai = true;
                $scope.hideFinish = true;
            }
        };

        $scope.nextQuestion = function(ans) {

            if ($scope.question.ans) {
                qHisto.push($scope.question.id);
                
                if (ans == 0) { 
                    var id = parseInt($scope.question.nextIfAns0);
                    if (id == -2) {
                        $scope.hideQuestion = true;
                        $scope.hideMulai = true;
                        $scope.hideFinish = false;
                    } 
                    
                    else {
                        $scope.question = getMember(masterQuestions, id);
                        
                        if (id == 99) {
                            alert("Pertimbangan filter debit rendah")
                            $scope.hideQuestion = true;
                            $scope.hideMulai = true;
                            $scope.hideFinish = false;
                        };
                        
                    }
                        
                } else if (ans == 1) {
                    var id = parseInt($scope.question.nextIfAns1);
                    if (id == -2) {
                        $scofpe.hideQuestion = true;
                        $scope.hideMulai = true;
                        $scope.hideFinish = false;
                    } else
                        $scope.question = getMember(masterQuestions, id);
                        if (id == 100) {
                            alert("Normal Filter")
                            $scope.hideQuestion = true;
                            $scope.hideMulai = true;
                            $scope.hideFinish = false;
                        }
                }
            } else {
                alert("Jawaban harus dipilih!")
            }
        };
    });

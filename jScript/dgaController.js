angular.module("spkpisttl")
    .controller("dgaCtrl", function($scope) {



        // keterangan -1 :mulai, -2 : selesai

        // note for my honey: mappingin questions yah syg <3 <3 <3 
        var masterQuestions = [{
            id: 0,
            question: "Apakah min 2 key gases > condition 1?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 1,
            nextIfAns1: 4 //min 2 DCG > cond 1 
        }, {
            id: 1,
            question: "Apakah min 1 DCG = condition 4?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 99, //after alert muncul pertanyaan id 3
            nextIfAns1: 2
        }, {
            id: 2,
            question: "Min 1 DCG = condition 3 ?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 99, //after alert muncul pertanyaan id 3
            nextIfAns1: 99 //
        }, {
            id: 3,
            question: "Check kondisi DGA?",
            ans0: "Normal",
            ans1: "Tidak Normal",
            nextIfAns0: 10, //id DGA CO > Cond 2
            nextIfAns1: 11, //id CO>Cond 2
        }, {
            id: 4,
            question: "Min 2 DCG > condition 1?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 5, //,
            nextIfAns1: 7 //id 1DCG > cond 1

        }, {
            id: 5,
            question: "Min 1 DCG = condition 4?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 99, //after alert muncul pertanyaan id 3
            nextIfAns1: 6
        }, {
            id: 6,
            question: "Min 1 DCG = condition 3?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 99,
            nextIfAns1: 100 //after alert 6 muncul pertanyaan id 3
        }, {
            id: 7,
            question: "1 DCG > condition 1?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 8,
            nextIfAns1: 101 // alert 9
        }, {
            id: 8,
            question: "1 DCG = condition 4?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 102,
            nextIfAns1: 9
        }, {
            id: 9,
            question: "1 DCG = condition 3?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: 102,
            nextIfAns1: 100 //alert 6 then question id 3
        }, {
            id: 10,
            question: "CO > Condition 2?",
            ans0: "Ya ",
            ans1: "Tidak",
            nextIfAns0: 12,
            nextIfAns1: -2 //check furan filter
        }, {
            id: 11,
            question: "CO > Condition 2?",
            ans0: "Ya ",
            ans1: "Tidak",
            nextIfAns0: 103, //uji ulang melihat trend
            nextIfAns1: 104 //check furan 
        }, {
            id: 12,
            question: "Check validitas Kadar Asam, IFT, dan Warna?",
            ans0: "Valid ",
            ans1: "Tidak Valid",
            nextIfAns0: 13,
            nextIfAns1: -2 
        }, {
            id: 13,
            question: "Lihat hasil pengujian kadar asam",
            ans0: "Baik/Cukup",
            ans1: "Buruk",
            nextIfAns0: -2,
            nextIfAns1: 14 
        },{
            id: 50,
            question: "Furan",
            ans0: " ",
            ans1: " ",
            nextIfAns0: 51,
            nextIfAns1: 51 
        }, {
            id: 51,
            question: "Uji ulang untuk melihat Trend",
            ans0: " ",
            ans1: " ",
            nextIfAns0: 52,
            nextIfAns1: 52 
        }, {
            id: 52,
            question: "Investigasi penyebab dan melihat Act Based TDCG",
            ans0: " ",
            ans1: " ",
            nextIfAns0: -2,
            nextIfAns1: -2 
        },{
            id: 14,
            question: "Check validasi pengujian kadar air pada Furan?",
            ans0: "<2400ppb",
            ans1: ">2400ppb",
            nextIfAns0: 18, //(id pertimbangan),
            nextIfAns1: 15

        }, {
            id: 15,
            question: "Bagaimana kondisi Viscosity dan flash point?",
            ans0: "Baik, Reklamasi (Regenerasi)",
            ans1: "Buruk, Ganti Minyak",
            nextIfAns0: 17,
            nextIfAns1: 17
        }, {
            id: 16,
            question: "Pada Reklamasi (Regenerasi) perlu ganti minyak?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: -2,
            nextIfAns1: 19 //blom tau
        }, {
            id: 17,
            question: "Perlukah pergantian minyak?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: -2,
            nextIfAns1: 18 // run to fail
        }, {
            id: 18,
            question: "Apakah pertimbangan Run to Fail?",
            ans0: "Ya",
            ans1: "Tidak",
            nextIfAns0: -2,
            nextIfAns1: 19
        },{
            id: 19,
            question: "Kondisi Sedimen?",
            ans0: "Baik/Cukup, lakukan check validasi pengujian",
            ans1: "Buruk",
            nextIfAns0: -2,
            nextIfAns1: 20 //check furan filter
        },{
            id: 20,
            question: "Kondisi Furan?",
            ans0: "< 2400 ppb, ",
            ans1: "> 2400 ppb",
            nextIfAns0: 199,
            nextIfAns1: 200 //check furan filter
        },{
            id: 199,
            question: "Pertimbangan filter debit rendah?",
            ans0: " ",
            ans1: " ",
            nextIfAns0: -2,
            nextIfAns1: 0 //check furan filter
        },{
            id: 200,
            question: "Normal Filter",
            ans0: " ",
            ans1: " ",
            nextIfAns0: -2,
            nextIfAns1: 0 //check furan filter
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
        $scope.hideAnswer = true;

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
            if ($scope.question.ans || $scope.hideAnswer == false) {
                qHisto.push($scope.question.id);
                if (ans == 0) {
                    var id = parseInt($scope.question.nextIfAns0);
                    if (id == -2) {
                        $scope.hideQuestion = true;
                        $scope.hideMulai = true;
                        $scope.hideFinish = false;
                        $scope.hideAnswer = true;
                    } else {
                        $scope.question = getMember(masterQuestions, id);
                        if (id == 99) {
                            alert("Action 1")
                            $scope.question = getMember(masterQuestions, 3);
                            $scope.hideQuestion = false;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;
                        } else if (id == 102) {
                            alert("Uji Ulang")
                            $scope.question = getMember(masterQuestions, 3);
                            $scope.hideQuestion = false;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;

                        } else if (id == 50 || id == 51 ) {
                            $scope.question = getMember(masterQuestions, id);
                            $scope.hideQuestion = true;
                            $scope.hideAnswer = false;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;
                        }
                        else if ( id == 52) {
                            $scope.question = getMember(masterQuestions, id);
                            $scope.hideQuestion = true;
                            $scope.hideAnswer = false;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;
                        }
                        else if (id == 199) {
                            $scope.question = getMember(masterQuestions, id);
                            $scope.hideQuestion = true;
                            $scope.hideAnswer = false;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;
                        }
                    }

                } else if (ans == 1) {
                    var id = parseInt($scope.question.nextIfAns1);
                    if (id == -2) {
                        $scofpe.hideQuestion = true;
                        $scope.hideMulai = true;
                        $scope.hideFinish = false;
                    } else if (id == 100) {
                        alert("Aksi 6")
                        $scope.question = getMember(masterQuestions, 3);
                        $scope.hideQuestion = false;
                        $scope.hideMulai = true;
                        $scope.hideFinish = true;
                    } else if (id == 101) {
                        alert("Aksi 9")
                        $scope.question = getMember(masterQuestions, 3);
                        $scope.hideQuestion = false;
                        $scope.hideMulai = true;
                        $scope.hideFinish = true;
                    } 
                    else if (id == 200) {
                            $scope.question = getMember(masterQuestions, id);
                            $scope.hideQuestion = true;
                            $scope.hideAnswer = false;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;
                        }
                    else
                    {
                            $scope.question = getMember(masterQuestions, id);
                            $scope.hideQuestion = false;
                            $scope.hideAnswer = true;
                            $scope.hideMulai = true;
                            $scope.hideFinish = true;
                    }
                }
            } else {
                alert("Jawaban harus dipilih!")
            }
        };
    });

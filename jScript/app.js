$(function() {
    $("#tglJadi").datepicker();
});

var getMember = function(arr, id) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            return arr[i];
        }
    };
}

var master = {
    APP: [{
        id: 0,
        name: "Purwokerto"
    }, {
        id: 1,
        name: "Salatiga"
    }, {
        id: 2,
        name: "RJKB"
    }, {
        id: 3,
        name: "RJBR"
    }],

    GI: [{
        id: 0,
        name: "GI Kebasen"
    }, {
        id: 1,
        name: "GI Banyudono"
    }, {
        id: 2,
        name: "TGRAN"
    }],

    Bay: [{
        id: 0,
        name: "Trafo 4 - 60 MVA"
    }, {
        id: 1,
        name: "Trafo 2 - 60 MVA"
    }],

    Merk: [{
        id: 0,
        name: "Unindo"
    }, {
        id: 1,
        name: "ASEA"
    }],

    Type: [{
        id: 0,
        name: "TTUB 150/60.000"
    }, {
        id: 1,
        name: "TTUB 150/60.000"
    }],

    TegKva: [{
        id: 0,
        name: "150/20"
    }, {
        id: 1,
        name: "150/70"
    }],

    ThnBuat: [2000, 2001, 2002],

    ThnOperasi: [2000, 2001, 2002],
}

angular.module("spkpisttl")
    .controller("MainCtrl", function($scope) {
        $scope.APP = master.APP;
        $scope.GI = master.GI;
        $scope.Bay = master.Bay;
        $scope.Merk = master.Merk;
        $scope.Type = master.Type;
        $scope.TegKva = master.TegKva;
        $scope.ThnBuat = master.ThnBuat;
        $scope.ThnOperasi = master.ThnOperasi;

        $scope.classActiveMenu = 0;
        $scope.selectClassActiveMenu = function(menu) {
            if (menu == 0)
                $scope.classActiveMenu = 0;
            else if (menu == 1)
                $scope.classActiveMenu = 1;
        };

        // sub sistem kumparan
        $scope.kumparanF = 1;
        $scope.kumparanL = 1;
        $scope.kumparanC = 1;
        $scope.kumparanS = 1;
        $scope.kumparanP = 1;
        $scope.kumparanE = 1;

        // sub sistem bushing
        $scope.bushingF = 1;
        $scope.bushingL = 1;
        $scope.bushingC = 1;
        $scope.bushingS = 1;
        $scope.bushingP = 1;
        $scope.bushingE = 1;

        // sub sistem oltc
        $scope.oltcF = 1;
        $scope.oltcL = 1;
        $scope.oltcC = 1;
        $scope.oltcS = 1;
        $scope.oltcP = 1;
        $scope.oltcE = 1;

        // sub sistem konservator
        $scope.konservatorF = 1;
        $scope.konservatorL = 1;
        $scope.konservatorC = 1;
        $scope.konservatorS = 1;
        $scope.konservatorP = 1;
        $scope.konservatorE = 1;

        // sub sistem pendingin
        $scope.pendinginF = 1;
        $scope.pendinginL = 1;
        $scope.pendinginC = 1;
        $scope.pendinginS = 1;
        $scope.pendinginP = 1;
        $scope.pendinginE = 1;

        // sub sistem proteksi
        $scope.proteksiF = 1;
        $scope.proteksiL = 1;
        $scope.proteksiC = 1;
        $scope.proteksiS = 1;
        $scope.proteksiP = 1;
        $scope.proteksiE = 1;

        // sub sistem fireProtection
        $scope.fireProtectionF = 1;
        $scope.fireProtectionL = 1;
        $scope.fireProtectionC = 1;
        $scope.fireProtectionS = 1;
        $scope.fireProtectionP = 1;
        $scope.fireProtectionE = 1;

        // sub sistem minyakTransformator
        $scope.minyakTransformatorF = 1;
        $scope.minyakTransformatorL = 1;
        $scope.minyakTransformatorC = 1;
        $scope.minyakTransformatorS = 1;
        $scope.minyakTransformatorP = 1;
        $scope.minyakTransformatorE = 1;

        // keterangan -1 :mulai, -2 : selesai

        // note for my honey: mappingin questions yah syg <3 <3 <3 
    });

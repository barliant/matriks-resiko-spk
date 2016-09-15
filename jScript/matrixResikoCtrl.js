angular.module("spkpisttl")
    .controller("matrixResikoCtrl", function($scope){
    	$scope.classifyHandler = function() {
    		$scope.risk = "";
    		$scope.action = "";
    		
    		// resiko
    		if ($scope.customerSatisfaction == 1 && $scope.equipmentCost == 1) {
    			$scope.risk = "LOW";		
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.equipmentCost == 2) {
    			$scope.risk = "MODERATE";
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.equipmentCost == 3) {
    			$scope.risk = "LOW";
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.equipmentCost == 4) {
    			$scope.risk = "LOW";
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.equipmentCost == 5) {
    			$scope.risk = "MODERATE";
    		}
			else if ($scope.customerSatisfaction == 2) {
    			$scope.risk = "MODERATE";		
    		}
    		else if ($scope.customerSatisfaction == 3) {
    			$scope.risk = "MODERATE";		
    		}
    		else if ($scope.customerSatisfaction == 4) {
    			$scope.risk = "HIGH";		
    		}
    		else if ($scope.customerSatisfaction == 5) {
    			$scope.risk = "HIGH";		
    		}

    		// aksi
    		if ($scope.customerSatisfaction == 1 && $scope.safety == 1) {
    			$scope.action = "Life Extension Program";		
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.safety == 2) {
    			$scope.action = "Life Extension Program";		
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.safety == 3) {
    			$scope.action = "Life Extension Program";		
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.safety == 4) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 1 && $scope.safety == 5) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 2 && $scope.safety == 1) {
    			$scope.action = "Life Extension Program";		
    		}
    		else if ($scope.customerSatisfaction == 2 && $scope.safety == 2) {
    			$scope.action = "Life Extension Program";		
    		}
    		else if ($scope.customerSatisfaction == 2 && $scope.safety == 3) {
    			$scope.action = "Life Extension Program";		
    		}
    		else if ($scope.customerSatisfaction == 2 && $scope.safety == 4) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 2 && $scope.safety == 5) {
    			$scope.action = "Repair/Refurbish";		
    		}

    		else if ($scope.customerSatisfaction == 3 && $scope.safety == 1) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 3 && $scope.safety == 2) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 3 && $scope.safety == 3) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 3 && $scope.safety == 4) {
    			$scope.action = "Replace/Run to Fail + Investment";		
    		}
    		else if ($scope.customerSatisfaction == 3 && $scope.safety == 5) {
    			$scope.action = "Replace/Run to Fail + Investment";		
    		}

    		else if ($scope.customerSatisfaction == 4 && $scope.safety == 1) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 4 && $scope.safety == 2) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 4 && $scope.safety == 3) {
    			$scope.action = "Repair/Refurbish";		
    		}
    		else if ($scope.customerSatisfaction == 4 && $scope.safety == 4) {
    			$scope.action = "Replace/Run to Fail + Investment";		
    		}
    		else if ($scope.customerSatisfaction == 4 && $scope.safety == 5) {
    			$scope.action = "Replace/Run to Fail + Investment";		
    		}
    		else if ($scope.customerSatisfaction == 5) {
    			$scope.action = "Replace/Run to Fail + Investment";		
    		}
    	};

    	$scope.resetHandler = function() {
    		$scope.likehood = 0;
    		$scope.safety = 0;
    		$scope.extraFuelCost = 0;
    		$scope.systemRealibility = 0;
    		$scope.equipmentCost = 0;
    		$scope.customerSatisfaction = 0;
    		$scope.risk = "";
    		$scope.action = "";
    	}
    });

(function() {
  var app = angular.module('store-directives', []);

  //Element Directives
    app.directive('productTitle', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-title.html'
      };
    });

    app.directive('productDescription', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-description.html'
      };
    });

    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "product-reviews.html"
      };
    });

    app.directive('productSpecs', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-specs.html'
      };
    });

  //TABS DIRECTIVE
    app.directive('productTabs', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-tabs.html',
        controller: function() {
          this.tab = 1;
          this.isSet = function(checkTab) {
            return checkTab === this.tab;
          };
          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: 'tab'
      };
    });

  //GALLERY DIRECTIVE
    app.directive('productGallery', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-gallery.html',
        controller: function() {
          this.current = 0;
          this.setCurrent = function(newGallery) {
            this.current = newGallery || 0;
          };
        },
        conrollerAs: 'gallery'
      };
    });

})();

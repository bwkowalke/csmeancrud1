'use strict';

(function(){

class SiteDefinitionComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('csmeancrudApp')
.component('siteDefinition', {
  templateUrl: 'app/siteDefinition/siteDefinition.html',
  controller: function ($scope, $http, $filter) {
    $http.get('/api/siteDefinitions')
    .success(function(data) {
      // Site definitions data is the source for the grid
      $scope.gridOptions.data = data;
      $scope.siteDefinitions = data;
    })
    .error(function(err) {
      alert('Error! Something went wrong');
    });

    $scope.gridOptions = {
        columnDefs: [
          {
              field: 'x',
              name: '',
              minWidth: 60, maxWidth: 60,
              pinnedLeft: true,
              enableSorting: false,
              enableColumnMenu: false,
              cellTooltip: 'Delete Row',
              cellTemplate:
                '<div class="ui-grid-cell-contents">' +
                    '<div class="btn-group">' +
                      '<button class="btn-primary btn-xs"' +
                        ' ng-click="grid.appScope.vm.editRow(grid, row)">' +
                        '<span class="glyphicon glyphicon-edit"></span>' +
                      '</button>' +
                      '<button class="btn-danger btn-xs" style="horizontal-align: center"' +
                        ' data-toggle="tooltip" data-placement="right" title="Delete"' +
                        ' ng-click="grid.appScope.deleteRowOfSiteDefinition(row)">' +
                        '<span class="glyphicon glyphicon-remove"></span>' +
                      '</button>' +
                      '</div>' +
                '</div>'
          },
          { field: 'facility', minWidth: 150 },
          { field: 'site', minWidth: 100 },
          { field: 'dateStart', name: 'dateStart', minWidth: 120, type: 'date', cellFilter: 'date:\'MM-dd-yyyy\'' },
          { field: 'agency', minWidth: 100 },
          { field: 'metro', minWidth: 100 },
          { field: 'area', minWidth: 100 },
          { field: 'fyBaseDate', minWidth: 120, type: 'date', cellFilter: 'date:\'MM-dd-yyyy\'' },
          { field: 'skillsTable', minWidth: 100 },
          { field: 'convertWait', minWidth: 100 }
        ],
        enableColumnResizing: true,
          // enableSorting: true,
        showGridFooter: true,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [0, 30, 0, 0]},
        exporterPdfTableHeaderStyle: {fontSize: 8, bold: true, italics: false, color: 'blue'},
        // exporterPdfHeader: { text: 'My Header', style: 'headerStyle' },
        exporterPdfHeader: function ( ) {
          return { text: 'A - Site Definitions \n Printed on ' + new Date().toDateString() +
            ' ' + new Date().toTimeString() , style: 'headerStyle' };
        },
        exporterPdfFooter: function ( currentPage, pageCount ) {
          return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
          docDefinition.styles.headerStyle = {
            fontSize: 10,
            bold: true,
            alignment: 'center',
            margin: [0, 10, 0, 0]
          };
          docDefinition.styles.footerStyle = { fontSize: 8, bold: true };
          return docDefinition;
        },
        exporterFieldCallback: function(grid, row, col, input) {
          // format date fields in export for CSV, PDF
          if (col.name === 'dateStart'  || col.name === 'fyBaseDate') {
            return moment(input).format('MM-DD-YYYY');
          } else {
              return input;
            }
          },

        // exporterFieldCallback: function ( grid, row, col, input ){
        //   var value: String;
        //   if ( col.field === 'dateStart' ){
        //     value = $filter('date')(input, 'yyyyMMdd');
        //   }
        //   return value;
        //   // if (col.cellFilter!=undefined && col.cellFilter.length !=0) {
        //   //   var filters = col.cellFilter.split('|');
        //   //   for(var i =0; i<filters.length;i++) {
        //   //     var pars = filters[i].match(/[^\:"']+|'([^']*)'|'([^']*)'+/g);
        //   //     var filterName= pars[0].trim();
        //   //     var filterPar = null;
        //   //     if (pars.length ==2) {
        //   //        filterPar = pars[1].slice(1, -1);
        //   //       input = $filter(filterName)( input,filterPar);
        //   //     } else {
        //   //       input = $filter(filterName)( input );
        //   //     }
        //   //   }
        //   // }
        //   // return input;
        // },
        exporterPdfOrientation: 'landscape',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll('.custom-csv-link-location')),
        exporterSuppressColumns: [''],
        onRegisterApi: function(gridApi){
          $scope.gridApi = gridApi;
        }
      };

    $scope.addNewSiteDefinition = function(){
      $http.post('/api/siteDefinitions', $scope.newSiteDefinition)
      .success(function(data){
        $scope.siteDefinitions.push(data);
        $scope.newSiteDefinition = {};
      })
      .error(function(err){
        alert('Error! Add New Site Definition failed');
      });
    };

    $scope.deleteRowOfSiteDefinition = function(row) {
          var index = $scope.gridOptions.data.indexOf(row.entity);
          // console.log('Row index: ' + index);
          $scope.deleteSiteDefinition(index);
    };

    $scope.deleteSiteDefinition = function(index){
      console.log('siteDefinition: ' + $scope.siteDefinitions);
      $http.delete('/api/siteDefinitions/' + $scope.siteDefinitions[index]._id)
      .success(function(){
        $scope.siteDefinitions.splice(index, 1);
      })
      .error(function(err){
        alert('Error! Delete Site Definition failed');
      });
    };

    $scope.updateRowOfSiteDefinition = function(row) {
          var index = $scope.gridOptions.data.indexOf(row.entity);
          // console.log('Row index: ' + index);
          $scope.updateSiteDefinition(index);
    };
    $scope.updateSiteDefinition = function(index){
      $http.put('/api/siteDefinitions/' + $scope.siteDefinitions[index]._id, $scope.siteDefinitions[index])
      .success(function(){
        $scope.siteDefinitions[index].edit = false;
      })
      .error(function(err){
        alert('Error! Update Site Definition failed');
      });
    };
  },
  controllerAs: 'siteDefinitionCtrl'
});


})();
